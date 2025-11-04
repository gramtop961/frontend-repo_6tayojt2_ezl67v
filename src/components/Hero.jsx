import { Rocket, Globe, Search, Upload } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-white" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium ring-1 ring-blue-200 mb-4">
              <Rocket className="h-3.5 w-3.5" />
              Launch your site to Google in minutes
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Publish your website so people can find you on Google
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              We guide you from local files to a live, searchable website: hosting, domain, SSL, and Google indexing — all simplified.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-white font-medium shadow-sm hover:bg-blue-700">
                <Upload className="h-5 w-5" />
                Upload project
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 px-5 py-3 text-slate-700 font-medium hover:bg-slate-50">
                <Search className="h-5 w-5" />
                See how it works
              </button>
            </div>
          </div>
          <div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-200/40 via-indigo-200/40 to-transparent blur-2xl rounded-3xl" />
              <div className="relative bg-white/80 backdrop-blur rounded-2xl border border-slate-200 p-6 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-blue-600/10 text-blue-700 flex items-center justify-center">
                    <Globe className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Deployment status</p>
                    <p className="font-semibold text-slate-900">Ready to publish</p>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="rounded-xl border border-slate-200 p-4">
                    <p className="text-xs text-slate-500">Domain</p>
                    <p className="mt-1 font-medium text-slate-900">yourbrand.com</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-4">
                    <p className="text-xs text-slate-500">Hosting</p>
                    <p className="mt-1 font-medium text-slate-900">Configured</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-4">
                    <p className="text-xs text-slate-500">SSL</p>
                    <p className="mt-1 font-medium text-slate-900">Active</p>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-blue-50 text-blue-800 p-4">
                    <p className="text-xs">Google Search Console</p>
                    <p className="mt-1 font-semibold">Connected</p>
                  </div>
                  <div className="rounded-xl bg-emerald-50 text-emerald-800 p-4">
                    <p className="text-xs">Sitemap</p>
                    <p className="mt-1 font-semibold">Submitted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
