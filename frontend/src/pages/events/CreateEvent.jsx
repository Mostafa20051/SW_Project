import { useEffect, useState } from "react"

import axios from "axios"

import toast from "react-hot-toast"

import {
  Type,
  FileText,
  MapPin,
  Calendar
} from "lucide-react"

function CreateEvent() {

  const editEvent = JSON.parse(
    localStorage.getItem("editEvent")
  )

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    capacity: 100,
  })

  const [loading, setLoading] = useState(false)

  useEffect(() => {

    if (editEvent) {

      setFormData({
        title: editEvent.title || "",
        description: editEvent.description || "",
        date: editEvent.date
          ? editEvent.date.split("T")[0]
          : "",
        location: editEvent.location || "",
        capacity: editEvent.capacity || 100,
      })

    }

  }, [])

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })

  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    setLoading(true)

    try {

      const token = localStorage.getItem("token")

      if (editEvent) {

        await axios.put(
          `http://localhost:5000/api/events/${editEvent._id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )

        toast.success("Event updated successfully")

        localStorage.removeItem("editEvent")

      } else {

        await axios.post(
          "http://localhost:5000/api/events",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )

        toast.success("Event created successfully")

      }

      setFormData({
        title: "",
        description: "",
        date: "",
        location: "",
        capacity: 100,
      })

    } catch (error) {

      console.log(error)

      toast.error(
        error.response?.data?.message ||
        "Operation failed"
      )

    } finally {

      setLoading(false)

    }

  }

  return (

    <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-md">

      <h1 className="text-5xl font-bold mb-3">

        {editEvent
          ? "Edit Event"
          : "Create Event"}

      </h1>

      <p className="text-gray-500 mb-10">

        Create and manage university events

      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        <div className="relative">

          <Type
            className="absolute left-5 top-5 text-gray-400"
            size={22}
          />

          <input
            type="text"
            name="title"
            placeholder="Event Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border p-5 pl-14 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

        </div>

        <div className="relative">

          <FileText
            className="absolute left-5 top-5 text-gray-400"
            size={22}
          />

          <textarea
            name="description"
            placeholder="Event Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-5 pl-14 rounded-2xl h-44 outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

        </div>

        <div className="relative">

          <MapPin
            className="absolute left-5 top-5 text-gray-400"
            size={22}
          />

          <input
            type="text"
            name="location"
            placeholder="Event Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border p-5 pl-14 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

        </div>

        <div className="relative">

          <Type
            className="absolute left-5 top-5 text-gray-400"
            size={22}
          />

          <input
            type="number"
            name="capacity"
            placeholder="Event Capacity"
            value={formData.capacity}
            onChange={handleChange}
            className="w-full border p-5 pl-14 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
            required
            min="1"
          />

        </div>

        <div className="relative">

          <Calendar
            className="absolute left-5 top-5 text-gray-400"
            size={22}
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border p-5 pl-14 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl text-xl font-semibold transition"
        >

          {loading
            ? "Processing..."
            : editEvent
            ? "Update Event"
            : "Create Event"}

        </button>

      </form>

    </div>

  )
}

export default CreateEvent