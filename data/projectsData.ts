interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'AutoM8 - Post Install Tool for Ubuntu',
    description: `My set of bash scripts to automate my linux desktop`,
    imgSrc: '/static/images/AutoM8.png',
    href: 'https://www.ggithub.com/mdmjunior/AutoM8',
  },
  {
    title: 'None',
    description: `None`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
]

export default projectsData
