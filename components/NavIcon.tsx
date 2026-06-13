export type NavIconName =
  | 'home'
  | 'about'
  | 'projects'
  | 'library'
  | 'contact'
  | 'terminal'
  | 'docs'
  | 'steps'
  | 'spark'
  | 'box'
  | 'menu'
  | 'close'

type NavIconProps = {
  name: NavIconName | string
  className?: string
}

const iconPaths: Record<string, JSX.Element> = {
  home: (
    <>
      <path d="M4 11.5 12 5l8 6.5" />
      <path d="M6.5 10.5V20h11v-9.5" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  about: (
    <>
      <path d="M4 6.5h16v11H4z" />
      <path d="M8 10h3" />
      <path d="M8 13h8" />
      <path d="M8 16h5" />
      <path d="m15 9 2 2-2 2" />
    </>
  ),
  projects: (
    <>
      <path d="M5 6h14v12H5z" />
      <path d="m8 10 2 2-2 2" />
      <path d="M12 15h4" />
      <path d="M8 3h8" />
      <path d="M8 21h8" />
    </>
  ),
  library: (
    <>
      <path d="M5 4h10a4 4 0 0 1 4 4v12H8a3 3 0 0 1-3-3z" />
      <path d="M8 4v13a3 3 0 0 0 3 3" />
      <path d="M11 8h4" />
      <path d="M11 12h5" />
    </>
  ),
  contact: (
    <>
      <path d="M4 6.5h16v11H4z" />
      <path d="m5 8 7 5 7-5" />
      <path d="M8 17.5 4 21" />
      <path d="m16 17.5 4 3.5" />
    </>
  ),
  terminal: (
    <>
      <path d="M4 5h16v14H4z" />
      <path d="m7 10 2 2-2 2" />
      <path d="M12 15h5" />
    </>
  ),
  docs: (
    <>
      <path d="M7 4h7l4 4v12H7z" />
      <path d="M14 4v4h4" />
      <path d="M10 12h5" />
      <path d="M10 15h5" />
    </>
  ),
  steps: (
    <>
      <path d="M5 6h4v4H5z" />
      <path d="M15 14h4v4h-4z" />
      <path d="M9 8h4a3 3 0 0 1 0 6h-2" />
      <path d="m12 11-3 3 3 3" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3v5" />
      <path d="M12 16v5" />
      <path d="M3 12h5" />
      <path d="M16 12h5" />
      <path d="m6 6 3 3" />
      <path d="m15 15 3 3" />
      <path d="m18 6-3 3" />
      <path d="m9 15-3 3" />
    </>
  ),
  box: (
    <>
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9z" />
      <path d="M4 7.5 12 12l8-4.5" />
      <path d="M12 12v9" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </>
  ),
}

export default function NavIcon({ name, className = 'h-5 w-5' }: NavIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {iconPaths[name] || iconPaths.terminal}
    </svg>
  )
}
