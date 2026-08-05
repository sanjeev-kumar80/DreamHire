const companies = [
  {
    name: "Google",
    jobs: "245 Jobs",
    rating: "4.8",
    logo: "https://cdn.simpleicons.org/google",
  },
  {
    name: "Microsoft",
    jobs: "180 Jobs",
    rating: "4.7",
    logo: "https://cdn.simpleicons.org/microsoft",
  },
  {
    name: "Amazon",
    jobs: "310 Jobs",
    rating: "4.6",
    logo: "https://cdn.simpleicons.org/amazon",
  },
  {
    name: "Adobe",
    jobs: "95 Jobs",
    rating: "4.9",
    logo: "https://cdn.simpleicons.org/adobe",
  },
  {
    name: "Infosys",
    jobs: "420 Jobs",
    rating: "4.3",
    logo: "https://cdn.simpleicons.org/infosys",
  },
  {
    name: "IBM",
    jobs: "150 Jobs",
    rating: "4.5",
    logo: "https://cdn.simpleicons.org/ibm",
  },
  {
    name: "Accenture",
    jobs: "380 Jobs",
    rating: "4.4",
    logo: "https://cdn.simpleicons.org/accenture",
  },
  {
    name: "TCS",
    jobs: "500 Jobs",
    rating: "4.2",
    logo: "https://cdn.simpleicons.org/tcs",
  },
];

function Companies() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-gray-900">
            Top Companies
          </h2>

          <p className="text-gray-500 text-lg mt-4">
            Discover opportunities from the world's leading companies.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {companies.map((company) => (

            <div
              key={company.name}
              className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8 text-center"
            >

              <img
                src={company.logo}
                alt={company.name}
                className="w-16 h-16 mx-auto object-contain"
              />

              <h3 className="text-2xl font-bold mt-5">
                {company.name}
              </h3>

              <p className="text-gray-500 mt-2">
                ⭐ {company.rating}
              </p>

              <p className="text-blue-600 font-semibold mt-2">
                {company.jobs}
              </p>

              <button className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-700 hover:to-indigo-700 transition">
                View Company
              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Companies;