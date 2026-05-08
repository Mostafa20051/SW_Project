import { useEffect, useState } from "react"

import axios from "axios"

function Reports() {

  const [events, setEvents] = useState([])

  useEffect(() => {

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

        setEvents(response.data)

      } catch (error) {

        console.log(error)

      }

    }

    fetchEvents()

  }, [])

  return (

    <>

      <h1 className="text-5xl font-bold mb-2">
        Events
      </h1>

      <p className="text-gray-500 mb-10">
        All available events
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {Array.isArray(events) && events.map((event) => (

          <div
            key={event._id}
            className="bg-white p-8 rounded-2xl shadow-md"
          >

            <h2 className="text-2xl font-bold mb-4">
              {event.title}
            </h2>

            <p className="text-gray-500 mb-3">
              {event.description}
            </p>

            <p className="text-sm text-gray-400">
              {new Date(event.date).toLocaleDateString()}
            </p>

          </div>

        ))}

      </div>

    </>

  )
}

export default Reports