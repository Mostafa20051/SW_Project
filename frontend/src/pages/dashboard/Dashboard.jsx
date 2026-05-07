import {
  Users,
  ClipboardCheck,
  XCircle
} from "lucide-react"

function Dashboard() {

  return (

    <>

      <h1 className="text-5xl font-bold mb-2">
        Dashboard
      </h1>

      <p className="text-gray-500 mb-10">
        Welcome back to SmartAttend System
      </p>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white p-6 rounded-2xl shadow-md flex items-center justify-between">

          <div>

            <h2 className="text-gray-500 mb-2">
              Total Students
            </h2>

            <p className="text-5xl font-bold text-blue-600">
              120
            </p>

          </div>

          <Users size={55} className="text-blue-500" />

        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md flex items-center justify-between">

          <div>

            <h2 className="text-gray-500 mb-2">
              Present Today
            </h2>

            <p className="text-5xl font-bold text-green-600">
              98
            </p>

          </div>

          <ClipboardCheck size={55} className="text-green-500" />

        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md flex items-center justify-between">

          <div>

            <h2 className="text-gray-500 mb-2">
              Absent Today
            </h2>

            <p className="text-5xl font-bold text-red-600">
              22
            </p>

          </div>

          <XCircle size={55} className="text-red-500" />

        </div>

      </div>

      {/* Recent Attendance */}

      <div className="bg-white rounded-2xl shadow-md p-8">

        <h2 className="text-4xl font-bold mb-8">
          Recent Attendance
        </h2>

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="text-left py-4">
                Name
              </th>

              <th className="text-left py-4">
                Status
              </th>

              <th className="text-left py-4">
                Time
              </th>

            </tr>

          </thead>

          <tbody>

            <tr className="border-b">

              <td className="py-5">
                Ahmad Ali
              </td>

              <td className="text-green-600 font-semibold">
                Present
              </td>

              <td>
                09:00 AM
              </td>

            </tr>

            <tr className="border-b">

              <td className="py-5">
                Sara Mohammad
              </td>

              <td className="text-red-600 font-semibold">
                Absent
              </td>

              <td>
                ---
              </td>

            </tr>

            <tr>

              <td className="py-5">
                Mostafa Khaled
              </td>

              <td className="text-green-600 font-semibold">
                Present
              </td>

              <td>
                09:12 AM
              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </>

  )
}

export default Dashboard