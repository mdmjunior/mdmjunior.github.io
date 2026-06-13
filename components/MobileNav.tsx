'use client'

import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import { Fragment, useState, useEffect, useRef } from 'react'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'
import NavIcon from './NavIcon'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)
  const navRef = useRef(null)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        enableBodyScroll(navRef.current)
      } else {
        disableBodyScroll(navRef.current)
      }
      return !status
    })
  }

  useEffect(() => {
    return clearAllBodyScrollLocks
  })

  return (
    <>
      <button
        aria-label="Toggle Menu"
        onClick={onToggleNav}
        className="hover:text-primary-600 dark:hover:text-primary-300 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200/80 bg-white/70 text-slate-700 sm:hidden dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
      >
        <NavIcon name="menu" />
      </button>

      <Transition appear show={navShow} as={Fragment} unmount={false}>
        <Dialog as="div" onClose={onToggleNav} unmount={false}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            unmount={false}
          >
            <div className="fixed inset-0 z-60 bg-black/30 backdrop-blur-sm" />
          </TransitionChild>

          <TransitionChild
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-y-4 opacity-0"
            enterTo="translate-y-0 opacity-100"
            leave="transition ease-in duration-200 transform"
            leaveFrom="translate-y-0 opacity-100"
            leaveTo="translate-y-4 opacity-0"
            unmount={false}
          >
            <DialogPanel className="fixed inset-x-4 top-4 z-70 rounded-3xl border border-slate-200/80 bg-white/95 p-4 shadow-2xl shadow-slate-950/20 dark:border-white/10 dark:bg-slate-950/95">
              <div className="flex items-center justify-between">
                <span className="text-sm font-black tracking-[-0.03em] text-slate-950 dark:text-white">
                  Menu
                </span>
                <button
                  className="hover:text-primary-600 dark:hover:text-primary-300 inline-flex h-10 w-10 items-center justify-center rounded-2xl text-slate-700 dark:text-slate-200"
                  aria-label="Close Menu"
                  onClick={onToggleNav}
                >
                  <NavIcon name="close" />
                </button>
              </div>

              <nav
                ref={navRef}
                className="mt-4 grid grid-cols-5 gap-2"
                aria-label="Mobile primary navigation"
              >
                {headerNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="hover:border-primary-500 hover:text-primary-600 dark:hover:border-primary-400 dark:hover:text-primary-300 flex h-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 transition dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                    onClick={onToggleNav}
                    aria-label={link.title}
                    title={link.title}
                  >
                    <NavIcon name={link.icon} />
                    <span className="sr-only">{link.title}</span>
                  </Link>
                ))}
              </nav>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  )
}

export default MobileNav
