import Link from '@/components/Link'
import NavIcon from '@/components/NavIcon'
import { librarySections } from '@/data/library'

export default function LibraryPage() {
  return (
    <div className="py-14">
      <div className="mb-10 max-w-3xl">
        <p className="text-primary-600 dark:text-primary-300 text-sm font-bold tracking-[0.25em] uppercase">
          Library
        </p>
        <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl dark:text-white">
          A place for notes, docs, guides and ideas.
        </h1>
        <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
          This area will organize technical writing into sections that are easy to maintain and
          expand over time.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {librarySections.map((section) => (
          <Link
            key={section.title}
            href={section.href}
            className="group hover:border-primary-500/50 dark:hover:border-primary-400/50 rounded-[1.75rem] border border-slate-200/80 bg-white/80 p-6 shadow-sm shadow-slate-950/5 transition duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.04]"
          >
            <div className="bg-primary-100 text-primary-700 dark:bg-primary-400/10 dark:text-primary-300 flex h-12 w-12 items-center justify-center rounded-2xl">
              <NavIcon name={section.icon} />
            </div>
            <h2 className="mt-6 text-xl font-black tracking-tight text-slate-950 dark:text-white">
              {section.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {section.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
