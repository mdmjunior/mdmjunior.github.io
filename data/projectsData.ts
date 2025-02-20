interface Project {
  title: string
  description: string
  href?: string
  repo?: string | null
  imgSrc?: string
  buildWith: string[]
}

const projectsData: Project[] = [
  {
    title: 'AutoM8',
    description: `Under Development`,
    imgSrc: '/static/images/AutoM8.png',
    href: 'https://www.marciomoreirajunior.com.br/Projects/AutoM8/',
    repo: 'https://github.com/mdmjunior/AutoM8',
    buildWith: ['Python', 'Shell script'],
  },
]

export default projectsData
