function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Hero Section */}
      <section className="text-center py-24 px-6">

        <h1 className="text-6xl font-bold text-gray-900 mb-6">
          Smart Attendance
          <span className="text-blue-600"> Management</span>
        </h1>

        <p className="text-gray-600 text-xl max-w-2xl mx-auto mb-8">
          Simplify attendance tracking using QR technology.
          Fast, secure, and designed for modern universities and events.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
            Get Started
          </button>

          <button className="border border-gray-400 px-6 py-3 rounded-xl hover:bg-gray-200 transition">
            Learn More
          </button>
        </div>

      </section>

      {/* Features */}
      <section className="px-10 pb-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold mb-4">
              QR Attendance
            </h3>

            <p className="text-gray-600">
              Scan QR codes instantly for secure attendance tracking.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold mb-4">
              Real-time Reports
            </h3>

            <p className="text-gray-600">
              View attendance analytics and reports instantly.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold mb-4">
              Multi User Roles
            </h3>

            <p className="text-gray-600">
              Admins, organizers, and students all in one platform.
            </p>
          </div>

        </div>

      </section>

    </div>
  )
}

export default Home