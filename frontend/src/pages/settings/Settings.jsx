import { useState } from "react"

import axios from "axios"

import toast from "react-hot-toast"

function Settings() {

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
  })

  const user = JSON.parse(localStorage.getItem("user"))

  const handlePasswordChange = async (e) => {

    e.preventDefault()

    try {

      const token = localStorage.getItem("token")

      const response = await axios.put(
        "http://localhost:5000/api/users/change-password",
        passwordData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      toast.success(response.data.message)

      setPasswordData({
        currentPassword: "",
        newPassword: "",
      })

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Failed to change password"
      )

    }

  }

  return (

    <div>

      <h1 className="text-5xl font-bold mb-2">
        Account Settings
      </h1>

      <p className="text-gray-500 mb-10">
        Manage your profile settings
      </p>

      {/* PROFILE CARD */}

      <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 mb-10">

        <h2 className="text-3xl font-bold mb-6">
          Profile Information
        </h2>

        <div className="space-y-4 text-lg">

          <p>
            👤 <span className="font-semibold">Name:</span> {user?.name}
          </p>

          <p>
            📧 <span className="font-semibold">Email:</span> {user?.email}
          </p>

          <p>
            🛡️ <span className="font-semibold">Role:</span> {user?.role}
          </p>

        </div>

      </div>

      {/* CHANGE PASSWORD */}

      <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 mb-10">

        <h2 className="text-3xl font-bold mb-6">
          Change Password
        </h2>

        <form
          onSubmit={handlePasswordChange}
          className="space-y-5"
        >

          <input
            type="password"
            placeholder="Current Password"
            value={passwordData.currentPassword}
            onChange={(e) =>
              setPasswordData({
                ...passwordData,
                currentPassword: e.target.value,
              })
            }
            className="w-full border p-4 rounded-2xl"
            required
          />

          <input
            type="password"
            placeholder="New Password"
            value={passwordData.newPassword}
            onChange={(e) =>
              setPasswordData({
                ...passwordData,
                newPassword: e.target.value,
              })
            }
            className="w-full border p-4 rounded-2xl"
            required
          />

          <button
            type="submit"
            className="
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-6 py-4
              rounded-2xl
              transition
            "
          >

            Update Password

          </button>

        </form>

      </div>

    </div>

  )
}

export default Settings