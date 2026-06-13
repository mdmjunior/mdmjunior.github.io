import Link from '@/components/Link'
import { projects } from '@/data/projects'

const accentStyles = {
  emerald: 'from-emerald-400/25 via-primary-500/10 to-transparent dark:from-emerald-400/20',
  lime: 'from-lime-400/25 via-primary-500/10 to-transparent dark:from-lime-400/20',
  sky: 'from-sky-400/25 via-primary-500/10 to-transparent dark:from-sky-400/20',
  amber: 'from-amber-400/25 via-primary-500/10 to-transparent dark:from-amber-400/20',
} as const

const ArrowIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-4 w-4">
    <path
      fillRule="evenodd"
      d="M5.22 14.78a.75.75 0 0 1 0-1.06L12.94 6H7.75a.75.75 0 0 1 0-1.5h7a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-1.5 0V7.06l-7.72 7.72a.75.75 0 0 1-1.06 0Z"
      clipRule="evenodd"
    />
  </svg>
)

export default function ProjectsPage() {
  return (
    <div className="py-14">
      <div className="mb-10 max-w-3xl">
        <p className="text-primary-600 dark:text-primary-300 text-sm font-bold tracking-[0.25em] uppercase">
          Projects
        </p>
        <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl dark:text-white">
          Projects, products and technical experiments.
        </h1>
        <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
          A focused list of things I am building or maintaining around automation, infrastructure,
          Linux, finance tools and personal products.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group hover:border-primary-500/50 dark:hover:border-primary-400/50 relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/80 p-6 shadow-sm shadow-slate-950/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/10 dark:border-white/10 dark:bg-white/[0.04] dark:hover:shadow-black/30"
          >
            <div
              className={`pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-br opacity-80 ${accentStyles[project.accent]}`}
            />

            <div className="relative flex h-full flex-col">
              <div className="mb-8 flex items-center justify-between gap-4">
                <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-bold text-slate-600 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-slate-300">
                  {project.status}
                </span>
                <Link
                  href={project.href}
                  aria-label={`Open ${project.name}`}
                  className="group-hover:border-primary-500 group-hover:text-primary-600 dark:group-hover:border-primary-300 dark:group-hover:text-primary-300 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-800 transition dark:border-white/10 dark:bg-white/10 dark:text-white"
                >
                  <ArrowIcon />
                </Link>
              </div>

              <h2 className="text-xl font-black tracking-tight text-slate-950 dark:text-white">
                {project.name}
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-white/10 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
