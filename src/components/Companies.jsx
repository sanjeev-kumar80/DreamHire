const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Adobe",
  "Infosys",
  "TCS",
  "Accenture",
  "IBM",
];

function Companies() {
  return (
    <section className="bg-gray-100 py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Top Companies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {companies.map((company) => (

            <div
              key={company}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-8 text-center"
            >

              <div className="text-5xl">
                🏢
              </div>

              <h3 className="mt-4 font-bold">
                {company}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Companies;