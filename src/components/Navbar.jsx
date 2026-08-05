import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinkStyle = ({ isActive }) =>
    `transition duration-300 font-medium ${
      isActive
        ? "text-blue-600"
        : "text-gray-700 hover:text-blue-600"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-3xl font-extrabold cursor-pointer">
          <span className="text-blue-600">Dream</span>
          <span className="text-purple-600">Hire</span>
        </h1>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-lg">
          <NavLink to="/" className={navLinkStyle}>Home</NavLink>
          <NavLink to="/jobs" className={navLinkStyle}>Jobs</NavLink>
          <NavLink to="/internships" className={navLinkStyle}>Internships</NavLink>
          <NavLink to="/hackathons" className={navLinkStyle}>Hackathons</NavLink>
          <NavLink to="/events" className={navLinkStyle}>Events</NavLink>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">

          <NavLink
            to="/login"
            className="px-5 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Register
          </NavLink>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;