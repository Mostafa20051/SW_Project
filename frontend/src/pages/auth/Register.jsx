import { useState } from "react"

import { useNavigate } from "react-router-dom"

import { registerUser } from "../../services/authService"

function Register() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const [error, setError] = useState("")

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })

  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    setError("")

    setLoading(true)

    try {

      await registerUser(formData)

      navigate("/login")

    } catch (error) {

      console.log(error)

      setError(
        error.response?.data?.message ||
        "Registration failed"
      )

    } finally {

      setLoading(false)

    }

  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-[400px]">

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Register to SmartAttend
        </p>

        {error && (

          <div className="bg-red-100 text-red-600 p-3 rounded-lg mb-4 text-center">

            {error}

          </div>

        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <div>

            <label className="block mb-1 font-medium">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
              required
            />

          </div>

          <div>

            <label className="block mb-1 font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
              required
            />

          </div>

          <div>

            <label className="block mb-1 font-medium">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create password"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
              required
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >

            {loading ? "Creating..." : "Register"}

          </button>

        </form>

      </div>

    </div>

  )
}

export default Register