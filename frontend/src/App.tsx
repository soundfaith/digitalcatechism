import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ArrowLeft, BookOpen, Check, ChevronLeft, ChevronRight, Clock3, Copy, Headphones, Heart, Mail, MessageCircle, Moon, NotebookPen, Pause, Play, Search, Share2, Sun, X } from 'lucide-react'
import { completeCccLibrary, fourteenDayCourse, sevenDayCourse, thirtyDayCourse } from './data/course'

const partColors = {
  Creed: 'bg-moss text-white',
  Sacraments: 'bg-clay text-white',
  Morality: 'bg-amber-700 text-white',
  Prayer: 'bg-sky-700 text-white',
}

type CourseId = 'seven' | 'fourteen' | 'thirty' | 'library'
type View = 'landing' | 'overview' | 'reader' | 'journal' | 'favorites'

const courses = {
  seven: {
    title: 'CCC in 7 Days',
    description: 'A gentle first walk through the essential shape of Catholic faith.',
    detail: 'Seven quiet steps',
    topics: sevenDayCourse,
  },
  fourteen: {
    title: 'CCC in 14 Days',
    description: 'A slower, deeper journey through the essential shape of Catholic faith.',
    detail: 'Fourteen unhurried steps',
    topics: fourteenDayCourse,
  },
  thirty: {
    title: 'CCC in 30 Days',
    description: 'The deepest journey through the essential shape of Catholic faith, with room to stay and grow.',
    detail: 'Thirty days of depth',
    topics: thirtyDayCourse,
  },
  library: {
    title: 'Complete CCC Library',
    description: 'A structured reference library covering the Catechism’s major doctrinal and spiritual themes.',
    detail: 'The complete library',
    topics: completeCccLibrary,
  },
} as const

const courseIds = Object.keys(courses) as CourseId[]
const getTopicRoute = () => {
  const match = window.location.pathname.match(/^\/course\/([^/]+)\/topic\/(\d+)$/)
  if (!match || !courseIds.includes(match[1] as CourseId)) return null
  return { courseId: match[1] as CourseId, topic: Number(match[2]) }
}

const topicPath = (courseId: CourseId, topic: number) => `/course/${courseId}/topic/${topic}`

const resumeStorageKey = 'digital-catechism-resume'
const lastCourseStorageKey = 'digital-catechism-last-course'
const completedStorageKey = 'digital-catechism-completed'
const journalStorageKey = 'digital-catechism-journal'
const favoritesStorageKey = 'digital-catechism-favorites'
type ResumeState = Partial<Record<CourseId, number>>
type CompletedState = Partial<Record<CourseId, number[]>>
type JournalState = Record<string, string>
type FavoritesState = Partial<Record<CourseId, number[]>>

const readResumeState = (): ResumeState => {
  try {
    return JSON.parse(window.localStorage.getItem(resumeStorageKey) ?? '{}') as ResumeState
  } catch {
    return {}
  }
}

const readCompletedState = (): CompletedState => {
  try {
    return JSON.parse(window.localStorage.getItem(completedStorageKey) ?? '{}') as CompletedState
  } catch {
    return {}
  }
}

const readJsonState = <T,>(key: string, fallback: T): T => {
  try {
    return JSON.parse(window.localStorage.getItem(key) ?? JSON.stringify(fallback)) as T
  } catch {
    return fallback
  }
}

export default function App() {
  const [resumeState, setResumeState] = useState<ResumeState>(readResumeState)
  const [completedState, setCompletedState] = useState<CompletedState>(readCompletedState)
  const [journalState, setJournalState] = useState<JournalState>(() => readJsonState(journalStorageKey, {}))
  const [favoritesState, setFavoritesState] = useState<FavoritesState>(() => readJsonState(favoritesStorageKey, {}))
  const [selectedCourse, setSelectedCourse] = useState<CourseId>(() => {
    const saved = readResumeState()
    const lastCourse = window.localStorage.getItem(lastCourseStorageKey) as CourseId | null
    return lastCourse && saved[lastCourse] ? lastCourse : saved.library ? 'library' : saved.thirty ? 'thirty' : saved.fourteen ? 'fourteen' : 'seven'
  })
  const [view, setView] = useState<View>(() => Object.keys(readResumeState()).length ? 'reader' : 'landing')
  const [activeDay, setActiveDay] = useState(() => readResumeState().library ?? readResumeState().thirty ?? readResumeState().fourteen ?? readResumeState().seven ?? 1)
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioProgress, setAudioProgress] = useState(0)
  const [isLibraryPickerOpen, setIsLibraryPickerOpen] = useState(false)
  const [isShareOpen, setIsShareOpen] = useState(false)
  const [copyState, setCopyState] = useState<'idle' | 'copied'>('idle')
  const [librarySearch, setLibrarySearch] = useState('')
  const [librarySidebarSearch, setLibrarySidebarSearch] = useState('')
  const [transitionDirection, setTransitionDirection] = useState<'next' | 'previous'>('next')
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = window.localStorage.getItem('digital-catechism-theme')
    return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const route = getTopicRoute()
  const [activeDayBox, setActiveDayBox] = useState({ x: 0, y: 0, width: 0, height: 0 })
  const touchStart = useRef<{ x: number; y: number } | null>(null)
  const dayNavigationRef = useRef<HTMLElement | null>(null)
  const dayButtonRefs = useRef<Record<number, HTMLButtonElement | null>>({})
  const shareMenuRef = useRef<HTMLDivElement | null>(null)
  const audioTimerRef = useRef<number | null>(null)
  const speechRunRef = useRef(0)
  const activeCourse = courses[selectedCourse].topics
  const isLibrary = selectedCourse === 'library'
  const isLongCourse = activeCourse.length >= 14
  const safeActiveDay = Number.isInteger(activeDay) ? Math.min(activeCourse.length, Math.max(1, activeDay)) : 1
  const topic = activeCourse[safeActiveDay - 1]
  const completedTopics = isLibrary ? [] : completedState[selectedCourse] ?? []
  const completedCount = completedTopics.length
  const journalKey = `${selectedCourse}-${activeDay}`
  const journalText = journalState[journalKey] ?? ''
  const savedLastCourse = window.localStorage.getItem(lastCourseStorageKey) as CourseId | null
  const resumeCourseId = savedLastCourse && resumeState[savedLastCourse] ? savedLastCourse : (Object.keys(resumeState)[0] as CourseId | undefined)
  const resumeCourse = resumeCourseId ? courses[resumeCourseId] : null
  const resumeDay = resumeCourseId ? resumeState[resumeCourseId] ?? 1 : 1
  const resumeTopic = resumeCourse?.topics[resumeDay - 1]

  const libraryTopicsByPart = (['Creed', 'Sacraments', 'Morality', 'Prayer'] as const).map((part) => ({
    part,
    topics: activeCourse.map((item, index) => ({ item, index })).filter(({ item }) => item.part === part && item.title.toLowerCase().includes(librarySearch.toLowerCase())),
  })).filter(({ topics }) => topics.length > 0)
  const visibleLibraryTopics = isLibrary ? activeCourse.filter((item) => item.title.toLowerCase().includes(librarySidebarSearch.toLowerCase())) : activeCourse

  useEffect(() => {
    if (activeDay === safeActiveDay) return
    setActiveDay(safeActiveDay)
    const nextResumeState = { ...resumeState, [selectedCourse]: safeActiveDay }
    setResumeState(nextResumeState)
    window.localStorage.setItem(resumeStorageKey, JSON.stringify(nextResumeState))
  }, [activeDay, safeActiveDay, selectedCourse])

  useEffect(() => {
    if (!route) return
    const routeTopic = courses[route.courseId].topics[route.topic - 1]
    if (!routeTopic) return
    setSelectedCourse(route.courseId)
    setActiveDay(route.topic)
    setView('reader')
  }, [])

  useEffect(() => {
    if (!isShareOpen) return
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!shareMenuRef.current?.contains(event.target as Node)) setIsShareOpen(false)
    }
    document.addEventListener('pointerdown', closeOnOutsideClick)
    return () => document.removeEventListener('pointerdown', closeOnOutsideClick)
  }, [isShareOpen])

  useEffect(() => {
    const handlePopState = () => {
      const nextRoute = getTopicRoute()
      if (!nextRoute || !courses[nextRoute.courseId].topics[nextRoute.topic - 1]) {
        setView('landing')
        return
      }
      setSelectedCourse(nextRoute.courseId)
      setActiveDay(nextRoute.topic)
      setView('reader')
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const openCourse = (courseId: CourseId) => {
    const nextDay = resumeState[courseId] ?? 1
    const nextResumeState = { ...resumeState, [courseId]: nextDay }
    setSelectedCourse(courseId)
    setActiveDay(nextDay)
    setResumeState(nextResumeState)
    window.localStorage.setItem(resumeStorageKey, JSON.stringify(nextResumeState))
    window.localStorage.setItem(lastCourseStorageKey, courseId)
    setView('reader')
    window.history.pushState({}, '', topicPath(courseId, nextDay))
  }

  const showOverview = (courseId: CourseId) => {
    setSelectedCourse(courseId)
    setView('overview')
  }

  const showJournal = () => {
    window.speechSynthesis.cancel()
    setIsPlaying(false)
    setView('journal')
  }

  const showFavorites = () => {
    window.speechSynthesis.cancel()
    setIsPlaying(false)
    setView('favorites')
  }

  const saveJournal = (value: string) => {
    const nextJournalState = { ...journalState, [journalKey]: value }
    setJournalState(nextJournalState)
    window.localStorage.setItem(journalStorageKey, JSON.stringify(nextJournalState))
  }

  const toggleFavorite = (day: number) => {
    const currentFavorites = favoritesState[selectedCourse] ?? []
    const nextFavorites = currentFavorites.includes(day) ? currentFavorites.filter((item) => item !== day) : [...currentFavorites, day].sort((left, right) => left - right)
    const nextFavoritesState = { ...favoritesState, [selectedCourse]: nextFavorites }
    setFavoritesState(nextFavoritesState)
    window.localStorage.setItem(favoritesStorageKey, JSON.stringify(nextFavoritesState))
  }

  const showLanding = () => {
    speechRunRef.current += 1
    window.speechSynthesis.cancel()
    if (audioTimerRef.current !== null) window.clearInterval(audioTimerRef.current)
    setIsPlaying(false)
    setAudioProgress(0)
    setView('landing')
    window.history.pushState({}, '', '/')
  }

  const goToDay = (day: number) => {
    const nextDay = Math.max(1, Math.min(activeCourse.length, day))
    if (nextDay === activeDay) return
    setTransitionDirection(nextDay > activeDay ? 'next' : 'previous')
    setActiveDay(nextDay)
    window.history.pushState({}, '', topicPath(selectedCourse, nextDay))
    setIsLibraryPickerOpen(false)
    if (!isLibrary && nextDay > activeDay) {
      const nextCompletedState = { ...completedState, [selectedCourse]: Array.from(new Set([...(completedState[selectedCourse] ?? []), activeDay])).sort((left, right) => left - right) }
      setCompletedState(nextCompletedState)
      window.localStorage.setItem(completedStorageKey, JSON.stringify(nextCompletedState))
    }
    const nextResumeState = { ...resumeState, [selectedCourse]: nextDay }
    setResumeState(nextResumeState)
    window.localStorage.setItem(resumeStorageKey, JSON.stringify(nextResumeState))
    window.localStorage.setItem(lastCourseStorageKey, selectedCourse)
  }

  const shareUrl = `${window.location.origin}${topicPath(selectedCourse, safeActiveDay)}`
  const shareText = `${topic.title} | Digital Catechism`

  const copyShareLink = async () => {
    await navigator.clipboard.writeText(shareUrl)
    setCopyState('copied')
    window.setTimeout(() => setCopyState('idle'), 1800)
  }

  const shareToMessages = async () => {
    if (navigator.share) {
      await navigator.share({ title: shareText, text: topic.introduction, url: shareUrl })
      setIsShareOpen(false)
      return
    }
    window.location.href = `sms:?body=${encodeURIComponent(`${shareText}\n${shareUrl}`)}`
    setIsShareOpen(false)
  }

  const shareToWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(`${shareText}\n${shareUrl}`)}`, '_blank', 'noopener,noreferrer')
    setIsShareOpen(false)
  }

  const shareToEmail = () => {
    window.location.href = `mailto:?subject=${encodeURIComponent(shareText)}&body=${encodeURIComponent(`${topic.introduction}\n\nRead more: ${shareUrl}`)}`
    setIsShareOpen(false)
  }

  const openOverviewTopic = (day: number) => {
    setActiveDay(day)
    const nextResumeState = { ...resumeState, [selectedCourse]: day }
    setResumeState(nextResumeState)
    window.localStorage.setItem(resumeStorageKey, JSON.stringify(nextResumeState))
    window.localStorage.setItem(lastCourseStorageKey, selectedCourse)
    window.history.pushState({}, '', topicPath(selectedCourse, day))
    setView('reader')
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
      if (isLongCourse) {
        activeButton.scrollIntoView({ block: 'nearest' })
        return
      }
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
  }, [activeDay, activeCourse.length, isLongCourse])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') goToDay(activeDay + 1)
      if (event.key === 'ArrowLeft') goToDay(activeDay - 1)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeDay, selectedCourse])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsLibraryPickerOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    if (view !== 'journal') return
    const entries = Array.from(document.querySelectorAll<HTMLElement>('article.saved-entry'))
    const openEntry = (entry: HTMLElement) => {
      const title = entry.querySelector('h2')?.textContent
      if (!title) return
      const matchingCourse = (Object.keys(courses) as CourseId[]).find((courseId) => courses[courseId].topics.some((item) => item.title === title))
      const matchingTopic = matchingCourse ? courses[matchingCourse].topics.find((item) => item.title === title) : undefined
      if (!matchingCourse || !matchingTopic) return
      setSelectedCourse(matchingCourse)
      setActiveDay(matchingTopic.day)
      window.history.pushState({}, '', topicPath(matchingCourse, matchingTopic.day))
      setView('reader')
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        openEntry(event.currentTarget as HTMLElement)
      }
    }
    entries.forEach((entry) => {
      entry.tabIndex = 0
      entry.addEventListener('click', () => openEntry(entry))
      entry.addEventListener('keydown', handleKeyDown)
    })
    return () => entries.forEach((entry) => {
      entry.removeEventListener('keydown', handleKeyDown)
    })
  }, [view, journalState])

  useEffect(() => {
    window.speechSynthesis.cancel()
    speechRunRef.current += 1
    if (audioTimerRef.current !== null) window.clearInterval(audioTimerRef.current)
    setIsPlaying(false)
    setAudioProgress(0)
    return () => window.speechSynthesis.cancel()
  }, [activeDay, selectedCourse])

  const startSpeech = () => {
    if (!('speechSynthesis' in window)) return

    const segments = [
      topic.title,
      topic.introduction,
      ...topic.summary,
      ...topic.application,
      topic.reflection,
    ]
    const segmentDurations = segments.map((segment) => Math.max(1300, segment.length * 68))
    const estimatedDuration = segmentDurations.reduce((total, duration) => total + duration, 0) + (segments.length - 1) * 450
    const runId = speechRunRef.current + 1
    speechRunRef.current = runId
    const startedAt = Date.now()
    if (audioTimerRef.current !== null) window.clearInterval(audioTimerRef.current)
    audioTimerRef.current = window.setInterval(() => setAudioProgress(Math.min(99, ((Date.now() - startedAt) / estimatedDuration) * 100)), 100)

    const speakSegment = (segmentIndex: number) => {
      if (speechRunRef.current !== runId) return
      if (segmentIndex >= segments.length) {
        if (audioTimerRef.current !== null) window.clearInterval(audioTimerRef.current)
        setAudioProgress(100)
        setIsPlaying(false)
        return
      }

      const utterance = new SpeechSynthesisUtterance(segments[segmentIndex])
      utterance.lang = 'en-US'
      utterance.rate = 0.95
      utterance.onend = () => window.setTimeout(() => speakSegment(segmentIndex + 1), 450)
      utterance.onerror = () => {
        if (audioTimerRef.current !== null) window.clearInterval(audioTimerRef.current)
        setIsPlaying(false)
      }
      window.speechSynthesis.speak(utterance)
    }

    window.speechSynthesis.cancel()
    setAudioProgress(0)
    speakSegment(0)
    setIsPlaying(true)
  }

  const toggleSpeech = () => {
    if (!('speechSynthesis' in window)) return
    if (isPlaying) {
      speechRunRef.current += 1
      window.speechSynthesis.cancel()
      if (audioTimerRef.current !== null) window.clearInterval(audioTimerRef.current)
      setIsPlaying(false)
      setAudioProgress(0)
      return
    }
    startSpeech()
  }

  if (view === 'landing') {
    return (
      <main className={`min-h-screen bg-parchment text-ink transition-colors ${isDark ? 'dark' : ''}`}>
        <header className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <div className="shrink-0 rounded-full bg-ink p-2 text-parchment"><BookOpen size={18} /></div>
            <span className="truncate font-display text-xl">Digital Catechism</span>
          </div>
          <button className="theme-button" type="button" aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'} onClick={() => setIsDark((themeIsDark) => !themeIsDark)}>
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </header>
        <section className="mx-auto max-w-7xl px-5 pb-24 pt-14 sm:px-8 sm:pt-24">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-moss">Begin where you are</p>
          {resumeCourse && resumeTopic && <div className="resume-card"><div><p className="resume-kicker">Continue where you left off</p><p className="resume-course">{resumeCourse.title}</p><h2 className="mt-2 font-display text-3xl">{resumeTopic.title}</h2><p className="mt-2 text-sm text-ink/60">{resumeCourseId === 'library' ? `Topic ${resumeDay}` : `Day ${resumeDay}`}</p></div><button className="resume-button" type="button" onClick={() => openCourse(resumeCourseId!)}>Resume <ChevronRight size={17} /></button></div>}
          <h1 className="max-w-3xl font-display text-5xl leading-[0.98] sm:text-7xl">A faithful rhythm for every season.</h1>
          <p className="mt-7 max-w-2xl text-xl leading-relaxed text-ink/70">Choose a course and make a little room each day for the essential shape of Catholic faith.</p>
          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <button className="course-card" type="button" onClick={() => showOverview('seven')}>
              <span className="course-card-number">01</span><span className="course-card-kicker">A short beginning</span><h2 className="font-display text-3xl">CCC in 7 Days</h2><p className="mt-4 text-base leading-relaxed text-ink/65">{courses.seven.description}</p><span className="course-card-action">Start the journey <ChevronRight size={17} /></span>
            </button>
            <button className="course-card featured" type="button" onClick={() => showOverview('fourteen')}>
              <span className="course-card-number">02</span><span className="course-card-kicker">More room to linger</span><h2 className="font-display text-3xl">CCC in 14 Days</h2><p className="mt-4 text-base leading-relaxed text-ink/65">{courses.fourteen.description}</p><span className="course-card-action">Start the journey <ChevronRight size={17} /></span>
            </button>
            <button className="course-card featured" type="button" onClick={() => showOverview('thirty')}><span className="course-card-number">03</span><span className="course-card-kicker">The full journey</span><h2 className="font-display text-3xl">CCC in 30 Days</h2><p className="mt-4 text-base leading-relaxed text-ink/65">{courses.thirty.description}</p><span className="course-card-action">View overview <ChevronRight size={17} /></span></button>
            <button className="course-card" type="button" onClick={() => showOverview('library')}><span className="course-card-number">04</span><span className="course-card-kicker">Reference and discovery</span><h2 className="font-display text-3xl">Complete CCC Library</h2><p className="mt-4 text-base leading-relaxed text-ink/65">{courses.library.description}</p><span className="course-card-action">Explore the library <ChevronRight size={17} /></span></button>
          </div>
        </section>
      </main>
    )
  }

  if (view === 'overview') {
    const overviewCourse = courses[selectedCourse]
    const hasStarted = resumeState[selectedCourse] !== undefined
    return (
      <main className={`min-h-screen bg-parchment text-ink transition-colors ${isDark ? 'dark' : ''}`}>
        <header className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8"><div className="flex min-w-0 items-center gap-3"><div className="shrink-0 rounded-full bg-ink p-2 text-parchment"><BookOpen size={18} /></div><button className="truncate font-display text-xl" type="button" onClick={showLanding}>Digital Catechism</button></div><button className="theme-button" type="button" aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'} onClick={() => setIsDark((themeIsDark) => !themeIsDark)}>{isDark ? <Sun size={17} /> : <Moon size={17} />}</button></header>
        <section className="mx-auto max-w-7xl px-5 pb-24 pt-12 sm:px-8 sm:pt-20"><button className="catalog-button" type="button" onClick={showLanding}><ArrowLeft size={16} /> All courses</button><div className="overview-heading"><div><p className="mt-12 text-xs font-bold uppercase tracking-[0.25em] text-moss">Course overview</p><h1 className="mt-4 max-w-3xl font-display text-5xl leading-[0.98] sm:text-7xl">{overviewCourse.title}</h1><p className="mt-7 max-w-2xl text-xl leading-relaxed text-ink/70">{overviewCourse.description}</p><div className="mt-10 flex flex-wrap gap-6 text-sm text-ink/60"><span className="flex items-center gap-2"><Clock3 size={16} className="text-clay" /> {selectedCourse === 'library' ? 'Browse at your own pace' : `${overviewCourse.topics.length * 5} minutes total`}</span><span>{overviewCourse.topics.length} {selectedCourse === 'library' ? 'topics' : 'days'}</span></div></div><aside className="overview-actions"><button className="resume-button" type="button" onClick={() => openCourse(selectedCourse)}>{hasStarted ? 'Resume' : selectedCourse === 'library' ? 'Explore library' : 'Start Day 1'} <ChevronRight size={17} /></button>{hasStarted && <p className="mt-4 text-sm text-ink/60">Continue from {selectedCourse === 'library' ? `Topic ${resumeState[selectedCourse]}` : `Day ${resumeState[selectedCourse]}`}</p>}</aside></div><div className="mt-14"><h2 className="section-label">{selectedCourse === 'library' ? 'Library contents' : 'Day-by-day outline'}</h2><div className="overview-outline">{overviewCourse.topics.map((item) => <button className="overview-item" type="button" key={item.day} onClick={() => openOverviewTopic(item.day)}><span>{selectedCourse === 'library' ? String(item.day).padStart(3, '0') : `Day ${item.day}`}</span><strong>{item.title}</strong><em>{item.part}</em></button>)}</div></div></section>
      </main>
    )
  }

  if (view === 'journal' || view === 'favorites') {
    const journalItems = Object.entries(journalState).filter(([, value]) => value.trim()).map(([key, value]) => { const [courseId, dayValue] = key.split('-') as [CourseId, string]; return { courseId, day: Number(dayValue), value } }).sort((left, right) => right.day - left.day)
    const favoriteItems = (Object.keys(favoritesState) as CourseId[]).flatMap((courseId) => (favoritesState[courseId] ?? []).map((day) => ({ courseId, day, topic: courses[courseId].topics[day - 1] }))).filter((item) => item.topic)
    return (
      <main className={`min-h-screen bg-parchment text-ink transition-colors ${isDark ? 'dark' : ''}`}><header className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8"><div className="flex min-w-0 items-center gap-3"><div className="shrink-0 rounded-full bg-ink p-2 text-parchment"><BookOpen size={18} /></div><button className="truncate font-display text-xl" type="button" onClick={showLanding}>Digital Catechism</button></div><button className="theme-button" type="button" aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'} onClick={() => setIsDark((themeIsDark) => !themeIsDark)}>{isDark ? <Sun size={17} /> : <Moon size={17} />}</button></header><section className="mx-auto max-w-4xl px-5 pb-24 pt-12 sm:px-8 sm:pt-20"><button className="catalog-button" type="button" onClick={() => { setSelectedCourse(selectedCourse); setView('reader') }}><ArrowLeft size={16} /> Back to reading</button><p className="mt-12 text-xs font-bold uppercase tracking-[0.25em] text-moss">{view === 'journal' ? 'Your formation' : 'Saved for later'}</p><h1 className="mt-4 font-display text-5xl sm:text-7xl">{view === 'journal' ? 'My Journal' : 'Favorites'}</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">{view === 'journal' ? 'A private place for the thoughts you want to carry forward.' : 'The topics that have stayed with you.'}</p><div className="mt-14 space-y-5">{view === 'journal' ? journalItems.map((entry) => <article className="saved-entry" key={`${entry.courseId}-${entry.day}`}><p className="saved-entry-meta">{courses[entry.courseId].title} · {entry.courseId === 'library' ? `Topic ${entry.day}` : `Day ${entry.day}`}</p><h2 className="font-display text-2xl">{courses[entry.courseId].topics[entry.day - 1]?.title}</h2><p className="mt-3 whitespace-pre-wrap text-base leading-relaxed text-ink/75">{entry.value}</p></article>) : favoriteItems.map((item) => <button className="saved-entry favorite-entry" type="button" key={`${item.courseId}-${item.day}`} onClick={() => { setSelectedCourse(item.courseId); setActiveDay(item.day); setView('reader') }}><Heart size={17} fill="currentColor" /><div><p className="saved-entry-meta">{courses[item.courseId].title} · {item.courseId === 'library' ? `Topic ${item.day}` : `Day ${item.day}`}</p><h2 className="font-display text-2xl">{item.topic.title}</h2></div><ChevronRight size={18} /></button>)}{(view === 'journal' ? journalItems.length : favoriteItems.length) === 0 && <p className="text-ink/60">Nothing saved here yet.</p>}</div></section></main>
    )
  }

  return (
    <main className={`min-h-screen bg-parchment text-ink transition-colors ${isDark ? 'dark' : ''}`}>
      <header className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <div className="shrink-0 rounded-full bg-ink p-2 text-parchment"><BookOpen size={18} /></div>
          <button className="truncate font-display text-xl" type="button" onClick={showLanding}>Digital Catechism</button>
        </div>
        <div className="flex items-center gap-4">
          <button className="catalog-button" type="button" onClick={showLanding}><ArrowLeft size={16} /> <span className="hidden sm:inline">All courses</span></button>
          <span className="hidden text-xs font-bold uppercase tracking-[0.2em] text-moss sm:block">{courses[selectedCourse].detail}</span>
          <button className="theme-button" type="button" aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'} onClick={() => setIsDark((themeIsDark) => !themeIsDark)}>
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>
      </header>

      <div className="mx-auto grid min-w-0 max-w-7xl gap-8 px-5 pb-[calc(6rem+env(safe-area-inset-bottom))] sm:px-8 lg:grid-cols-[280px_1fr] lg:gap-16 lg:pb-32">
        <aside className="min-w-0 pt-5 lg:sticky lg:top-5 lg:h-fit">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-moss">Your journey</p>
          <div className="sidebar-tools"><button type="button" onClick={showJournal}><NotebookPen size={15} /> My Journal</button><button type="button" onClick={showFavorites}><Heart size={15} /> Favorites</button></div>
          {isLibrary && <label className="library-sidebar-search"><Search size={15} /><input type="search" aria-label="Search library topics" placeholder="Search topics" value={librarySidebarSearch} onChange={(event) => setLibrarySidebarSearch(event.target.value)} /></label>}
          {isLibrary && <button className="library-topic-button" type="button" onClick={() => setIsLibraryPickerOpen(true)}><Search size={16} /><span className="truncate">{topic.title}</span><span className="library-topic-count">{activeDay} / {activeCourse.length}</span></button>}
          <nav ref={dayNavigationRef} className={`day-navigation min-w-0 max-w-full gap-2 pb-2 ${isLongCourse && isLibrary ? 'long-navigation' : 'flex overflow-x-auto lg:block lg:space-y-2'}`}>
            <span className="active-day-box" aria-hidden="true" style={{ transform: `translate(${activeDayBox.x}px, ${activeDayBox.y}px)`, width: activeDayBox.width, height: activeDayBox.height }} />
            {visibleLibraryTopics.map((day) => (
              <button ref={(element) => { dayButtonRefs.current[day.day] = element }} key={day.day} onClick={() => goToDay(day.day)} aria-current={activeDay === day.day ? 'step' : undefined} className={`day-button ${activeDay === day.day ? 'active' : ''}`}>
                <span className="flex items-center justify-between gap-2 text-xs font-bold uppercase tracking-wider"><span>{isLibrary ? String(day.day).padStart(3, '0') : `Day ${day.day}`}</span>{!isLibrary && completedState[selectedCourse]?.includes(day.day) && <Check className="topic-check" size={14} strokeWidth={2.5} aria-label="Completed" />}</span>
                <span className="hidden truncate text-sm lg:block">{day.title}</span>
              </button>
            ))}
          </nav>
          {isLibrary && isLibraryPickerOpen && <div className="library-picker-backdrop" role="presentation" onClick={() => setIsLibraryPickerOpen(false)}><section className="library-picker" role="dialog" aria-modal="true" aria-label="Choose a library topic" onClick={(event) => event.stopPropagation()}><div className="library-picker-header"><div><p className="section-label">Table of contents</p><h2 className="font-display text-2xl">Explore the library</h2></div><button className="theme-button" type="button" aria-label="Close topic selector" onClick={() => setIsLibraryPickerOpen(false)}><X size={17} /></button></div><label className="library-search"><Search size={16} /><input autoFocus type="search" placeholder="Search topics" value={librarySearch} onChange={(event) => setLibrarySearch(event.target.value)} /></label><div className="library-picker-list">{libraryTopicsByPart.map(({ part, topics }) => <div key={part}><p className="library-picker-part">{part}</p>{topics.map(({ item, index }) => <button key={item.day} type="button" className={`library-picker-topic ${activeDay === index + 1 ? 'active' : ''}`} onClick={() => goToDay(index + 1)}><span>{String(item.day).padStart(3, '0')}</span><strong>{item.title}</strong></button>)}</div>)}{libraryTopicsByPart.length === 0 && <p className="text-sm text-ink/60">No topics found.</p>}</div></section></div>}
          <div className="mt-8 hidden border-t border-ink/10 pt-5 text-sm leading-relaxed text-ink/60 lg:block">
            <p>{isLibrary ? 'A reference path through the Catechism’s major themes.' : `${selectedCourse === 'seven' ? 'Seven quiet steps' : 'Fourteen unhurried steps'} through the essential shape of Catholic faith.`}</p>
            <div className="mt-5 h-1 rounded-full bg-ink/10"><div className="h-full rounded-full bg-moss transition-all" style={{ width: `${(completedCount / activeCourse.length) * 100}%` }} /></div>
            <p className="mt-2 text-xs font-bold uppercase tracking-wider text-moss">{isLibrary ? `${activeDay} of ${activeCourse.length} topics` : `${completedCount} of ${activeCourse.length} complete`}</p>
          </div>
        </aside>

        <section key={topic.day} className={`topic-page ${transitionDirection}`} onTouchStart={(event) => { touchStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY } }} onTouchEnd={(event) => {
          if (touchStart.current === null) return
          const horizontalDistance = event.changedTouches[0].clientX - touchStart.current.x
          const verticalDistance = event.changedTouches[0].clientY - touchStart.current.y
          if (Math.abs(horizontalDistance) > 60 && Math.abs(horizontalDistance) > Math.abs(verticalDistance)) goToDay(activeDay + (horizontalDistance < 0 ? 1 : -1))
          touchStart.current = null
        }}>
          <div className="mb-8 flex items-center justify-between text-sm text-ink/50"><span>{isLibrary ? `Topic ${String(topic.day).padStart(3, '0')}` : `Day ${String(topic.day).padStart(2, '0')}`}</span><div className="topic-meta-actions"><button className={`favorite-button ${favoritesState[selectedCourse]?.includes(topic.day) ? 'active' : ''}`} type="button" aria-label={favoritesState[selectedCourse]?.includes(topic.day) ? 'Remove from favorites' : 'Add to favorites'} onClick={() => toggleFavorite(topic.day)}><Heart size={18} fill={favoritesState[selectedCourse]?.includes(topic.day) ? 'currentColor' : 'none'} /></button><div ref={shareMenuRef} className="share-menu"><button className="share-button" type="button" aria-label="Share this topic" aria-expanded={isShareOpen} onClick={() => setIsShareOpen((open) => !open)}><Share2 size={18} /></button>{isShareOpen && <div className="share-options" role="menu"><button type="button" onClick={copyShareLink}><Copy size={15} /> {copyState === 'copied' ? 'Copied' : 'Copy link'}</button><button type="button" onClick={shareToMessages}><MessageCircle size={15} /> Share to Messages</button><button type="button" onClick={shareToWhatsApp}><MessageCircle size={15} /> Share to WhatsApp</button><button type="button" onClick={shareToEmail}><Mail size={15} /> Share by email</button></div>}</div><span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${partColors[topic.part]}`}>{topic.part}</span></div></div>
          <p className="mb-3 font-bold uppercase tracking-[0.25em] text-moss">{topic.part} / The essentials</p>
          <div className="topic-title-row"><h1 className="max-w-3xl font-display text-5xl leading-[0.98] sm:text-7xl">{topic.title}</h1></div>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink/70">{topic.introduction}</p>

          <div className="mt-12 grid gap-10 border-t border-ink/10 pt-10 md:grid-cols-[1fr_0.65fr]">
            <div><h2 className="section-label">A little deeper</h2><div className="space-y-4 text-lg leading-relaxed">{topic.summary.map((line) => <p key={line}>{line}</p>)}</div></div>
            <div className="space-y-8"><div><h2 className="section-label">For today</h2><div className="space-y-3 text-base leading-relaxed text-ink/75">{topic.application.map((line) => <p key={line}>{line}</p>)}</div></div><div className="journal-panel"><h2 className="section-label">My reflection</h2><p className="font-display text-2xl leading-snug">{topic.reflection}</p><textarea aria-label={`Journal entry for ${topic.title}`} placeholder="Write what stays with you..." value={journalText} onChange={(event) => saveJournal(event.target.value)} /></div></div>
          </div>

          <div className="mt-14 flex justify-between border-t border-ink/10 pt-5"><button className="nav-button" disabled={activeDay === 1} onClick={() => goToDay(activeDay - 1)}><ChevronLeft size={18} /> Previous</button><button className="nav-button" disabled={activeDay === activeCourse.length} onClick={() => goToDay(activeDay + 1)}>Next <ChevronRight size={18} /></button></div>
        </section>
      </div>

      <div className="audio-dock"><div className="mx-auto max-w-7xl px-5 py-3 sm:px-8"><div className="audio-controls"><div className="hidden rounded-full bg-clay/15 p-2 text-clay sm:block"><Headphones size={18} /></div><div className="min-w-0 flex-1"><p className="truncate text-sm font-bold">{isLibrary ? 'Topic reflection' : 'Daily reflection'}</p><p className="text-xs text-ink/55">Browser narration · {isLibrary ? topic.title : `Day ${activeDay}`}</p></div><button aria-label={isPlaying ? 'Pause narration' : 'Read aloud'} className="play-button" onClick={toggleSpeech}>{isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}</button><div className="audio-progress" role="progressbar" aria-label="Narration progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(audioProgress)}><div style={{ width: `${audioProgress}%` }} /></div></div></div></div>
    </main>
  )
}
