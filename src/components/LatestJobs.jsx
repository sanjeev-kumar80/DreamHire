const jobs = [
  {
    company: "Google",
    title: "Software Engineer",
    location: "Bangalore",
    type: "Full Time",
  },
  {
    company: "Microsoft",
    title: "Frontend Developer",
    location: "Hyderabad",
    type: "Hybrid",
  },
  {
    company: "Amazon",
    title: "Backend Developer",
    location: "Remote",
    type: "Remote",
  },
  {
    company: "Adobe",
    title: "UI Developer",
    location: "Noida",
    type: "Full Time",
  },
];

function LatestJobs() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Latest Jobs
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {jobs.map((job, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-6"
            >

              <div className="text-5xl">💼</div>

              <h3 className="text-xl font-bold mt-5">
                {job.title}
              </h3>

              <p className="text-gray-600 mt-2">
                {job.company}
              </p>

              <p className="text-gray-500">
                📍 {job.location}
              </p>

              <span className="inline-block mt-3 bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                {job.type}
              </span>

              <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700">
                Apply
              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default LatestJobs;