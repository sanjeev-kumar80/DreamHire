import {
  FaBriefcase,
  FaGraduationCap,
  FaLaptopCode,
  FaCalendarAlt,
  FaTrophy,
  FaBuilding,
} from "react-icons/fa";

const categories = [
  {
    icon: <FaBriefcase />,
    title: "Jobs",
    desc: "1000+ Active Jobs",
  },
  {
    icon: <FaGraduationCap />,
    title: "Internships",
    desc: "Paid Internships",
  },
  {
    icon: <FaLaptopCode />,
    title: "Courses",
    desc: "Learn New Skills",
  },
  {
    icon: <FaCalendarAlt />,
    title: "Events",
    desc: "Career Events",
  },
  {
    icon: <FaTrophy />,
    title: "Hackathons",
    desc: "Win Exciting Prizes",
  },
  {
    icon: <FaBuilding />,
    title: "Companies",
    desc: "Top Recruiters",
  },
];

function Categories() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-gray-900">
            Explore Categories
          </h2>

          <p className="text-gray-500 mt-4 text-lg">
            Choose your career path and discover amazing opportunities.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-7">

          {categories.map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 cursor-pointer"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center text-4xl mx-auto group-hover:rotate-6 transition">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-center mt-6">
                {item.title}
              </h3>

              <p className="text-center text-gray-500 mt-2 text-sm">
                {item.desc}
              </p>

              <p className="text-center text-blue-600 font-semibold mt-5 group-hover:underline">
                Explore →
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Categories;