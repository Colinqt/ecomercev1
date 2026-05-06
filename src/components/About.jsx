export default function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a"
            alt="About"
            className="rounded-3xl shadow-xl w-full h-[300px] sm:h-[450px] object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            About Our Store
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            ShopEase delivers premium gadgets and modern accessories designed for your lifestyle. We focus on quality, affordability, and customer satisfaction.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            Our mission is to provide a smooth and modern online shopping experience for everyone.
          </p>

          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}