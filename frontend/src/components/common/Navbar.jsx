import { Link } from "react-router-dom"

function Navbar() {

  return (

    <nav className="bg-black text-white px-5 md:px-10 py-5 flex items-center justify-between">

      <Link
        to="/"
        className="text-3xl md:text-5xl font-bold text-blue-500"
      >

        SmartAttend

      </Link>

      <div className="flex items-center gap-4 md:gap-8 text-sm md:text-2xl font-semibold">

        <Link to="/">
          Home
        </Link>

        <Link to="/login">
          Login
        </Link>

        <Link to="/register">
          Register
        </Link>

      </div>

    </nav>

  )
}

export default Navbar