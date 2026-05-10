import {
  Link,
  Outlet,
  useLocation,
  useNavigate
} from "react-router-dom"

import {
  Menu,
  X
} from "lucide-react"

import { useState } from "react"

function DashboardLayout() {

  const location = useLocation()

  const navigate = useNavigate()

  const [sidebarOpen, setSidebarOpen] = useState(false)

  const user = JSON.parse(localStorage.getItem("user"))

  const role =
    user?.role?.toLowerCase().trim()

  const navItems = [
    {
      name: "Dashboard",
      path: "/dashboard"
    },
    {
      name: "QR Attendance",
      path: "/attendance"
    },
    {
      name: "Events",
      path: "/reports"
    },

    ...(role === "admin" ||
    role === "organizer"
      ? [
          {
            name: "Create Event",
            path: "/create-event"
          }
        ]
      : []),

    {
      name: "My Attendance",
      path: "/settings"
    }
  ]

  const handleLogout = () => {

    localStorage.removeItem("token")

    localStorage.removeItem("user")

    navigate("/login")

  }

  return (

    <div className="min-h-screen bg-gray-100 flex">

      {/* Mobile Menu Button */}

      <button
        onClick={() => setSidebarOpen(true)}
        className="lg:hidden fixed top-5 left-5 z-50 bg-blue-600 text-white p-3 rounded-xl shadow-lg"
      >

        <Menu />

      </button>

      {/* Overlay */}

      {sidebarOpen && (

        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />

      )}

      {/* Sidebar */}

      <aside
        className={`
          fixed lg:static top-0 left-0 h-screen w-72 bg-black text-white p-6 flex flex-col justify-between z-50 transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >

        <div>

          {/* Mobile Header */}

          <div className="flex items-center justify-between mb-10 lg:hidden">

            <Link
              to="/"
              className="text-3xl font-bold text-blue-500"
              onClick={() => setSidebarOpen(false)}
            >

              SmartAttend

            </Link>

            <button
              onClick={() => setSidebarOpen(false)}
            >

              <X size={30} />

            </button>

          </div>

          {/* Desktop Logo */}

          <Link
            to="/"
            className="hidden lg:block text-3xl font-bold text-blue-500 mb-12"
          >

            SmartAttend

          </Link>

          {/* Navigation */}

          <nav className="space-y-3">

            {navItems.map((item) => (

              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`block px-4 py-4 rounded-2xl transition text-lg ${
                  location.pathname === item.path
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-800"
                }`}
              >

                {item.name}

              </Link>

            ))}

          </nav>

        </div>

        {/* Logout */}

        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-4 rounded-2xl text-lg transition"
        >

          Logout

        </button>

      </aside>

      {/* Main Content */}

      <main className="flex-1 p-5 lg:p-10 w-full overflow-x-hidden">

        <Outlet />

      </main>

    </div>

  )
}

export default DashboardLayout