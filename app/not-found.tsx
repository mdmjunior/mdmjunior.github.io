import Link from '@/components/Link'

export default function NotFound() {
  return (
    <div className="py-20">
      <div className="max-w-2xl">
        <p className="text-primary-600 dark:text-primary-300 text-sm font-bold tracking-[0.25em] uppercase">
          404
        </p>
        <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl dark:text-white">
          This page is not in the lab.
        </h1>
        <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
          The page you are looking for does not exist, was moved or is not ready yet.
        </p>
        <Link
          href="/"
          className="hover:bg-primary-600 dark:hover:bg-primary-200 mt-8 inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-950"
        >
          Back to home
        </Link>
      </div>
    </div>
  )
}
