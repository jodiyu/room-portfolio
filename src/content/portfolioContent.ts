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
    title: 'Looking for Alaska',
    author: 'John Green',
    note: 'A book about love, loss, and closure.',
  },
  {
    title: 'Notes from Underground',
    author: 'Fyodor Dostoevsky',
    note: 'A passionate, obsessive, and self-contradictory narrative.',
  },
  {
    title: 'Frankenstein',
    author: 'Mary Shelley',
    note: 'A gothic horror and tragic story.',
  },
  {
    title: 'The Way of Kings',
    author: 'Brandon Sanderson',
    note: 'A captivating and epic world-building book series.',
  },
  {
    title: 'Dune',
    author: 'Frank Herbert',
    note: 'An epic science fiction novel on the desert planet Arrakis.',
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
    company: 'course',
    title: 'Distributed/Database Systems',
    subtitle: 'Distributed computing and concurrency control.',
  },
  {
    company: 'course',
    title: 'Advanced Probability and Statistics',
    subtitle: 'Proof-based mathematics.',
  },
  {
    company: 'course',
    title: 'Computer Systems',
    subtitle: 'Hardware fundamentals and systems programming in C.',
  },
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