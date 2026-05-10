import { useEffect, useState } from "react"

import axios from "axios"
import Loader from "../../components/common/Loader"
function Settings() {

  const [attendance, setAttendance] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const fetchAttendance = async () => {

      try {

        const token = localStorage.getItem("token")

        const response = await axios.get(
          "http://localhost:5000/api/attendance/my",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )

        setAttendance(response.data.attendance || [])

      } catch (error) {

        console.log(error)

      } finally {

        setLoading(false)

      }

    }

    fetchAttendance()

  }, [])

  return (

    <div>

      <h1 className="text-5xl font-bold mb-2">
        My Attendance
      </h1>

      <p className="text-gray-500 mb-10">
        View your attendance history
      </p>

      {loading ? (

        <Loader />

      ) : attendance.filter((item) => item.event).length === 0 ? (

        <div className="bg-white p-10 rounded-3xl shadow-md text-center border border-gray-100">

          <h2 className="text-2xl font-bold mb-3">
            No Attendance Records
          </h2>

          <p className="text-gray-500">
            Your attendance will appear here.
          </p>

        </div>

      ) : (

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {attendance
            .filter((item) => item.event)
            .map((item) => (

              <div
                key={item._id}
                className="
                  bg-white
                  border border-gray-100
                  p-8
                  rounded-3xl
                  shadow-md
                  hover:-translate-y-2
                  hover:scale-[1.02]
                  transition
                  duration-300
                "
              >

                <h2 className="text-3xl font-bold mb-6 text-gray-800">

                  {item.event?.title}

                </h2>

                <div className="space-y-4 text-gray-600 text-lg">

                  <p>
                    📍 {item.event?.location}
                  </p>

                  <p>
                    📅 {
                      new Date(
                        item.event?.date
                      ).toLocaleDateString()
                    }
                  </p>

                  <p>
                    ⏰ {
                      new Date(
                        item.checkInTime
                      ).toLocaleTimeString()
                    }
                  </p>

                  <div className="pt-2">

                    <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">

                      ✅ {item.status}

                    </div>

                  </div>

                </div>

              </div>

            ))}

        </div>

      )}

    </div>

  )
}

export default Settings