import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { BookOpen, ChevronLeft, ChevronRight, Headphones, Moon, Pause, Play, Sun, Volume2 } from 'lucide-react'
import { sevenDayCourse } from './data/course'

const partColors = {
  Creed: 'bg-moss text-white',
  Sacraments: 'bg-clay text-white',
  Morality: 'bg-amber-700 text-white',
  Prayer: 'bg-sky-700 text-white',
}

export default function App() {
  const [activeDay, setActiveDay] = useState(1)
  const [isPlaying, setIsPlaying] = useState(false)
  const [transitionDirection, setTransitionDirection] = useState<'next' | 'previous'>('next')
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = window.localStorage.getItem('digital-catechism-theme')
    return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const [activeDayBox, setActiveDayBox] = useState({ x: 0, y: 0, width: 0, height: 0 })
  const touchStart = useRef<{ x: number; y: number } | null>(null)
  const dayNavigationRef = useRef<HTMLElement | null>(null)
  const dayButtonRefs = useRef<Record<number, HTMLButtonElement | null>>({})
  const topic = sevenDayCourse[activeDay - 1]

  const goToDay = (day: number) => {
    const nextDay = Math.max(1, Math.min(sevenDayCourse.length, day))
    if (nextDay === activeDay) return
    setTransitionDirection(nextDay > activeDay ? 'next' : 'previous')
    setActiveDay(nextDay)
  }

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    window.localStorage.setItem('digital-catechism-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  useLayoutEffect(() => {
    const navigation = dayNavigationRef.current
    const activeButton = dayButtonRefs.current[activeDay]
    if (!navigation || !activeButton) return

    const updateActiveDayBox = () => {
      const navigationBounds = navigation.getBoundingClientRect()
      const buttonBounds = activeButton.getBoundingClientRect()
      setActiveDayBox({
        x: buttonBounds.left - navigationBounds.left + navigation.scrollLeft,
        y: buttonBounds.top - navigationBounds.top + navigation.scrollTop,
        width: buttonBounds.width,
        height: buttonBounds.height,
      })
    }

    const keepActiveButtonVisible = () => {
      const navigationBounds = navigation.getBoundingClientRect()
      const buttonBounds = activeButton.getBoundingClientRect()
      const hiddenOnLeft = buttonBounds.left < navigationBounds.left
      const hiddenOnRight = buttonBounds.right > navigationBounds.right

      if (hiddenOnLeft || hiddenOnRight) {
        navigation.scrollBy({
          left: buttonBounds.left - navigationBounds.left - (hiddenOnRight ? navigationBounds.width - buttonBounds.width : 0),
          behavior: 'smooth',
        })
      }
    }

    updateActiveDayBox()
    requestAnimationFrame(keepActiveButtonVisible)
    const resizeObserver = new ResizeObserver(updateActiveDayBox)
    resizeObserver.observe(navigation)
    resizeObserver.observe(activeButton)
    window.addEventListener('resize', updateActiveDayBox)
    navigation.addEventListener('scroll', updateActiveDayBox, { passive: true })
    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', updateActiveDayBox)
      navigation.removeEventListener('scroll', updateActiveDayBox)
    }
  }, [activeDay])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') goToDay(activeDay + 1)
      if (event.key === 'ArrowLeft') goToDay(activeDay - 1)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeDay])

  useEffect(() => {
    window.speechSynthesis.cancel()
    setIsPlaying(false)
    return () => window.speechSynthesis.cancel()
  }, [activeDay])

  const toggleSpeech = () => {
    if (!('speechSynthesis' in window)) return

    if (isPlaying) {
      window.speechSynthesis.cancel()
      setIsPlaying(false)
      return
    }

    const script = [
      topic.title,
      topic.introduction,
      ...topic.summary,
      'For today.',
      ...topic.application,
      `Stay with it. ${topic.reflection}`,
    ].join(' ')
    const utterance = new SpeechSynthesisUtterance(script)
    utterance.lang = 'en-US'
    utterance.rate = 0.95
    utterance.onend = () => setIsPlaying(false)
    utterance.onerror = () => setIsPlaying(false)

    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(utterance)
    setIsPlaying(true)
  }

  return (
    <main className={`min-h-screen bg-parchment text-ink transition-colors ${isDark ? 'dark' : ''}`}>
      <header className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <div className="shrink-0 rounded-full bg-ink p-2 text-parchment"><BookOpen size={18} /></div>
          <span className="truncate font-display text-xl">Digital Catechism</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden text-xs font-bold uppercase tracking-[0.2em] text-moss sm:block">A seven-day walk</span>
          <button className="theme-button" type="button" aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'} onClick={() => setIsDark((themeIsDark) => !themeIsDark)}>
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>
      </header>

      <div className="mx-auto grid min-w-0 max-w-7xl gap-8 px-5 pb-[calc(6rem+env(safe-area-inset-bottom))] sm:px-8 lg:grid-cols-[280px_1fr] lg:gap-16 lg:pb-32">
        <aside className="min-w-0 pt-5 lg:sticky lg:top-5 lg:h-fit">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-moss">Your journey</p>
          <nav ref={dayNavigationRef} className="day-navigation min-w-0 max-w-full flex gap-2 overflow-x-auto pb-2 lg:block lg:space-y-2">
            <span className="active-day-box" aria-hidden="true" style={{ transform: `translate(${activeDayBox.x}px, ${activeDayBox.y}px)`, width: activeDayBox.width, height: activeDayBox.height }} />
            {sevenDayCourse.map((day) => (
              <button ref={(element) => { dayButtonRefs.current[day.day] = element }} key={day.day} onClick={() => goToDay(day.day)} aria-current={activeDay === day.day ? 'step' : undefined} className={`day-button ${activeDay === day.day ? 'active' : ''}`}>
                <span className="text-xs font-bold uppercase tracking-wider">Day {day.day}</span>
                <span className="hidden truncate text-sm lg:block">{day.title}</span>
              </button>
            ))}
          </nav>
          <div className="mt-8 hidden border-t border-ink/10 pt-5 text-sm leading-relaxed text-ink/60 lg:block">
            <p>Seven quiet steps through the essential shape of Catholic faith.</p>
            <div className="mt-5 h-1 rounded-full bg-ink/10"><div className="h-full rounded-full bg-moss transition-all" style={{ width: `${(activeDay / 7) * 100}%` }} /></div>
            <p className="mt-2 text-xs font-bold uppercase tracking-wider text-moss">{activeDay} of 7 complete</p>
          </div>
        </aside>

        <section key={topic.day} className={`topic-page ${transitionDirection}`} onTouchStart={(event) => { touchStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY } }} onTouchEnd={(event) => {
          if (touchStart.current === null) return
          const horizontalDistance = event.changedTouches[0].clientX - touchStart.current.x
          const verticalDistance = event.changedTouches[0].clientY - touchStart.current.y
          if (Math.abs(horizontalDistance) > 60 && Math.abs(horizontalDistance) > Math.abs(verticalDistance)) goToDay(activeDay + (horizontalDistance < 0 ? 1 : -1))
          touchStart.current = null
        }}>
          <div className="mb-8 flex items-center justify-between text-sm text-ink/50"><span>Day {String(topic.day).padStart(2, '0')}</span><span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${partColors[topic.part]}`}>{topic.part}</span></div>
          <p className="mb-3 font-bold uppercase tracking-[0.25em] text-moss">{topic.part} / The essentials</p>
          <h1 className="max-w-3xl font-display text-5xl leading-[0.98] sm:text-7xl">{topic.title}</h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink/70">{topic.introduction}</p>

          <div className="mt-12 grid gap-10 border-t border-ink/10 pt-10 md:grid-cols-[1fr_0.65fr]">
            <div><h2 className="section-label">A little deeper</h2><div className="space-y-4 text-lg leading-relaxed">{topic.summary.map((line) => <p key={line}>{line}</p>)}</div></div>
            <div className="space-y-8"><div><h2 className="section-label">For today</h2><div className="space-y-3 text-base leading-relaxed text-ink/75">{topic.application.map((line) => <p key={line}>{line}</p>)}</div></div><div className="border-l-2 border-clay pl-5"><h2 className="section-label">Stay with it</h2><p className="font-display text-2xl leading-snug">{topic.reflection}</p></div></div>
          </div>

          <div className="mt-14 flex justify-between border-t border-ink/10 pt-5"><button className="nav-button" disabled={activeDay === 1} onClick={() => goToDay(activeDay - 1)}><ChevronLeft size={18} /> Previous</button><button className="nav-button" disabled={activeDay === 7} onClick={() => goToDay(activeDay + 1)}>Next <ChevronRight size={18} /></button></div>
        </section>
      </div>

      <div className="audio-dock"><div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-3 sm:px-8"><div className="hidden rounded-full bg-clay/15 p-2 text-clay sm:block"><Headphones size={18} /></div><div className="min-w-0 flex-1"><p className="truncate text-sm font-bold">Daily reflection</p><p className="text-xs text-ink/55">Browser narration · Day {activeDay}</p></div><button aria-label={isPlaying ? 'Pause narration' : 'Read aloud'} className="play-button" onClick={toggleSpeech}>{isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}</button><div className="hidden items-center gap-2 sm:flex"><Volume2 size={16} className="text-ink/50" /><div className="h-1 w-24 rounded-full bg-ink/15"><div className="h-full w-1/3 rounded-full bg-clay" /></div></div></div></div>
    </main>
  )
}
