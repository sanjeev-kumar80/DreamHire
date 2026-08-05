function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 40px",
        background: "#0f172a",
        color: "white",
      }}
    >
      <h2>DreamHire</h2>

      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "25px",
        }}
      >
        <li>Home</li>
        <li>Jobs</li>
        <li>Internships</li>
        <li>Hackathons</li>
        <li>Events</li>
      </ul>

      <div>
        <button
          style={{
            marginRight: "10px",
            padding: "8px 18px",
          }}
        >
          Login
        </button>

        <button
          style={{
            padding: "8px 18px",
            background: "#2563eb",
            color: "white",
            border: "none",
          }}
        >
          Register
        </button>
      </div>
    </nav>
  );
}

export default Navbar;