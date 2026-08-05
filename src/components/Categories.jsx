import {
  FaBriefcase,
  FaGraduationCap,
  FaLaptopCode,
  FaCalendarAlt,
  FaTrophy,
  FaBuilding,
} from "react-icons/fa";

const categories = [
  { icon: <FaBriefcase />, title: "Jobs" },
  { icon: <FaGraduationCap />, title: "Internships" },
  { icon: <FaLaptopCode />, title: "Courses" },
  { icon: <FaCalendarAlt />, title: "Events" },
  { icon: <FaTrophy />, title: "Hackathons" },
  { icon: <FaBuilding />, title: "Companies" },
];

function Categories() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Explore Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {categories.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 p-8 text-center cursor-pointer"
            >
              <div className="text-5xl text-blue-600 flex justify-center">
                {item.icon}
              </div>

              <h3 className="mt-5 font-semibold text-lg">
                {item.title}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Categories;