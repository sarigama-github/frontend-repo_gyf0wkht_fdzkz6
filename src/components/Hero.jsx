import { Bird } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#e0f2fe,transparent_40%),radial-gradient(circle_at_80%_0,#fef3c7,transparent_35%),radial-gradient(circle_at_50%_100%,#ede9fe,transparent_35%)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-20 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/70 shadow">
          <Bird className="h-8 w-8 text-sky-600" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-800">
          Budgie Bites
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Fresh, balanced and joyful nutrition for your budgie. Explore seed mixes, pellets, and healthy treats crafted for tiny parrots.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#shop" className="rounded-lg bg-sky-600 px-5 py-3 text-white font-semibold shadow hover:bg-sky-700 transition-colors">Shop Foods</a>
          <a href="#guide" className="rounded-lg bg-white px-5 py-3 text-sky-700 font-semibold shadow hover:bg-gray-50 transition-colors">Feeding Guide</a>
        </div>
      </div>
    </section>
  )
}
