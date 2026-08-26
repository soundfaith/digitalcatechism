export type Topic = {
  day: number
  part: 'Creed' | 'Sacraments' | 'Morality' | 'Prayer'
  title: string
  introduction: string
  summary: string[]
  application: string[]
  reflection: string
  audioUrl?: string
}

export type Course = {
  id: 'ccc-in-7-days'
  title: string
  description: string
  topics: Topic[]
}

export const course: Course = {
  id: 'ccc-in-7-days',
  title: 'CCC in 7 Days',
  description: 'A gentle first walk through the essential shape of Catholic faith.',
  topics: [],
}
