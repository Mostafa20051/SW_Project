import {
  Users,
  ClipboardCheck,
  CalendarDays
} from "lucide-react"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

import { useEffect, useState } from "react"

import axios from "axios"

import Loader from "../../components/common/Loader"
function Dashboard() {

  const [stats, setStats] = useState(null)

  const user = JSON.parse(localStorage.getItem("user"))

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

        setStats(response.data.stats)

      } catch (error) {

        console.log(error)

      }

    }

    fetchStats()

  }, [])

  if (!stats) {
    return <Loader />
  }

  const chartData = [
    {
      name: "Users",
      total: stats.totalUsers,
    },
    {
      name: "Attendance",
      total: stats.totalAttendance,
    },
    {
      name: "Events",
      total: stats.totalEvents,
    },
  ]

  return (

    <>

      <h1 className="text-5xl font-bold mb-2">
        Dashboard
      </h1>

      <p className="text-gray-500 mb-5">
        Welcome back to SmartAttend System
      </p>

      <div className="bg-white p-6 rounded-3xl shadow-md mb-10 border border-gray-100">

        <h2 className="text-2xl font-bold text-gray-700">
          Welcome, {user?.name}
        </h2>

        <p className="text-gray-500 mt-2">
          Role: {user?.role || "attendee"}
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white p-6 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 border border-gray-100 flex items-center justify-between">

          <div>

            <h2 className="text-gray-500 mb-2">
              Total Users
            </h2>

            <p className="text-5xl font-bold text-blue-600">
              {stats.totalUsers}
            </p>

          </div>

          <Users
            size={55}
            className="text-blue-500"
          />

        </div>

        <div className="bg-white p-6 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 border border-gray-100 flex items-center justify-between">

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

        <div className="bg-white p-6 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 border border-gray-100 flex items-center justify-between">

          <div>

            <h2 className="text-gray-500 mb-2">
              Total Events
            </h2>

            <p className="text-5xl font-bold text-red-600">
              {stats.totalEvents}
            </p>

          </div>

          <CalendarDays
            size={55}
            className="text-red-500"
          />

        </div>

      </div>

      <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100">

        <h2 className="text-3xl font-bold mb-8">
          System Analytics
        </h2>

        <div className="w-full h-96">

          <ResponsiveContainer width="100%" height="100%">

            <BarChart data={chartData}>

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="total"
                radius={[10, 10, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

    </>

  )
}

export default Dashboard