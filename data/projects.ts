export const profileStats = [
  {
    label: 'Primary focus',
    value: 'Linux + Cloud',
  },
  {
    label: 'Building',
    value: 'Automation tools',
  },
  {
    label: 'Mode',
    value: 'Product experiments',
  },
] as const

export const focusAreas = [
  {
    title: 'Infrastructure that behaves',
    description:
      'Servers, containers, deploys and production routines designed to be understandable and reliable.',
  },
  {
    title: 'Automation for real workflows',
    description:
      'Scripts, installers and internal tools that remove repetitive work from Linux and DevOps setups.',
  },
  {
    title: 'Products with operator DNA',
    description:
      'Small, focused applications shaped by practical operations, support and maintenance concerns.',
  },
] as const

export const projects = [
  {
    name: 'AutoM8',
    description:
      'Linux post-install automation for Ubuntu and Fedora, with software profiles, generated scripts and a friendlier setup experience.',
    href: 'https://github.com/mdmjunior/autom8',
    tags: ['Linux', 'Automation', 'Laravel', 'DevOps'],
    status: 'Active lab',
    accent: 'emerald',
  },
  {
    name: 'Muquirana',
    description:
      'A personal ERP experiment focused on financial organization, accounts, categories, goals and everyday money decisions.',
    href: 'https://github.com/mdmjunior/muquirana',
    tags: ['Next.js', 'PostgreSQL', 'Prisma', 'Finance'],
    status: 'Product build',
    accent: 'lime',
  },
  {
    name: 'marciomoreirajunior.com.br',
    description:
      'Official personal website, portfolio, resume, blog and professional presence for broader career positioning.',
    href: 'https://www.marciomoreirajunior.com.br',
    tags: ['Portfolio', 'Blog', 'Personal Brand'],
    status: 'Production',
    accent: 'sky',
  },
  {
    name: 'OSLabs',
    description:
      'A space for technical experiments, infrastructure ideas and small software products around automation and systems.',
    href: 'https://www.oslabs.com.br',
    tags: ['OSLabs', 'Products', 'Labs'],
    status: 'Studio',
    accent: 'amber',
  },
] as const
