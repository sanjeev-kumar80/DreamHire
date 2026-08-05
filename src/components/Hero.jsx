function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 flex flex-col-reverse lg:flex-row items-center gap-12">

        {/* Left Side */}
        <div className="flex-1">

          <span className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold text-sm">
            🚀 Welcome to DreamHire
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mt-6">
            Discover Your
            <br />
            Dream Career
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-xl leading-8">
            Find Jobs, Internships, Hackathons, Courses and Events
            from India's top companies.
          </p>

          {/* Search Box */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Search jobs, internships..."
              className="flex-1 px-6 py-4 rounded-xl text-gray-800 outline-none shadow-lg"
            />

            <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition duration-300">
              Search
            </button>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <button className="bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
              Find Jobs
            </button>

            <button className="border-2 border-white px-8 py-3 rounded-xl hover:bg-white hover:text-blue-700 transition">
              Explore Internships
            </button>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&auto=format&fit=crop"
            alt="Students"
            className="w-full max-w-xl rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;