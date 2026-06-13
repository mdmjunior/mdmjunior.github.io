import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200/80 py-10 dark:border-white/10">
      <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-black tracking-tight text-slate-950 dark:text-white">
            {siteMetadata.title}
          </p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500 dark:text-slate-400">
            Linux, automation, infrastructure and product experiments.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={5} />
          <SocialIcon kind="github" href={siteMetadata.github} size={5} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={5} />
        </div>
      </div>

      <div className="mt-8 flex flex-col justify-between gap-3 text-sm text-slate-500 sm:flex-row dark:text-slate-400">
        <div>{`© ${new Date().getFullYear()} Marcio Moreira Junior`}</div>
        <Link
          href="https://github.com/mdmjunior/mdmjunior.github.io"
          className="hover:text-primary-600 dark:hover:text-primary-300"
        >
          Source on GitHub
        </Link>
      </div>
    </footer>
  )
}
