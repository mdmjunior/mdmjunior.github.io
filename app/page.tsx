import { focusAreas, projects } from '@/data/projects'
import { presenceItems } from '@/data/presence'

const accentStyles = {
  emerald: 'from-emerald-400/25 via-primary-500/10 to-transparent dark:from-emerald-400/20',
  lime: 'from-lime-400/25 via-primary-500/10 to-transparent dark:from-lime-400/20',
  sky: 'from-sky-400/25 via-primary-500/10 to-transparent dark:from-sky-400/20',
  amber: 'from-amber-400/25 via-primary-500/10 to-transparent dark:from-amber-400/20',
} as const

export default function Page() {
  return (
    <div className="relative -mx-4 overflow-hidden px-4 pb-16 sm:-mx-6 sm:px-6 xl:mx-0 xl:px-0">
      <div className="bg-primary-400/20 dark:bg-primary-500/10 pointer-events-none absolute inset-x-1/2 top-0 -z-10 h-96 w-[64rem] -translate-x-1/2 rounded-full blur-3xl" />

      <section className="grid min-h-[66vh] items-center gap-10 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        <div className="space-y-6">
          <h1 className="max-w-4xl text-5xl leading-[0.98] font-black tracking-[-0.055em] text-slate-950 sm:text-6xl md:text-7xl dark:text-white">
            My Personal Tech Lab
          </h1>

          <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            A personal space where I organize technical projects, Linux notes, automation ideas and
            practical engineering work. This is where I keep the things I build, test, learn and
            refine in public.
          </p>
        </div>

        <aside className="rounded-[2rem] border border-white/70 bg-white/70 p-5 shadow-2xl shadow-slate-950/10 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/30">
          <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-950 p-6 text-white dark:border-white/10">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-primary-300 text-xs font-semibold tracking-[0.25em] uppercase">
                  Presence
                </p>
                <h2 className="mt-2 text-xl font-black tracking-tight">Current status</h2>
              </div>
              <div className="bg-primary-400 shadow-primary-400/60 h-3 w-3 rounded-full shadow-lg" />
            </div>

            <div className="space-y-3">
              {presenceItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
                >
                  <span className="text-sm text-slate-400">{item.label}</span>
                  <span className="text-right text-sm font-bold text-white">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section className="py-10">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-primary-600 dark:text-primary-300 text-sm font-bold tracking-[0.25em] uppercase">
              Selected work
            </p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl dark:text-white">
              Projects with practical roots.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-400">
            A small map of the things I am building, maintaining or shaping into useful products.
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

              <div className="relative">
                <div className="mb-8 flex items-center justify-between gap-4">
                  <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-bold text-slate-600 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-slate-300">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-black tracking-tight text-slate-950 dark:text-white">
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

      <section className="py-10">
        <div className="rounded-[2rem] border border-slate-200/80 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20 dark:border-white/10">
          <div className="grid gap-5 md:grid-cols-3">
            {focusAreas.map((area, index) => (
              <div
                key={area.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
              >
                <span className="text-primary-300 text-xs font-black tracking-[0.3em] uppercase">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-base font-black">{area.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
