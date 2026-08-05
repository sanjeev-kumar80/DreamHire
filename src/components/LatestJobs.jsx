import {
  FaBookmark,
  FaMapMarkerAlt,
  FaBriefcase,
} from "react-icons/fa";

const jobs = [
  {
    company: "Google",
    title: "Software Engineer",
    location: "Bangalore",
    salary: "₹18 LPA",
    type: "Full Time",
    experience: "0-2 Years",
    logo: "https://cdn.simpleicons.org/google",
  },
  {
    company: "Microsoft",
    title: "Frontend Developer",
    location: "Hyderabad",
    salary: "₹15 LPA",
    type: "Hybrid",
    experience: "1-3 Years",
    logo: "https://cdn.simpleicons.org/microsoft",
  },
  {
    company: "Amazon",
    title: "Backend Developer",
    location: "Remote",
    salary: "₹20 LPA",
    type: "Remote",
    experience: "0-2 Years",
    logo: "https://cdn.simpleicons.org/amazon",
  },
  {
    company: "Adobe",
    title: "UI Developer",
    location: "Noida",
    salary: "₹16 LPA",
    type: "Full Time",
    experience: "1-2 Years",
    logo: "https://cdn.simpleicons.org/adobe",
  },
];

function LatestJobs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-gray-900">
            Latest Jobs
          </h2>

          <p className="text-gray-500 mt-4 text-lg">
            Discover exciting job opportunities from top companies.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {jobs.map((job) => (

            <div
              key={job.company}
              className="group bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="flex justify-between items-center p-5">

                <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-semibold">
                  NEW
                </span>

                <button className="text-gray-400 hover:text-blue-600">
                  <FaBookmark />
                </button>

              </div>

              <div className="px-6 pb-6">

                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-16 h-16 object-contain mx-auto"
                />

                <h3 className="text-xl font-bold text-center mt-5">
                  {job.title}
                </h3>

                <p className="text-center text-gray-500 mt-2">
                  {job.company}
                </p>

                <div className="flex justify-center mt-5">
                  <span className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm">
                    <FaMapMarkerAlt className="text-red-500" />
                    {job.location}
                  </span>
                </div>

                <div className="flex justify-center mt-3">
                  <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
                    {job.salary}
                  </span>
                </div>

                <div className="flex justify-between mt-6 text-sm text-gray-500">

                  <div className="flex items-center gap-2">
                    <FaBriefcase />
                    {job.type}
                  </div>

                  <div>
                    {job.experience}
                  </div>

                </div>

                <button className="w-full mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition">
                  Easy Apply
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default LatestJobs;