export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-100"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-6 sm:p-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          Contact Us
        </h2>

        <form className="space-y-6">
          <div>
            <label className="block mb-2 font-medium">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Write your message"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black"
            ></textarea>
          </div>

          <button className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-yellow-400 hover:text-black transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}