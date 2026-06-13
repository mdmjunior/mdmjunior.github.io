import Link from '@/components/Link'
import ContactForm from './ContactForm'
import siteMetadata from '@/data/siteMetadata'

export default function ContactPage() {
  return (
    <div className="grid gap-10 py-14 lg:grid-cols-[0.85fr_1.15fr]">
      <div>
        <p className="text-primary-600 dark:text-primary-300 text-sm font-bold tracking-[0.25em] uppercase">
          Contact
        </p>
        <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl dark:text-white">
          Let’s talk about Linux, infrastructure, automation or product work.
        </h1>
        <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
          Use this page to reach out about technical projects, professional opportunities,
          consulting, collaboration or anything connected to the work shown here.
        </p>

        <div className="mt-8 space-y-3 text-sm text-slate-600 dark:text-slate-300">
          <p>
            Email:{' '}
            <Link
              href={`mailto:${siteMetadata.email}`}
              className="text-primary-600 dark:text-primary-300 font-bold"
            >
              {siteMetadata.email}
            </Link>
          </p>
          <p>
            GitHub:{' '}
            <Link
              href={siteMetadata.github}
              className="text-primary-600 dark:text-primary-300 font-bold"
            >
              mdmjunior
            </Link>
          </p>
          <p>
            LinkedIn:{' '}
            <Link
              href={siteMetadata.linkedin}
              className="text-primary-600 dark:text-primary-300 font-bold"
            >
              mdmjunior
            </Link>
          </p>
        </div>
      </div>

      <div className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-xl shadow-slate-950/5 dark:border-white/10 dark:bg-white/[0.04]">
        <ContactForm />
      </div>
    </div>
  )
}
