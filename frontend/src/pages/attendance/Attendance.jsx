import { useState } from "react"

import axios from "axios"

import toast from "react-hot-toast"

import {
  QrCode,
  CheckCircle
} from "lucide-react"

import { Scanner } from "@yudiel/react-qr-scanner"

function Attendance() {

  const [scanning, setScanning] = useState(false)

  const [isProcessing, setIsProcessing] = useState(false)

  const handleScan = async (result) => {

    if (!result || isProcessing) return

    try {

      setIsProcessing(true)

      const token = localStorage.getItem("token")

      const eventId = result[0].rawValue

      const response = await axios.post(
        "http://localhost:5000/api/attendance/scan",
        {
          eventId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      toast.success(response.data.message)

      setScanning(false)

    } catch (error) {

      console.log(error)

      toast.error(
        error.response?.data?.message ||
        "Failed to mark attendance"
      )

      setScanning(false)

    } finally {

      setIsProcessing(false)

    }

  }

  return (

    <div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">

        <div>

          <h1 className="text-5xl font-bold mb-2">
            QR Attendance
          </h1>

          <p className="text-gray-500">
            Scan QR code for attendance
          </p>

        </div>

        <button
          onClick={() => setScanning(!scanning)}
          className={`px-6 py-4 rounded-2xl flex items-center justify-center gap-3 text-white transition
          ${
            scanning
              ? "bg-red-500 hover:bg-red-600"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >

          <QrCode size={24} />

          {scanning
            ? "Stop Scanner"
            : "Start Scanner"}

        </button>

      </div>

      <div className="bg-white p-6 md:p-10 rounded-3xl shadow-md">

        {scanning ? (

          <div className="overflow-hidden rounded-3xl">

            <Scanner
              onScan={handleScan}
              onError={(error) => console.log(error)}
            />

          </div>

        ) : (

          <div className="flex flex-col items-center justify-center py-20 text-gray-500">

            <CheckCircle
              size={60}
              className="mb-5 text-gray-300"
            />

            <p className="text-xl">
              Scanner stopped
            </p>

          </div>

        )}

      </div>

    </div>

  )
}

export default Attendance