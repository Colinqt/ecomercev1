export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2">
      <img
        src={product.image}
        alt={product.name}
        className="h-52 sm:h-64 w-full object-cover"
      />

      <div className="p-4 sm:p-5">
        <h3 className="text-lg sm:text-xl font-bold mb-2">
          {product.name}
        </h3>

        <p className="text-gray-600 mb-4 text-sm sm:text-base">
          {product.price}
        </p>

        <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-yellow-400 hover:text-black transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  )
}