import { Routes, Route, useLocation } from "react-router-dom"

import Navbar from "./components/common/Navbar"

import Home from "./pages/Home"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"

import Dashboard from "./pages/dashboard/Dashboard"
import Attendance from "./pages/attendance/Attendance"
import Reports from "./pages/reports/Reports"

import Settings from "./pages/settings/Settings"
import MyAttendance from "./pages/settings/MyAttendance"

import CreateEvent from "./pages/events/CreateEvent"

import Users from "./pages/users/Users"

import ProtectedRoute from "./routes/ProtectedRoute"

import DashboardLayout from "./layouts/DashboardLayout"

function App() {

  const location = useLocation()

  const dashboardPages = [
    "/dashboard",
    "/attendance",
    "/reports",
    "/settings",
    "/create-event",
    "/users",
    "/my-attendance"
  ]

  return (

    <>

      {!dashboardPages.includes(location.pathname) && <Navbar />}

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        {/* Protected Dashboard */}

        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/attendance"
            element={<Attendance />}
          />

          <Route
            path="/reports"
            element={<Reports />}
          />

          <Route
            path="/settings"
            element={<Settings />}
          />

          <Route
            path="/my-attendance"
            element={<MyAttendance />}
          />

          <Route
            path="/create-event"
            element={<CreateEvent />}
          />

          <Route
            path="/users"
            element={<Users />}
          />

        </Route>

      </Routes>

    </>

  )
}

export default App