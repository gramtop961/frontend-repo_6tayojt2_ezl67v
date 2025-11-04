import { Upload, Settings, Globe, Search } from 'lucide-react'

const steps = [
  {
    title: 'Upload your project',
    desc: 'Add your build files or repository link. We detect frameworks and build for production.',
    icon: Upload,
  },
  {
    title: 'Connect your domain',
    desc: 'Follow guided DNS steps (A, CNAME). We verify and issue SSL automatically.',
    icon: Globe,
  },
  {
    title: 'Configure essentials',
    desc: 'Set redirects, sitemap, robots.txt, and basic SEO. We generate recommendations.',
    icon: Settings,
  },
  {
    title: 'Get indexed on Google',
    desc: 'Verify your site, submit your sitemap, and request indexing in Search Console.',
    icon: Search,
  },
]

export default function Steps() {
  return (
    <section id="steps" className="py-16 sm:py-20 bg-gradient-to-b from-white to-slate-50/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">How it works</h2>
          <p className="mt-2 text-slate-600">A clear path from local files to a live, searchable site.</p>
        </div>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="group relative rounded-2xl border border-slate-200 bg-white p-6">
              <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold shadow-md">
                {i + 1}
              </div>
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-1 text-slate-600 text-sm">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
