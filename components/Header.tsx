import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { Github, Linkedin } from './social-icons/icons'

const iconClass = 'h-4 w-4 fill-current'

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden="true">
    <path d="M11.47 3.84a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 1-1.06 1.06l-.91-.91V20a1.25 1.25 0 0 1-1.25 1.25h-4.25a.75.75 0 0 1-.75-.75V16a1 1 0 1 0-2 0v4.5a.75.75 0 0 1-.75.75H6A1.25 1.25 0 0 1 4.75 20v-7.32l-.91.91a.75.75 0 0 1-1.06-1.06z" />
  </svg>
)

const SparklesIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden="true">
    <path d="M11.48 3.5a.75.75 0 0 1 1.04 0l1.56 1.5 2.16-.31a.75.75 0 0 1 .83.83l-.31 2.16 1.5 1.56a.75.75 0 0 1 0 1.04l-1.5 1.56.31 2.16a.75.75 0 0 1-.83.83l-2.16-.31-1.56 1.5a.75.75 0 0 1-1.04 0l-1.56-1.5-2.16.31a.75.75 0 0 1-.83-.83l.31-2.16-1.5-1.56a.75.75 0 0 1 0-1.04l1.5-1.56-.31-2.16a.75.75 0 0 1 .83-.83l2.16.31z" />
  </svg>
)

const NavIcon = ({ icon }: { icon?: string }) => {
  if (icon === 'home') return <HomeIcon />
  if (icon === 'github') return <Github className={iconClass} aria-hidden="true" />
  if (icon === 'linkedin') return <Linkedin className={iconClass} aria-hidden="true" />
  if (icon === 'sparkles') return <SparklesIcon />
  return null
}

const Header = () => {
  let headerClass = 'w-full py-4'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <div className="flex w-full items-center justify-between rounded-3xl border border-slate-200/80 bg-white/80 px-4 py-3 shadow-sm shadow-slate-950/5 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/75 dark:shadow-black/20">
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center gap-3">
            <Logo className="h-10 w-auto shrink-0" aria-hidden="true" />
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden leading-tight sm:block">
                <div className="text-sm font-black tracking-tight text-slate-950 dark:text-white">
                  {siteMetadata.headerTitle}
                </div>
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  GitHub Projects
                </div>
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-2 sm:flex">
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hover:text-primary-600 dark:hover:text-primary-300 inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-bold text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10"
                aria-label={link.title}
              >
                <NavIcon icon={link.icon} />
                <span className="hidden lg:inline">{link.title}</span>
              </Link>
            ))}
          </nav>
          <ThemeSwitch />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
