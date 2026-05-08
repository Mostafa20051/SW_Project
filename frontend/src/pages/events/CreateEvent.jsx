import { useState } from "react"

import axios from "axios"

function CreateEvent() {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
  })

  const [loading, setLoading] = useState(false)

  const [message, setMessage] = useState("")

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })

  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    setLoading(true)

    setMessage("")

    try {

      const token = localStorage.getItem("token")

      await axios.post(
        "http://localhost:5000/api/events",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      setMessage("Event created successfully")

      setFormData({
        title: "",
        description: "",
        date: "",
      })

    } catch (error) {

      console.log(error)

      setMessage(
        error.response?.data?.message ||
        "Failed to create event"
      )

    } finally {

      setLoading(false)

    }

  }

  return (

    <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-md">

      <h1 className="text-5xl font-bold mb-8">
        Create Event
      </h1>

      {message && (

        <div className="mb-6 bg-blue-100 text-blue-700 p-4 rounded-xl">

          {message}

        </div>

      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border p-4 rounded-xl"
          required
        />

        <textarea
          name="description"
          placeholder="Event Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-4 rounded-xl h-40"
          required
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border p-4 rounded-xl"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl"
        >

          {loading ? "Creating..." : "Create Event"}

        </button>

      </form>

    </div>

  )
}

export default CreateEvent