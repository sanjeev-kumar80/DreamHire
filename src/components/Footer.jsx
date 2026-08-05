import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo */}

          <div>

            <h2 className="text-4xl font-extrabold">

              <span className="text-blue-500">
                Dream
              </span>

              <span className="text-purple-500">
                Hire
              </span>

            </h2>

            <p className="text-gray-400 mt-5 leading-8">

              Find your dream job, internship,
              hackathon and career opportunities
              all in one place.

            </p>

          </div>

          {/* Platform */}

          <div>

            <h3 className="text-xl font-bold mb-5">
              Platform
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Jobs</li>

              <li>Internships</li>

              <li>Hackathons</li>

              <li>Events</li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-xl font-bold mb-5">
              Company
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>About Us</li>

              <li>Contact</li>

              <li>Privacy Policy</li>

              <li>Terms & Conditions</li>

            </ul>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-xl font-bold mb-5">
              Connect
            </h3>

            <div className="flex gap-4 text-2xl">

              <FaFacebook className="hover:text-blue-500 cursor-pointer transition" />

              <FaInstagram className="hover:text-pink-500 cursor-pointer transition" />

              <FaLinkedin className="hover:text-blue-400 cursor-pointer transition" />

              <FaGithub className="hover:text-gray-300 cursor-pointer transition" />

            </div>

          </div>

        </div>

        <hr className="border-gray-800 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500">

          <p>
            © 2026 DreamHire. All Rights Reserved.
          </p>

          <p className="mt-3 md:mt-0">
            Made with ❤️ using React + Tailwind CSS
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;