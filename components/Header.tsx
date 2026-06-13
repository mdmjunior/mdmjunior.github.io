import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import NavIcon from './NavIcon'

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
              <span className="hidden text-base leading-none font-black tracking-[-0.04em] text-slate-950 sm:block md:text-lg dark:text-white">
                {siteMetadata.headerTitle}
              </span>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-2 sm:flex" aria-label="Primary navigation">
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hover:border-primary-500 hover:text-primary-600 dark:hover:border-primary-400 dark:hover:text-primary-300 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200/80 bg-white/70 text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10"
                aria-label={link.title}
                title={link.title}
              >
                <NavIcon name={link.icon} />
                <span className="sr-only">{link.title}</span>
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
