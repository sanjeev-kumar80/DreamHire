import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-6">

        {/* Logo */}

        <h1 className="text-3xl font-bold text-blue-600 cursor-pointer">
          DreamHire
        </h1>

        {/* Menu */}

        <div className="hidden md:flex items-center gap-8">

          <NavLink to="/">Home</NavLink>

          <NavLink to="/jobs">Jobs</NavLink>

          <NavLink to="/internships">Internships</NavLink>

          <NavLink to="/hackathons">Hackathons</NavLink>

          <NavLink to="/events">Events</NavLink>

        </div>

        {/* Buttons */}

        <div className="flex gap-3">

          <NavLink
            to="/login"
            className="px-5 py-2 border rounded-lg hover:bg-gray-100"
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Register
          </NavLink>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;