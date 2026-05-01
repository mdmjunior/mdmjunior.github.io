import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SocialIcon from '@/components/social-icons'

const iconClass =
  'hover:text-primary-500 dark:hover:text-primary-400 flex h-[42px] w-[42px] items-center justify-center text-gray-900 dark:text-gray-100'

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
    <path d="M11.47 3.84a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 1-1.06 1.06l-.91-.91V20a1.25 1.25 0 0 1-1.25 1.25h-4.25a.75.75 0 0 1-.75-.75V16a1 1 0 1 0-2 0v4.5a.75.75 0 0 1-.75.75H6A1.25 1.25 0 0 1 4.75 20v-7.32l-.91.91a.75.75 0 0 1-1.06-1.06z" />
  </svg>
)

const SparklesIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
    <path d="M11.48 3.5a.75.75 0 0 1 1.04 0l1.56 1.5 2.16-.31a.75.75 0 0 1 .83.83l-.31 2.16 1.5 1.56a.75.75 0 0 1 0 1.04l-1.5 1.56.31 2.16a.75.75 0 0 1-.83.83l-2.16-.31-1.56 1.5a.75.75 0 0 1-1.04 0l-1.56-1.5-2.16.31a.75.75 0 0 1-.83-.83l.31-2.16-1.5-1.56a.75.75 0 0 1 0-1.04l1.5-1.56-.31-2.16a.75.75 0 0 1 .83-.83l2.16.31z" />
    <path d="M5.25 17.25a.75.75 0 0 1 .75.75v.75h.75a.75.75 0 0 1 0 1.5H6v.75a.75.75 0 0 1-1.5 0v-.75h-.75a.75.75 0 0 1 0-1.5h.75V18a.75.75 0 0 1 .75-.75ZM18.75 2.25a.75.75 0 0 1 .75.75v.75h.75a.75.75 0 0 1 0 1.5h-.75V6a.75.75 0 0 1-1.5 0v-.75h-.75a.75.75 0 0 1 0-1.5H18V3a.75.75 0 0 1 .75-.75Z" />
  </svg>
)

const NavIcon = ({ icon }: { icon?: string }) => {
  if (icon === 'home') return <HomeIcon />
  if (icon === 'github') return <SocialIcon kind="github" href="https://github.com/mdmjunior" size={7} />
  if (icon === 'sparkles') return <SparklesIcon />
  return null
}

const Header = () => {
  let headerClass = 'flex items-center w-full bg-white dark:bg-gray-950 justify-between py-10'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center justify-between">
          <div className="mr-3">
            <Logo />
          </div>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="hidden h-6 text-2xl font-semibold sm:block">
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
        <div className="no-scrollbar hidden max-w-40 items-center gap-x-4 overflow-x-auto sm:flex md:max-w-72 lg:max-w-96">
          {headerNavLinks.map((link) => (
            <Link key={link.title} href={link.href} className={iconClass} aria-label={link.title}>
              <NavIcon icon={link.icon} />
            </Link>
          ))}
        </div>
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
