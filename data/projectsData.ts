interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'AutoM8 - Post Install Linux Tool',
    description: `AutoM8 is a tool developed in bash script to automate the post install process of my workstation. In a few days
    I'll describe more about it`,
    imgSrc: '/static/images/AutoM8.png',
    href: 'https://www.github.com/mdmjunior/autom8/',
  },
  {
    title: 'NONE',
    description: `NONE YET`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
]

export default projectsData
