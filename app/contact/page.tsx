import Link from '@/components/Link'
import ContactForm from './ContactForm'
import siteMetadata from '@/data/siteMetadata'

export default function ContactPage() {
  const contactEmail = siteMetadata.email ?? 'iam@marciomoreirajunior.com.br'
  const contactGithub = siteMetadata.github ?? 'https://github.com/mdmjunior'
  const contactLinkedin = siteMetadata.linkedin ?? 'https://www.linkedin.com/in/mdmjunior'

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
              href={`mailto:${contactEmail}`}
              className="text-primary-600 dark:text-primary-300 font-bold"
            >
              {contactEmail}
            </Link>
          </p>
          <p>
            GitHub:{' '}
            <Link href={contactGithub} className="text-primary-600 dark:text-primary-300 font-bold">
              mdmjunior
            </Link>
          </p>
          <p>
            LinkedIn:{' '}
            <Link
              href={contactLinkedin}
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
