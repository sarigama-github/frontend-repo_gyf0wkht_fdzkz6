export default function ProductCard({ product }) {
  return (
    <div className="group rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-[4/3] mb-3 w-full overflow-hidden rounded-lg bg-gradient-to-br from-sky-50 to-indigo-50 grid place-items-center">
        <span className="text-6xl select-none">🦜</span>
      </div>
      <h3 className="font-semibold text-gray-800 group-hover:text-sky-700 transition-colors">{product.title}</h3>
      <p className="mt-1 text-sm text-gray-600 line-clamp-2">{product.description}</p>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
        <button className="rounded-md bg-sky-600 px-3 py-1.5 text-white text-sm font-semibold hover:bg-sky-700">
          Add to cart
        </button>
      </div>
    </div>
  )
}
