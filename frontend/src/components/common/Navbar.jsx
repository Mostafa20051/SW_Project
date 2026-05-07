import { Link } from "react-router-dom"

function Navbar() {

  return (

    <nav className="bg-black text-white px-8 py-5 flex justify-between items-center shadow-md">

      <h1 className="text-3xl font-bold text-blue-500">
        SmartAttend
      </h1>

      <div className="space-x-8 text-lg font-medium">

        <Link
          to="/"
          className="hover:text-blue-400 transition"
        >
          Home
        </Link>

        <Link
          to="/login"
          className="hover:text-blue-400 transition"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="hover:text-blue-400 transition"
        >
          Register
        </Link>

      </div>

    </nav>

  )
}

export default Navbar