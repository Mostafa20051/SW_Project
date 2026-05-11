import { useEffect, useState } from "react"

import axios from "axios"

import toast from "react-hot-toast"

function Users() {

  const [users, setUsers] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    fetchUsers()

  }, [])

  const fetchUsers = async () => {

    try {

      const token = localStorage.getItem("token")

      const response = await axios.get(
        "http://localhost:5000/api/users",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      setUsers(response.data.users)

    } catch (error) {

      console.log(error)

      toast.error("Failed to load users")

    } finally {

      setLoading(false)

    }

  }

  const handleRoleChange = async (id, role) => {

    try {

      const token = localStorage.getItem("token")

      await axios.put(
        `http://localhost:5000/api/users/${id}`,
        { role },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      toast.success("Role updated successfully")

      fetchUsers()

    } catch (error) {

      console.log(error)

      toast.error("Failed to update role")

    }

  }

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    )

    if (!confirmDelete) return

    try {

      const token = localStorage.getItem("token")

      await axios.delete(
        `http://localhost:5000/api/users/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      toast.success("User deleted successfully")

      fetchUsers()

    } catch (error) {

      console.log(error)

      toast.error("Failed to delete user")

    }

  }

  if (loading) {
    return <p>Loading users...</p>
  }

  return (

    <div>

      <h1 className="text-5xl font-bold mb-2">
        Users Management
      </h1>

      <p className="text-gray-500 mb-10">
        Manage all system users
      </p>

      <div className="bg-white rounded-3xl shadow-md overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-black text-white">

              <tr>

                <th className="p-5 text-left">
                  Name
                </th>

                <th className="p-5 text-left">
                  Email
                </th>

                <th className="p-5 text-left">
                  Role
                </th>

                <th className="p-5 text-center">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {users.map((user) => (

                <tr
                  key={user._id}
                  className="border-b"
                >

                  <td className="p-5">
                    {user.name}
                  </td>

                  <td className="p-5">
                    {user.email}
                  </td>

                  <td className="p-5">

                    <select
                      value={user.role}
                      onChange={(e) =>
                        handleRoleChange(
                          user._id,
                          e.target.value
                        )
                      }
                      className="border p-2 rounded-xl"
                    >

                      <option value="attendee">
                        attendee
                      </option>

                      <option value="organizer">
                        organizer
                      </option>

                      <option value="admin">
                        admin
                      </option>

                    </select>

                  </td>

                  <td className="p-5 text-center">

                    <button
                      onClick={() =>
                        handleDelete(user._id)
                      }
                      className="
                        bg-red-500
                        hover:bg-red-600
                        text-white
                        px-4 py-2
                        rounded-xl
                      "
                    >

                      Delete

                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  )
}

export default Users