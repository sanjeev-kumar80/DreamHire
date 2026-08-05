function Stats() {
  return (
    <section className="py-20 bg-blue-600 text-white">

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">

        <div>
          <h2 className="text-5xl font-bold">10K+</h2>
          <p className="mt-3">Jobs Posted</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold">500+</h2>
          <p className="mt-3">Companies</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold">25K+</h2>
          <p className="mt-3">Students</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold">95%</h2>
          <p className="mt-3">Success Rate</p>
        </div>

      </div>
    </section>
  );
}

export default Stats;