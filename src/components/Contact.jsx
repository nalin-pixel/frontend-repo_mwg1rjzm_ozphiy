import { useState } from 'react'

function Contact() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', budget: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed to send')
      const data = await res.json()
      setStatus({ ok: true, message: data.message })
      setForm({ name: '', email: '', company: '', budget: '', message: '' })
    } catch (e) {
      setStatus({ ok: false, message: e.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s work together</h2>
          <p className="text-slate-300/80 mt-2">Tell me about your project. I’ll reply within 24–48 hours.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
          <div>
            <label className="block text-sm text-slate-300 mb-2">Name</label>
            <input required name="name" value={form.name} onChange={handleChange} className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-2">Email</label>
            <input required type="email" name="email" value={form.email} onChange={handleChange} className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="you@studio.com" />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-2">Company</label>
            <input name="company" value={form.company} onChange={handleChange} className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Optional" />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-2">Budget</label>
            <input name="budget" value={form.budget} onChange={handleChange} className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="$2k–$10k" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm text-slate-300 mb-2">Project details</label>
            <textarea required name="message" value={form.message} onChange={handleChange} rows={5} className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="What are you building? Timeline? Goals?" />
          </div>
          <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button disabled={loading} className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-6 py-3 font-medium hover:bg-blue-50 transition disabled:opacity-60">
              {loading ? 'Sending…' : 'Send message'}
            </button>
            {status && (
              <span className={`text-sm ${status.ok ? 'text-emerald-400' : 'text-rose-400'}`}>{status.message}</span>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
