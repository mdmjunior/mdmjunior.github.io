export default function MiscPage() {
  return (
    <div className="py-16">
      <div className="max-w-3xl">
        <p className="text-primary-600 dark:text-primary-300 text-sm font-bold tracking-[0.25em] uppercase">
          Library
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl dark:text-white">
          Misc
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
          Loose notes, useful references and uncategorized material.
        </p>
      </div>

      <div className="mt-10 rounded-3xl border border-dashed border-slate-300 bg-white/60 p-8 text-sm leading-7 text-slate-600 dark:border-white/15 dark:bg-white/[0.04] dark:text-slate-300">
        This section is ready for content. We can later connect it to Markdown, MDX or structured
        data depending on how you want to manage the library.
      </div>
    </div>
  )
}
