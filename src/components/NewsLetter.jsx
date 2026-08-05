import { FaPaperPlane } from "react-icons/fa";

function Newsletter() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-10 md:p-16 text-white">

          <div className="max-w-3xl">

            <h2 className="text-4xl md:text-5xl font-bold">
              Get Latest Jobs & Internship Updates 🚀
            </h2>

            <p className="mt-5 text-lg text-blue-100">
              Subscribe to receive new opportunities, hiring updates
              and career tips directly in your inbox.
            </p>


            <div className="mt-8 flex flex-col md:flex-row gap-4">

              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl text-gray-800 outline-none"
              />


              <button
                className="px-8 py-4 rounded-xl bg-white text-blue-600 font-bold flex items-center justify-center gap-3 hover:scale-105 transition"
              >

                Subscribe

                <FaPaperPlane />

              </button>

            </div>


          </div>


          {/* Floating Circle */}

          <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full">
          </div>

          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full">
          </div>


        </div>

      </div>

    </section>
  );
}

export default Newsletter;