function Hero() {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "80px 20px",
        background: "#f8fafc",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          marginBottom: "20px",
        }}
      >
        Find Your Dream Opportunity
      </h1>

      <p
        style={{
          fontSize: "20px",
          color: "gray",
        }}
      >
        Jobs • Internships • Hackathons • Events
      </p>

      <div
        style={{
          marginTop: "35px",
        }}
      >
        <input
          placeholder="Search jobs..."
          style={{
            width: "400px",
            padding: "14px",
          }}
        />

        <button
          style={{
            marginLeft: "10px",
            padding: "14px 25px",
            background: "#2563eb",
            color: "white",
            border: "none",
          }}
        >
          Search
        </button>
      </div>
    </section>
  );
}

export default Hero;