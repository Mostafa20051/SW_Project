import {
  Search,
  QrCode,
  CheckCircle,
  XCircle
} from "lucide-react"

function Attendance() {

  const students = [
    {
      id: 1,
      name: "Ahmad Ali",
      status: "Present",
      time: "09:00 AM"
    },
    {
      id: 2,
      name: "Sara Mohammad",
      status: "Absent",
      time: "---"
    },
    {
      id: 3,
      name: "Mostafa Khaled",
      status: "Present",
      time: "09:12 AM"
    }
  ]

  return (

    <>

      <div className="flex items-center justify-between mb-10">

        <div>

          <h1 className="text-5xl font-bold mb-2">
            Attendance
          </h1>

          <p className="text-gray-500">
            Manage student attendance
          </p>

        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-2xl flex items-center gap-3 transition">

          <QrCode size={24} />

          Scan QR

        </button>

      </div>

      {/* Search */}

      <div className="bg-white rounded-2xl shadow-md p-5 mb-10 flex items-center gap-4">

        <Search className="text-gray-400" />

        <input
          type="text"
          placeholder="Search student..."
          className="w-full outline-none"
        />

      </div>

      {/* Table */}

      <div className="bg-white rounded-2xl shadow-md overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-50">

            <tr>

              <th className="text-left p-6">
                Student Name
              </th>

              <th className="text-left p-6">
                Status
              </th>

              <th className="text-left p-6">
                Time
              </th>

              <th className="text-left p-6">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {students.map((student) => (

              <tr
                key={student.id}
                className="border-t"
              >

                <td className="p-6">
                  {student.name}
                </td>

                <td
                  className={`p-6 font-semibold ${
                    student.status === "Present"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {student.status}
                </td>

                <td className="p-6">
                  {student.time}
                </td>

                <td className="p-6 flex gap-4">

                  <button className="bg-green-100 p-3 rounded-xl hover:bg-green-200 transition">

                    <CheckCircle className="text-green-600" />

                  </button>

                  <button className="bg-red-100 p-3 rounded-xl hover:bg-red-200 transition">

                    <XCircle className="text-red-600" />

                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </>

  )
}

export default Attendance