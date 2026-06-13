export default function AboutPage() {
  return (
    <div className="py-14">
      <div className="max-w-3xl">
        <p className="text-primary-600 dark:text-primary-300 text-sm font-bold tracking-[0.25em] uppercase">
          About
        </p>
        <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl dark:text-white">
          A technical space built around Linux, infrastructure and practical engineering.
        </h1>
        <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300">
          I work with Linux, DevOps, SRE, cloud engineering and automation. This site is where I
          organize public projects, technical notes and experiments connected to the way I work:
          direct, practical and focused on things that need to run well.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {[
          [
            'Linux and systems',
            'Servers, containers, services, troubleshooting and daily operational work.',
          ],
          [
            'Automation',
            'Scripts, tools and workflows that reduce repetitive work and make setups easier.',
          ],
          [
            'Products',
            'Small applications and experiments built from real problems and practical use cases.',
          ],
        ].map(([title, description]) => (
          <article
            key={title}
            className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04]"
          >
            <h2 className="text-lg font-black text-slate-950 dark:text-white">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {description}
            </p>
          </article>
        ))}
      </div>
    </div>
  )
}
