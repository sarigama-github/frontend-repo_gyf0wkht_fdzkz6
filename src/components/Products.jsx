import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

export default function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      try {
        const res = await fetch(`${baseUrl}/api/products`)
        if (!res.ok) throw new Error('Failed to load products')
        const data = await res.json()
        setProducts(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  if (loading) return <div className="py-16 text-center text-gray-600">Loading products...</div>
  if (error) return <div className="py-16 text-center text-red-600">{error}</div>

  return (
    <section id="shop" className="mx-auto max-w-6xl px-6 py-12">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Shop Popular Budgie Foods</h2>
          <p className="text-sm text-gray-600">Hand-picked staples and treats loved by budgies</p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id || p._id || p.title} product={p} />
        ))}
      </div>
    </section>
  )
}
