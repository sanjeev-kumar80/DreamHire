import { FaBookmark, FaMapMarkerAlt } from "react-icons/fa";

const internships = [
  {
    company: "Google",
    role: "Frontend Developer Intern",
    location: "Remote",
    stipend: "₹40,000 / month",
    logo: "https://cdn.simpleicons.org/google",
  },
  {
    company: "Microsoft",
    role: "Backend Developer Intern",
    location: "Hyderabad",
    stipend: "₹45,000 / month",
    logo: "https://cdn.simpleicons.org/microsoft",
  },
  {
    company: "Amazon",
    role: "Software Engineer Intern",
    location: "Bangalore",
    stipend: "₹50,000 / month",
    logo: "https://cdn.simpleicons.org/amazon",
  },
  {
    company: "Adobe",
    role: "UI / UX Designer Intern",
    location: "Noida",
    stipend: "₹35,000 / month",
    logo: "https://cdn.simpleicons.org/adobe",
  },
];

function FeaturedInternships() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-gray-900">
            Featured Internships
          </h2>

          <p className="text-gray-500 mt-4 text-lg">
            Apply to the latest internships from top companies.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {internships.map((item) => (

            <div
              key={item.company}
              className="group bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >

              <div className="flex justify-between items-center p-5">

                <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                  Featured
                </span>

                <button className="text-gray-400 hover:text-blue-600">
                  <FaBookmark size={18} />
                </button>

              </div>

              <div className="px-6 pb-6">

                <div className="flex justify-center">

                  <img
                    src={item.logo}
                    alt={item.company}
                    className="w-16 h-16 object-contain"
                  />

                </div>

                <h3 className="text-xl font-bold text-center mt-5">
                  {item.role}
                </h3>

                <p className="text-center text-gray-500 mt-2">
                  {item.company}
                </p>

                <div className="flex justify-center mt-4">
                  <span className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm">
                    <FaMapMarkerAlt className="text-red-500" />
                    {item.location}
                  </span>
                </div>

                <div className="flex justify-center mt-4">
                  <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
                    {item.stipend}
                  </span>
                </div>

                <button className="w-full mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition">
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