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

  const role =
    user?.role?.toLowerCase().trim()

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

    if (
      role === "admin" ||
      role === "organizer"
    ) {
      fetchStats()
    }

  }, [role])

  // ATTENDEE DASHBOARD
  if (role === "attendee") {

    return (

      <div>

        <h1 className="text-5xl font-bold mb-2">
          My Dashboard
        </h1>

        <p className="text-gray-500 mb-10">
          Welcome to SmartAttend
        </p>

        <div className="bg-white p-10 rounded-3xl shadow-md border border-gray-100">

          <h2 className="text-3xl font-bold text-gray-800 mb-4">

            Welcome, {user?.name}

          </h2>

          <p className="text-gray-500 text-lg mb-6">

            Role: {user?.role}

          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">

            <h3 className="text-2xl font-bold text-blue-700 mb-3">

              SmartAttend System

            </h3>

            <p className="text-gray-600 leading-relaxed">

              You can browse events, scan QR codes,
              and track your attendance records easily.

            </p>

          </div>

        </div>

      </div>

    )

  }

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

  const attendanceRate =
    stats.totalEvents > 0
      ? (
          (stats.totalAttendance /
            stats.totalEvents) *
          100
        ).toFixed(1)
      : 0

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

      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-3xl shadow-lg mb-10">

        <h2 className="text-2xl font-bold mb-3">
          Attendance Rate
        </h2>

        <p className="text-6xl font-extrabold">
          {attendanceRate}%
        </p>

        <p className="mt-3 text-blue-100">
          Based on total attendance records
        </p>

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