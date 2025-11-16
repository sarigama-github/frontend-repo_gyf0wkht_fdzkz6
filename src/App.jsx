import Hero from './components/Hero'
import Products from './components/Products'
import Guide from './components/Guide'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b">
        <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
          <a href="#" className="text-xl font-extrabold text-sky-700">Budgie Bites</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#shop" className="hover:text-sky-700">Shop</a>
            <a href="#guide" className="hover:text-sky-700">Guide</a>
            <a href="/test" className="hover:text-sky-700">Status</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Products />
        <Guide />
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Budgie Bites. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#shop" className="hover:text-sky-700">Shop</a>
            <a href="#guide" className="hover:text-sky-700">Feeding Guide</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
