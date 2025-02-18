interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'AutoM8',
    description: `Under Development`,
    imgSrc: '/static/images/AutoM8.png',
    href: 'https://www.github.com/mdmjunior/AutoM8/',
  },
  {
    title: 'Shell',
    description: `Under Development`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
]

export default projectsData
