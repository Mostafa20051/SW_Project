import { useEffect, useState } from "react"

import axios from "axios"

import { QRCodeCanvas } from "qrcode.react"

import toast from "react-hot-toast"

import { useNavigate } from "react-router-dom"

function Reports() {

  const navigate = useNavigate()

  const user = JSON.parse(localStorage.getItem("user"))

  const role =
    user?.role?.toLowerCase().trim()

  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")

  useEffect(() => {

    fetchEvents()

  }, [])

  const fetchEvents = async () => {

    try {

      const token = localStorage.getItem("token")

      const response = await axios.get(
        "http://localhost:5000/api/events",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      setEvents(response.data.events || [])

    } catch (error) {

      console.log(error)

      toast.error("Failed to load events")

    } finally {

      setLoading(false)

    }

  }

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this event?"
    )

    if (!confirmDelete) return

    try {

      const token = localStorage.getItem("token")

      await axios.delete(
        `http://localhost:5000/api/events/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      setEvents(
        events.filter(
          (event) => event._id !== id
        )
      )

      toast.success(
        "Event deleted successfully"
      )

    } catch (error) {

      console.log(error)

      toast.error("Failed to delete event")

    }

  }

  const handleEdit = (event) => {

    localStorage.setItem(
      "editEvent",
      JSON.stringify(event)
    )

    navigate("/create-event")

  }

  const filteredEvents = events.filter((event) =>
    event.title
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  return (

    <div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">

        <div>

          <h1 className="text-5xl font-bold mb-2">
            Events
          </h1>

          <p className="text-gray-500">
            All available events
          </p>

        </div>

        <input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="
            w-full md:w-96
            bg-white
            border border-gray-200
            p-4 rounded-2xl
            outline-none
            focus:ring-2
            focus:ring-blue-500
            shadow-sm
          "
        />

      </div>

      {loading ? (

        <p className="text-gray-500">
          Loading...
        </p>

      ) : filteredEvents.length === 0 ? (

        <div className="bg-white p-10 rounded-3xl shadow-md text-center">

          <h2 className="text-2xl font-bold mb-3">
            No Events Found
          </h2>

          <p className="text-gray-500">
            Try creating a new event.
          </p>

        </div>

      ) : (

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {filteredEvents.map((event) => (

            <div
              key={event._id}
              className="
                bg-white
                border border-gray-100
                p-8
                rounded-3xl
                shadow-md
                hover:shadow-2xl
                hover:-translate-y-2
                hover:scale-[1.02]
                transition
                duration-300
              "
            >

              <h2 className="text-3xl font-bold mb-4 text-gray-800">

                {event.title}

              </h2>

              <p className="text-gray-500 mb-5 leading-relaxed">

                {event.description}

              </p>

              <div className="space-y-2 mb-6 text-gray-600">

                <p>
                  📍 {event.location || "No location"}
                </p>

                <p>
                  📅 {
                    event.date
                      ? new Date(event.date).toLocaleDateString()
                      : "No date"
                  }
                </p>

              </div>

              <div className="bg-gray-100 p-6 rounded-3xl flex flex-col items-center mb-6">

                <QRCodeCanvas
                  value={event._id}
                  size={160}
                />

                <p className="mt-4 text-sm text-gray-500">

                  Scan for attendance

                </p>

              </div>

              {(role === "admin" ||
              role === "organizer") && (

                <div className="flex gap-4">

                  <button
                    onClick={() => handleEdit(event)}
                    className="
                      flex-1
                      py-3
                      rounded-2xl
                      font-semibold
                      transition
                      bg-yellow-400
                      hover:bg-yellow-500
                      text-white
                    "
                  >

                    Edit

                  </button>

                  <button
                    onClick={() => handleDelete(event._id)}
                    className="
                      flex-1
                      py-3
                      rounded-2xl
                      font-semibold
                      transition
                      bg-red-500
                      hover:bg-red-600
                      text-white
                    "
                  >

                    Delete

                  </button>

                </div>

              )}

            </div>

          ))}

        </div>

      )}

    </div>

  )
}

export default Reports