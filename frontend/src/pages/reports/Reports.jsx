function Reports() {

  return (

    <>

      <h1 className="text-5xl font-bold mb-2">
        Reports
      </h1>

      <p className="text-gray-500 mb-10">
        Attendance reports and analytics
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="bg-white p-8 rounded-2xl shadow-md">

          <h2 className="text-2xl font-bold mb-4">
            Weekly Report
          </h2>

          <p className="text-gray-500">
            View weekly attendance statistics and charts.
          </p>

        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md">

          <h2 className="text-2xl font-bold mb-4">
            Monthly Report
          </h2>

          <p className="text-gray-500">
            Analyze monthly attendance performance.
          </p>

        </div>

      </div>

    </>

  )
}

export default Reports