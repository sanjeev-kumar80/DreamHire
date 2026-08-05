const internships = [
  {
    company: "Google",
    role: "Frontend Intern",
    location: "Remote",
    stipend: "₹40,000/month",
    logo: "https://cdn.simpleicons.org/google",
  },
  {
    company: "Microsoft",
    role: "Backend Intern",
    location: "Hyderabad",
    stipend: "₹45,000/month",
    logo: "https://cdn.simpleicons.org/microsoft",
  },
  {
    company: "Amazon",
    role: "SDE Intern",
    location: "Bangalore",
    stipend: "₹50,000/month",
    logo: "https://cdn.simpleicons.org/amazon",
  },
  {
    company: "Adobe",
    role: "UI/UX Intern",
    location: "Noida",
    stipend: "₹35,000/month",
    logo: "https://cdn.simpleicons.org/adobe",
  },
];

function FeaturedInternships() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Internships
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {internships.map((item) => (
            <div
              key={item.company}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2 overflow-hidden border"
            >
              <div className="p-6">

                <img
                  src={item.logo}
                  alt={item.company}
                  className="w-14 h-14"
                />

                <h3 className="text-xl font-bold mt-5">
                  {item.role}
                </h3>

                <p className="text-gray-600 mt-2">
                  {item.company}
                </p>

                <p className="text-gray-500">
                  📍 {item.location}
                </p>

                <p className="mt-3 font-semibold text-green-600">
                  {item.stipend}
                </p>

                <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
                  Apply Now
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedInternships;