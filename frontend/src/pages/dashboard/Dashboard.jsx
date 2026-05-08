import {
  Users,
  ClipboardCheck,
  XCircle
} from "lucide-react"

import { useEffect, useState } from "react"

import axios from "axios"

function Dashboard() {

  const [stats, setStats] = useState({
    totalUsers: 0,
    totalAttendance: 0,
    totalEvents: 0,
  })

  useEffect(() => {

    const fetchStats = async () => {

      try {

        const token = localStorage.getItem("token")

        const response = await axios.get(
          "http://localhost:5000/api/dashboard/stats",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )

        setStats(response.data)

      } catch (error) {

        console.log(error)

      }

    }

    fetchStats()

  }, [])

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
              Total Users
            </h2>

            <p className="text-5xl font-bold text-blue-600">
              {stats.totalUsers}
            </p>

          </div>

          <Users size={55} className="text-blue-500" />

        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md flex items-center justify-between">

          <div>

            <h2 className="text-gray-500 mb-2">
              Total Attendance
            </h2>

            <p className="text-5xl font-bold text-green-600">
              {stats.totalAttendance}
            </p>

          </div>

          <ClipboardCheck
            size={55}
            className="text-green-500"
          />

        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md flex items-center justify-between">

          <div>

            <h2 className="text-gray-500 mb-2">
              Total Events
            </h2>

            <p className="text-5xl font-bold text-red-600">
              {stats.totalEvents}
            </p>

          </div>

          <XCircle
            size={55}
            className="text-red-500"
          />

        </div>

      </div>

    </>

  )
}

export default Dashboard