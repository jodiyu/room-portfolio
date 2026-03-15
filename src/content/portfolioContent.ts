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
  company: string
  title: string
  subtitle?: string
  link?: string
}

export type DanceVideoItem = {
  title: string
  description?: string
  link?: string
}

export type SpeechVideoItem = {
  title: string
  description?: string
  link?: string
}

export const projects: ProjectItem[] = [
  {
    title: 'Missed Connections',
    description:
      'A proximity-based social app for finding your missed friendships based on shared interests and location based match making.',
    tech: ['React Native', 'TypeScript', 'Django', 'PostgresSQL'],
    link: 'https://missedconnections.tech/'
  },
  {
    title: 'Unifi',
    description:
      'A collaborative music platform that enables users to listen to music together, dynamically curating a shared Spotify playlist that best reflects everyone’s unique tastes.',
    tech: ['React', 'JavaScript', 'Next.js', 'MongoDB'],
    link: 'https://www.unifi.boston/login/'
  },
  {
    title: 'Book Blog',
    description:
      'A project for keeping track of book recommendations and essays.',
    tech: ['Next.js', 'React', 'Typescript'],
    link: 'https://www.jodireads.blog/'
  },
  {
    title: '3D Portfolio',
    description:
      'An interactive personal portfolio rendered as a 3D room with clickable objects.',
    tech: ['React', 'TypeScript', 'Three.js', 'React Three Fiber'],
  },
]

export const readingList: ReadingItem[] = [
  {
    title: 'Random Winds',
    author: 'Belva Plain',
    note: 'A book about life, love, and loss.',
  },
  {
    title: 'Wind and Ruin',
    author: 'Brandon Sanderson',
    note: 'The fifth book of Stormlight Archive.',
  },
  {
    title: 'A Clash of Kings',
    author: 'George R. R. Martin',
    note: 'The second book of Game of Thrones.',
  },
]

export const resumeItems: ResumeItem[] = [
//   {
//     type: 'resume-link',
//     title: 'View Resume',
//     link: '#',
//   },
  {
    company: 'Bridging Tech',
    title: 'Software Developer Intern',
    subtitle: 'Designed quiz modules using React and TypeScript and animated progress tracking. \
              Modeled schema to store user quiz attempts and completion state, ensuring persistent \
              progress across sessions.',
  },
  {
    company: 'Harvard University',
    title: 'Teaching Assistant',
    subtitle: 'Led daily discussion sections and held office hours in object-oriented design and algorithmic \
              complexity in Java.',
  },
  {
    company: 'Boston University',
    title: 'Teaching/Course Assistant',
    subtitle: 'Led weekly discussion sections and held office hours in recursion and problem solving in Python.',
  },
  {
    company: 'Boston University',
    title: 'Algorithms Grader',
    subtitle: 'Reviewed and graded algorithmic submissions throughout the semester, including proof correctness and asymptotic time/space complexity.',
  },
  {
    company: 'CS351/CS460',
    title: 'Distributed/Database Systems',
    subtitle: 'Distributed computing and concurrency control in Golang.',
  },
  {
    company: 'MA581/MA582',
    title: 'Advanced Probability and Statistics',
    subtitle: 'Proof-based mathematics.',
  },
  {
    company: 'CS210',
    title: 'Computer Systems',
    subtitle: 'Hardware fundamentals and systems programming in Assembly and C.',
  }
]

export const danceVideos: DanceVideoItem[] = [
  {
    title: 'Contemporary Dance Video',
    description: 'A video of a contemporary dance combo class I taught.',
    link: 'https://www.youtube.com/watch?v=KrrvnqHUYGM&t',
  },
  {
    title: 'Performance Excerpt',
    description: 'A piece I choreographed for BU Edge Dance Club\'s annual show.',
    link: '#',
  },
]

export const speechVideos: SpeechVideoItem[] = [
  {
    title: '$12.5k Student Wellbeing Innovation Competition',
    description: 'Won first place for MissedConnections, a social app aimed at finding connections on campus. Watch a video taken from finals.',
    link: 'https://www.youtube.com/watch?v=kmtSS2ib24E&t=4s',
  },
  {
    title: 'Directed Reading Research in Topology',
    description: 'Mathematical study on classification of plane tilings via topological equivalence. Watch a practice video of the speech presented in front of math graduate students and peers.',
    link: 'https://drive.google.com/file/d/1d-LlgirlAWp-9ZKwsIty9MyNWeFUT284/view?usp=sharing',
  },
]