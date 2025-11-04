import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Steps from './components/Steps'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Steps />
      </main>
      <footer id="faq" className="border-t border-slate-200 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-slate-900">Quick answers</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 list-disc list-inside">
                <li>We support static sites and SPA frameworks out of the box.</li>
                <li>Custom domains include free SSL certificates.</li>
                <li>We guide Google Search Console verification and sitemaps.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">Need help?</h4>
              <p className="mt-3 text-sm text-slate-600">Share your project and we’ll walk you through deploying it and getting indexed on Google.</p>
              <div className="mt-4 flex gap-2">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full md:w-auto flex-1 rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                  Contact me
                </button>
              </div>
            </div>
          </div>
          <div className="mt-10 text-xs text-slate-500">© {new Date().getFullYear()} LaunchPad. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
