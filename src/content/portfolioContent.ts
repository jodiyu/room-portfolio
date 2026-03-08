export type ProjectItem = {
  title: string
  description: string
  tech: string[]
  link?: string
}

export type ReadingItem = {
  title: string
  author: string
  note?: string
}

export type ResumeItem = {
  type: 'course' | 'experience' | 'resume-link'
  title: string
  subtitle?: string
  link?: string
}

export type DanceVideoItem = {
  title: string
  description?: string
  link?: string
}

export const projects: ProjectItem[] = [
  {
    title: 'Missed Connections',
    description:
      'A proximity-based social app concept for surfacing missed friendships and relationships based on shared interests.',
    tech: ['React', 'TypeScript', 'App Design'],
  },
  {
    title: 'Book Recommendation Tool',
    description:
      'A project for recommending books based on genre and user preferences.',
    tech: ['Python', 'Recommendation Logic'],
  },
  {
    title: 'Portfolio Website',
    description:
      'An interactive personal portfolio rendered as a 3D room with clickable objects.',
    tech: ['React', 'TypeScript', 'Three.js', 'React Three Fiber'],
  },
]

export const readingList: ReadingItem[] = [
  {
    title: 'The Waves',
    author: 'Virginia Woolf',
    note: 'Interested in language and structure.',
  },
  {
    title: 'Pale Fire',
    author: 'Vladimir Nabokov',
    note: 'Useful for layered narration and difficult vocabulary.',
  },
  {
    title: 'Invisible Cities',
    author: 'Italo Calvino',
    note: 'Aesthetic and structural inspiration.',
  },
]

export const resumeItems: ResumeItem[] = [
  {
    type: 'resume-link',
    title: 'View Resume',
    link: '#',
  },
  {
    type: 'course',
    title: 'Algorithms',
    subtitle: 'Core CS coursework',
  },
  {
    type: 'course',
    title: 'Distributed Systems',
    subtitle: 'Systems and coordination',
  },
  {
    type: 'course',
    title: 'Abstract Algebra',
    subtitle: 'Proof-based mathematics',
  },
  {
    type: 'experience',
    title: 'Course Assistant',
    subtitle: 'CS Department',
  },
]

export const danceVideos: DanceVideoItem[] = [
  {
    title: 'Contemporary Performance Reel',
    description: 'A curated selection of recent choreography clips.',
    link: '#',
  },
  {
    title: 'Studio Practice Clip',
    description: 'Short-form technical and rehearsal footage.',
    link: '#',
  },
  {
    title: 'Performance Excerpt',
    description: 'Stage footage from a live performance.',
    link: '#',
  },
]