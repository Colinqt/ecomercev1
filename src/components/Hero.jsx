export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-r from-black to-gray-800 text-white min-h-screen flex items-center justify-center text-center px-4 sm:px-6">
      <div className="max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Modern Shopping Experience
        </h1>

        <p className="text-sm sm:text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Discover premium gadgets, accessories, and modern products at the best prices.
        </p>

        <button className="bg-yellow-400 text-black px-6 sm:px-8 py-3 rounded-full font-bold hover:scale-105 transition duration-300">
          Shop Now
        </button>
      </div>
    </section>
  )
}
