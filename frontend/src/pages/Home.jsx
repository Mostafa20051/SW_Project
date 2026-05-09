import { Link } from "react-router-dom"

function Home() {

  return (

    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 overflow-x-hidden">

      <section className="flex flex-col justify-center items-center text-center px-5 md:px-10 py-20 md:py-32">

        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-8">

          Smart Attendance

          <span className="text-blue-600">
            {" "}Management
          </span>

        </h1>

        <p className="text-lg md:text-2xl text-gray-600 max-w-4xl mb-12 leading-relaxed">

          Simplify attendance tracking using QR technology.
          Fast, secure, and designed for modern universities
          and events.

        </p>

        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">

          <Link
            to="/dashboard"
            className="bg-blue-600 text-white px-10 py-4 rounded-2xl text-lg md:text-xl font-semibold hover:bg-blue-700 transition duration-300 shadow-lg text-center"
          >

            Get Started

          </Link>

        </div>

      </section>

      <section className="px-5 md:px-10 pb-20 md:pb-24">

        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">

          Features

        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-md hover:scale-105 transition duration-300">

            <h3 className="text-2xl md:text-3xl font-bold mb-5">
              QR Attendance
            </h3>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed">

              Scan QR codes instantly for secure and accurate attendance tracking.

            </p>

          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-md hover:scale-105 transition duration-300">

            <h3 className="text-2xl md:text-3xl font-bold mb-5">
              Real-time Reports
            </h3>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed">

              View attendance analytics and reports instantly with smart dashboards.

            </p>

          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-md hover:scale-105 transition duration-300">

            <h3 className="text-2xl md:text-3xl font-bold mb-5">
              Multi User Roles
            </h3>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed">

              Admins, organizers, and students all in one powerful platform.

            </p>

          </div>

        </div>

      </section>

    </div>

  )
}

export default Home