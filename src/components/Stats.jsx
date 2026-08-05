import {
  FaBriefcase,
  FaBuilding,
  FaUsers,
  FaAward,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaBriefcase />,
    number: "10K+",
    title: "Jobs Posted",
  },
  {
    icon: <FaBuilding />,
    number: "500+",
    title: "Companies",
  },
  {
    icon: <FaUsers />,
    number: "25K+",
    title: "Students",
  },
  {
    icon: <FaAward />,
    number: "95%",
    title: "Placement Rate",
  },
];

function Stats() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold">
            DreamHire In Numbers
          </h2>

          <p className="mt-5 text-lg text-blue-100">
            Trusted by thousands of students and recruiters.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item) => (

            <div
              key={item.title}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center border border-white/20 hover:scale-105 transition duration-300"
            >

              <div className="text-5xl flex justify-center text-yellow-300">
                {item.icon}
              </div>

              <h3 className="text-5xl font-extrabold mt-6">
                {item.number}
              </h3>

              <p className="mt-4 text-blue-100">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Stats;