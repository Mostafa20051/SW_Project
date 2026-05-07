import Attendance from "../models/Attendance.js";
import Event from "../models/Event.js";

// Mark Attendance
export const markAttendance = async (req, res) => {
  try {
    const { eventId } = req.body;

    if (!eventId) {
      return res.status(400).json({
        success: false,
        message: "Event ID is required",
      });
    }

    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    const existingAttendance = await Attendance.findOne({
      user: req.user._id,
      event: eventId,
    });

    if (existingAttendance) {
      return res.status(400).json({
        success: false,
        message: "Attendance already marked for this event",
      });
    }

    const attendance = await Attendance.create({
      user: req.user._id,
      event: eventId,
      status: "present",
    });

    res.status(201).json({
      success: true,
      message: "Attendance marked successfully",
      attendance,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Attendance For Event
export const getEventAttendance = async (req, res) => {
  try {
    const { eventId } = req.params;

    const attendance = await Attendance.find({ event: eventId })
      .populate("user", "name email role")
      .populate("event", "title date location");

    res.status(200).json({
      success: true,
      count: attendance.length,
      attendance,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get My Attendance
export const getMyAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find({ user: req.user._id }).populate(
      "event",
      "title date location"
    );

    res.status(200).json({
      success: true,
      count: attendance.length,
      attendance,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};