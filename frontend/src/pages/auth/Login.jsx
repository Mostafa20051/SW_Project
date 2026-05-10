import { useState } from "react"

import { useNavigate } from "react-router-dom"

import { loginUser } from "../../services/authService"

function Login() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
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

      const data = await loginUser(formData)

      localStorage.setItem(
        "token",
        data.token
      )

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      )

      console.log(data)

      navigate("/dashboard")

    } catch (error) {

      console.log(error)

      setError(
        error.response?.data?.message ||
        "Login failed"
      )

    } finally {

      setLoading(false)

    }

  }

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">

        <h1 className="text-5xl font-bold text-blue-600 text-center mb-4">
          SmartAttend
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Login to your account
        </p>

        {error && (

          <div className="bg-red-100 text-red-600 p-3 rounded-xl mb-5 text-center">

            {error}

          </div>

        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <div>

            <label className="block mb-2 font-semibold">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

          </div>

          <div>

            <label className="block mb-2 font-semibold">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-semibold transition"
          >

            {loading ? "Logging in..." : "Login"}

          </button>

        </form>

      </div>

    </div>

  )
}

export default Login