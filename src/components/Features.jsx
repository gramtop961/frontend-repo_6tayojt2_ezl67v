import { Globe, Shield, CheckCircle } from 'lucide-react'

const features = [
  {
    title: 'Host & SSL, handled',
    desc: 'We set up fast global hosting with automatic HTTPS so your site is secure and loads quickly everywhere.',
    icon: Shield,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    title: 'Custom domain setup',
    desc: 'Connect your domain with guided DNS steps (A, CNAME) — no guesswork, just copy and paste.',
    icon: Globe,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    title: 'Indexing on Google',
    desc: 'We help you verify your site, submit your sitemap, and request indexing so you show up in search.',
    icon: CheckCircle,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Everything you need to go live</h2>
          <p className="mt-2 text-slate-600">From local files to a live site on Google — simplified into a clear, guided flow.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-6">
              <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${f.bg} ${f.color}`}>
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-1 text-slate-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
