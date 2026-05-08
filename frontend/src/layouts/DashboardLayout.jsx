import {
  Link,
  Outlet,
  useLocation,
  useNavigate
} from "react-router-dom"

function DashboardLayout() {

  const location = useLocation()

  const navigate = useNavigate()

  const navItems = [
    {
      name: "Dashboard",
      path: "/dashboard"
    },
    {
      name: "Attendance",
      path: "/attendance"
    },
    {
      name: "Events",
      path: "/reports"
    },
    {
      name: "Create Event",
      path: "/create-event"
    },
    {
      name: "Settings",
      path: "/settings"
    }
  ]

  const handleLogout = () => {

    localStorage.removeItem("token")

    localStorage.removeItem("user")

    navigate("/login")

  }

  return (

    <div className="min-h-screen flex bg-gray-100">

      {/* Sidebar */}

      <aside className="w-64 bg-black text-white p-6 flex flex-col justify-between">

        <div>

          <Link
            to="/"
            className="text-3xl font-bold text-blue-500 mb-12 block"
          >
            SmartAttend
          </Link>

          <nav className="space-y-3">

            {navItems.map((item) => (

              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-3 rounded-xl transition ${
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

        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl transition"
        >
          Logout
        </button>

      </aside>

      {/* Content */}

      <main className="flex-1 p-10">

        <Outlet />

      </main>

    </div>

  )
}

export default DashboardLayout