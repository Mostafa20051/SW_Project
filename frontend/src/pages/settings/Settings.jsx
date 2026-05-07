function Settings() {

  return (

    <>

      <h1 className="text-5xl font-bold mb-2">
        Settings
      </h1>

      <p className="text-gray-500 mb-10">
        Manage your system settings
      </p>

      <div className="bg-white rounded-2xl shadow-md p-8 space-y-6">

        <div>

          <label className="block mb-2 font-semibold">
            System Name
          </label>

          <input
            type="text"
            defaultValue="SmartAttend"
            className="w-full border rounded-xl p-4 outline-none"
          />

        </div>

        <div>

          <label className="block mb-2 font-semibold">
            Admin Email
          </label>

          <input
            type="email"
            defaultValue="admin@smartattend.com"
            className="w-full border rounded-xl p-4 outline-none"
          />

        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl transition">

          Save Changes

        </button>

      </div>

    </>

  )
}

export default Settings