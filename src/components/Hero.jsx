function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">

      <div className="max-w-7xl mx-auto px-6 py-28">

        <h1 className="text-6xl font-bold leading-tight">

          Discover Your
          <br />
          Dream Career

        </h1>

        <p className="mt-6 text-xl text-gray-200 max-w-2xl">

          Find Jobs, Internships,
          Hackathons and Events
          from top companies.

        </p>

        {/* Search */}

        <div className="mt-10 flex">

          <input
            type="text"
            placeholder="Search Jobs..."
            className="bg-white text-black w-full md:w-96 px-5 py-4 rounded-l-xl outline-none"
          />

          <button className="bg-yellow-400 text-black px-8 rounded-r-xl font-semibold hover:bg-yellow-300">
            Search
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;