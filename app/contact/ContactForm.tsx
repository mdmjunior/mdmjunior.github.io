'use client'

import { FormEvent, useState } from 'react'

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)

  const updateField = (field: keyof typeof initialForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const subject = encodeURIComponent(form.subject || "Contact from Marcio's Tech Lab")
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )

    window.location.href = `mailto:iam@marciomoreirajunior.com.br?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Name</span>
          <input
            required
            value={form.name}
            onChange={(event) => updateField('name', event.target.value)}
            className="focus:border-primary-500 focus:ring-primary-500/20 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 transition outline-none focus:ring-4 dark:border-white/10 dark:bg-white/5 dark:text-white"
            placeholder="Your name"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Email</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => updateField('email', event.target.value)}
            className="focus:border-primary-500 focus:ring-primary-500/20 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 transition outline-none focus:ring-4 dark:border-white/10 dark:bg-white/5 dark:text-white"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="block space-y-2">
        <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Subject</span>
        <input
          required
          value={form.subject}
          onChange={(event) => updateField('subject', event.target.value)}
          className="focus:border-primary-500 focus:ring-primary-500/20 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 transition outline-none focus:ring-4 dark:border-white/10 dark:bg-white/5 dark:text-white"
          placeholder="How can I help?"
        />
      </label>

      <label className="block space-y-2">
        <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Message</span>
        <textarea
          required
          rows={6}
          value={form.message}
          onChange={(event) => updateField('message', event.target.value)}
          className="focus:border-primary-500 focus:ring-primary-500/20 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 transition outline-none focus:ring-4 dark:border-white/10 dark:bg-white/5 dark:text-white"
          placeholder="Write your message..."
        />
      </label>

      <button
        type="submit"
        className="hover:bg-primary-600 dark:hover:bg-primary-200 inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-950"
      >
        Open email client
      </button>
    </form>
  )
}
