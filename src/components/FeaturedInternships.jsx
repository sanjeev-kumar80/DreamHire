const internships = [
  {
    company: "Google",
    role: "Frontend Intern",
    location: "Remote",
  },
  {
    company: "Microsoft",
    role: "Backend Intern",
    location: "Hyderabad",
  },
  {
    company: "Amazon",
    role: "SDE Intern",
    location: "Bangalore",
  },
  {
    company: "Adobe",
    role: "UI/UX Intern",
    location: "Noida",
  },
];

function FeaturedInternships() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-10">
          Featured Internships
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {internships.map((item) => (

            <div
              key={item.company}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6"
            >

              <div className="text-5xl mb-4">💼</div>

              <h3 className="text-xl font-bold">
                {item.role}
              </h3>

              <p className="text-gray-600 mt-2">
                {item.company}
              </p>

              <p className="text-gray-500">
                {item.location}
              </p>

              <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Apply Now
              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedInternships;