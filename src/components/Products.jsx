import products from '../data/products'
import ProductCard from './ProductCard'

export default function Products() {
  return (
    <section id="products" className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  )
}