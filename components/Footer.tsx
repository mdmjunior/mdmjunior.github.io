import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import { profile } from '@/data/profile'
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
            {profile.shortDescription}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email ?? profile.email}`} size={5} />
          <SocialIcon kind="github" href={siteMetadata.github ?? profile.links.github} size={5} />
          <SocialIcon
            kind="linkedin"
            href={siteMetadata.linkedin ?? profile.links.linkedin}
            size={5}
          />
        </div>
      </div>

      <div className="mt-8 flex flex-col justify-between gap-3 text-sm text-slate-500 sm:flex-row dark:text-slate-400">
        <div>{`© ${new Date().getFullYear()} ${profile.name}`}</div>
        <Link
          href={siteMetadata.siteRepo}
          className="hover:text-primary-600 dark:hover:text-primary-300"
        >
          Source on GitHub
        </Link>
      </div>
    </footer>
  )
}
