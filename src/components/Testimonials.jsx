import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Software Engineer @ Google",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "DreamHire helped me land my dream job. The platform is simple, fast and has amazing opportunities.",
  },
  {
    name: "Priya Verma",
    role: "SDE Intern @ Microsoft",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "I found my internship within two weeks. The application process was smooth and easy.",
  },
  {
    name: "Aman Gupta",
    role: "Frontend Developer @ Adobe",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    review:
      "Highly recommended for students looking for internships and full-time jobs.",
  },
];

function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            What Our Users Say
          </h2>

          <p className="mt-4 text-gray-500 text-lg">
            Thousands of students trust DreamHire for their careers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item) => (

            <div
              key={item.name}
              className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 hover:shadow-2xl hover:-translate-y-2 transition"
            >

              <div className="flex justify-center">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
                />

              </div>

              <div className="flex justify-center mt-5 text-yellow-400">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>

              <p className="text-gray-600 mt-6 text-center leading-7">
                "{item.review}"
              </p>

              <h3 className="text-xl font-bold text-center mt-6">
                {item.name}
              </h3>

              <p className="text-center text-blue-600 mt-2">
                {item.role}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;