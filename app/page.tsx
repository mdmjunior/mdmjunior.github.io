import Link from '@/components/Link'
import { focusAreas, profileStats, projects } from '@/data/projects'

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

export default function Page() {
  return (
    <div className="relative -mx-4 overflow-hidden px-4 pb-16 sm:-mx-6 sm:px-6 xl:mx-0 xl:px-0">
      <div className="pointer-events-none absolute inset-x-1/2 top-0 -z-10 h-96 w-[64rem] -translate-x-1/2 rounded-full bg-primary-400/20 blur-3xl dark:bg-primary-500/10" />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40 dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]" />

      <section className="grid min-h-[72vh] items-center gap-10 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-white/75 px-4 py-2 text-xs font-semibold tracking-[0.25em] text-primary-700 uppercase shadow-sm shadow-primary-950/5 backdrop-blur dark:border-primary-400/20 dark:bg-white/5 dark:text-primary-300">
            Linux • DevOps • SRE • Cloud
          </div>

          <div className="space-y-6">
            <h1 className="max-w-4xl text-5xl leading-[0.95] font-black tracking-[-0.06em] text-slate-950 sm:text-6xl md:text-7xl dark:text-white">
              Marcio Moreira Junior
            </h1>

            <p className="max-w-2xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Technical projects, infrastructure experiments and product ideas built around Linux,
              automation, cloud operations and practical software delivery.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="https://www.marciomoreirajunior.com.br"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-primary-600 dark:bg-white dark:text-slate-950 dark:hover:bg-primary-200"
            >
              Official website
              <ArrowIcon />
            </Link>

            <Link
              href="https://github.com/mdmjunior"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/70 px-5 py-3 text-sm font-bold text-slate-800 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-primary-500 hover:text-primary-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:border-primary-400 dark:hover:text-primary-300"
            >
              Explore GitHub
              <ArrowIcon />
            </Link>
          </div>
        </div>

        <aside className="rounded-[2rem] border border-white/70 bg-white/70 p-5 shadow-2xl shadow-slate-950/10 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/30">
          <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-950 p-6 text-white dark:border-white/10">
            <div className="mb-10 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold tracking-[0.25em] text-primary-300 uppercase">
                  Current signal
                </p>
                <h2 className="mt-2 text-2xl font-black tracking-tight">Operator mindset</h2>
              </div>
              <div className="h-3 w-3 rounded-full bg-primary-400 shadow-lg shadow-primary-400/60" />
            </div>

            <div className="space-y-3">
              {profileStats.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
                >
                  <span className="text-sm text-slate-400">{item.label}</span>
                  <span className="text-sm font-bold text-white">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section className="py-12">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold tracking-[0.25em] text-primary-600 uppercase dark:text-primary-300">
              Selected work
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl dark:text-white">
              Projects with practical roots.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-400">
            A small map of the things I am building, maintaining or shaping into products.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/80 p-6 shadow-sm shadow-slate-950/5 transition duration-300 hover:-translate-y-1 hover:border-primary-500/50 hover:shadow-xl hover:shadow-slate-950/10 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-primary-400/50 dark:hover:shadow-black/30"
            >
              <div
                className={`pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-br opacity-80 ${accentStyles[project.accent]}`}
              />

              <div className="relative">
                <div className="mb-8 flex items-center justify-between gap-4">
                  <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-bold text-slate-600 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-slate-300">
                    {project.status}
                  </span>
                  <Link
                    href={project.href}
                    aria-label={`Open ${project.name}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-800 transition group-hover:border-primary-500 group-hover:text-primary-600 dark:border-white/10 dark:bg-white/10 dark:text-white dark:group-hover:border-primary-300 dark:group-hover:text-primary-300"
                  >
                    <ArrowIcon />
                  </Link>
                </div>

                <h3 className="text-2xl font-black tracking-tight text-slate-950 dark:text-white">
                  {project.name}
                </h3>

                <p className="mt-4 min-h-24 text-sm leading-7 text-slate-600 dark:text-slate-300">
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
      </section>

      <section className="py-12">
        <div className="rounded-[2rem] border border-slate-200/80 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20 dark:border-white/10">
          <div className="grid gap-5 md:grid-cols-3">
            {focusAreas.map((area, index) => (
              <div key={area.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <span className="text-xs font-black tracking-[0.3em] text-primary-300 uppercase">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-lg font-black">{area.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
