interface Project {
  title: string
  description: string
  href?: string
  repo?: string | null
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'AutoM8 - Linux Ubuntu Post-Install Tool',
    description: `A set of shell scripts to automate the process of installing software on Ubuntu Desktop`,
    imgSrc: '/static/images/AutoM8.png',
    href: 'https://github.com/mdmjunior/AutoM8',
    repo: 'https://github.com/mdmjunior/AutoM8',
  },

  {
    title: 'BConverter - Bash script to create Markdown Documents',
    description: `My bash tool to convert a simple text file into a markdown document`,
    imgSrc: '/static/images/bconverter.jpeg',
    href: 'https://github.com/mdmjunior/BConverter',
    repo: 'https://github.com/mdmjunior/BConverter',
  },
]

export default projectsData
