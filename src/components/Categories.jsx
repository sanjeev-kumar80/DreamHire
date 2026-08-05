const categories = [
  { icon: "💼", title: "Jobs" },
  { icon: "🎓", title: "Internships" },
  { icon: "🏆", title: "Hackathons" },
  { icon: "📚", title: "Courses" },
  { icon: "📅", title: "Events" },
  { icon: "💻", title: "Remote" },
];

function Categories() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">
        Explore Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 p-6 text-center cursor-pointer"
          >
            <div className="text-5xl">{item.icon}</div>

            <h3 className="font-semibold mt-4">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;