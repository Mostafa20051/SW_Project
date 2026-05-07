import { Link } from "react-router-dom"

function Home() {

  return (

    <div className="min-h-screen bg-gray-200">

      {/* Hero Section */}

      <section className="flex flex-col justify-center items-center text-center px-6 py-32">

        <h1 className="text-7xl font-extrabold text-gray-900 leading-tight mb-8">

          Smart Attendance

          <span className="text-blue-600">
            {" "}Management
          </span>

        </h1>

        <p className="text-2xl text-gray-600 max-w-4xl mb-12 leading-relaxed">

          Simplify attendance tracking using QR technology.
          Fast, secure, and designed for modern universities
          and events.

        </p>

        <div className="flex gap-6">

          <Link
            to="/dashboard"
            className="bg-blue-600 text-white px-10 py-4 rounded-2xl text-xl font-semibold hover:bg-blue-700 transition duration-300 shadow-lg"
          >
            Get Started
          </Link>

          <button
            className="border border-gray-400 px-10 py-4 rounded-2xl text-xl font-semibold hover:bg-gray-100 transition duration-300"
          >
            Learn More
          </button>

        </div>

      </section>

      {/* Features */}

      <section className="px-10 pb-24">

        <h2 className="text-5xl font-extrabold text-center mb-16">
          Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Card 1 */}

          <div className="bg-white p-10 rounded-3xl shadow-md hover:scale-105 transition duration-300">

            <h3 className="text-3xl font-bold mb-5">
              QR Attendance
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed">

              Scan QR codes instantly for secure and accurate
              attendance tracking.

            </p>

          </div>

          {/* Card 2 */}

          <div className="bg-white p-10 rounded-3xl shadow-md hover:scale-105 transition duration-300">

            <h3 className="text-3xl font-bold mb-5">
              Real-time Reports
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed">

              View attendance analytics and reports instantly
              with smart dashboards.

            </p>

          </div>

          {/* Card 3 */}

          <div className="bg-white p-10 rounded-3xl shadow-md hover:scale-105 transition duration-300">

            <h3 className="text-3xl font-bold mb-5">
              Multi User Roles
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed">

              Admins, organizers, and students all in one
              powerful platform.

            </p>

          </div>

        </div>

      </section>

    </div>

  )
}

export default Home