import Link from '@/components/Link'

const projects = [
  {
    name: 'AutoM8',
    description:
      'Automação pós-instalação para Linux, com foco em Ubuntu, Fedora, perfis de software e geração de scripts.',
    href: 'https://github.com/mdmjunior/autom8',
    tags: ['Linux', 'Automation', 'Laravel', 'DevOps'],
  },
  {
    name: 'Muquirana',
    description:
      'ERP pessoal em desenvolvimento para organização financeira, metas, contas, categorias e rotina financeira.',
    href: 'https://github.com/mdmjunior/muquirana',
    tags: ['Next.js', 'PostgreSQL', 'Prisma', 'Finance'],
  },
  {
    name: 'marciomoreirajunior.com.br',
    description:
      'Site oficial, portfólio, currículo, blog e presença profissional de Marcio Moreira Junior.',
    href: 'https://www.marciomoreirajunior.com.br',
    tags: ['Portfolio', 'Blog', 'Personal Brand'],
  },
  {
    name: 'OSLabs',
    description:
      'Iniciativas, produtos e experimentos técnicos ligados à OSLabs, com foco em software, automação e infraestrutura.',
    href: 'https://www.oslabs.com.br',
    tags: ['OSLabs', 'Products', 'Labs'],
  },
]

const links = [
  {
    label: 'Site oficial',
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
            Linux Engineer, DevOps, SRE and developer building tools, automations, infrastructure
            experiments and personal software products.
          </p>

          <p className="max-w-3xl text-base leading-7 text-gray-500 dark:text-gray-400">
            This GitHub Pages site is a technical landing page for selected projects. The official
            website, professional profile, resume, contact information and main content are
            available at{' '}
            <Link
              href="https://www.marciomoreirajunior.com.br"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-semibold"
            >
              www.marciomoreirajunior.com.br
            </Link>
            .
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
        <div className="mb-8 space-y-2">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Selected projects
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            A short list of projects, products and experiments connected to my technical work.
          </p>
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
