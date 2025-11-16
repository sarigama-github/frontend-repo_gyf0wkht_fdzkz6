export default function Guide() {
  return (
    <section id="guide" className="bg-gradient-to-b from-white to-sky-50/40">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Budgie Feeding Guide</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white p-5 shadow border">
            <h3 className="font-semibold text-gray-800">Daily Basics</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>70% quality pellets or seed mix</li>
              <li>20% fresh veggies (leafy greens, carrots, broccoli)</li>
              <li>10% fruits and healthy treats</li>
            </ul>
          </div>
          <div className="rounded-xl bg-white p-5 shadow border">
            <h3 className="font-semibold text-gray-800">Always Provide</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>Fresh, clean water</li>
              <li>Calcium source (cuttlefish bone or mineral block)</li>
              <li>Grit-free diet for budgies</li>
            </ul>
          </div>
          <div className="rounded-xl bg-white p-5 shadow border">
            <h3 className="font-semibold text-gray-800">Avoid</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>Avocado, chocolate, caffeine, alcohol</li>
              <li>High-salt or high-fat human snacks</li>
              <li>Unwashed produce or spoiled food</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
