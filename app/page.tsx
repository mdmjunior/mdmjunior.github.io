import Link from '@/components/Link'

const projects = [
  {
    name: 'AutoM8',
    description:
      'A Linux post-install automation project focused on Ubuntu, Fedora, software profiles and script generation.',
    href: 'https://github.com/mdmjunior/autom8',
    tags: ['Linux', 'Automation', 'Laravel', 'DevOps'],
  },
  {
    name: 'Muquirana',
    description:
      'A personal ERP experiment for financial organization, goals, accounts, categories and everyday money management.',
    href: 'https://github.com/mdmjunior/muquirana',
    tags: ['Next.js', 'PostgreSQL', 'Prisma', 'Finance'],
  },
  {
    name: 'marciomoreirajunior.com.br',
    description:
      'My official website, personal portfolio, resume, blog and professional presence on the web.',
    href: 'https://www.marciomoreirajunior.com.br',
    tags: ['Portfolio', 'Blog', 'Personal Brand'],
  },
  {
    name: 'OSLabs',
    description:
      'A space for technical experiments, product ideas and infrastructure-focused projects around automation and software.',
    href: 'https://www.oslabs.com.br',
    tags: ['OSLabs', 'Products', 'Labs'],
  },
]

const links = [
  {
    label: 'Official site',
    href: 'https://www.marciomoreirajunior.com.br',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/mdmjunior',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mdmjunior',
  },
  {
    label: 'OSLabs',
    href: 'https://www.oslabs.com.br',
  },
]

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl py-12">
      <section className="space-y-8 py-10">
        <div className="space-y-5">
          <p className="text-primary-500 text-sm font-semibold tracking-wide uppercase">
            GitHub Projects / Technical Portfolio
          </p>

          <h1 className="text-4xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-gray-100">
            Marcio Moreira Junior
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            Linux Engineer, DevOps, SRE and curious as fuck about automation, infrastructure, open
            source, software experiments and building useful things.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:border-primary-500 hover:text-primary-500 rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition dark:border-gray-700 dark:text-gray-200"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="py-10">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Currently working on these things
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="hover:border-primary-500 rounded-2xl border border-gray-200 p-6 transition dark:border-gray-800"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                <Link href={project.href} className="hover:text-primary-500">
                  {project.name}
                </Link>
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
