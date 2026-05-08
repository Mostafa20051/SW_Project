import Event from "../models/Event.js";
import QRCode from "qrcode";

// Create Event
export const createEvent = async (req, res) => {
  try {
    const { title, description, date, location } = req.body;

    if (!title || !date || !location) {
      return res.status(400).json({
        success: false,
        message: "Title, date and location are required",
      });
    }

    const event = await Event.create({
      title,
      description,
      date,
      location,
      organizer: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Event created successfully",
      event,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Events
export const getEvents = async (req, res) => {
  try {
    const events = await Event.find().populate(
      "organizer",
      "name email role"
    );

    res.status(200).json({
      success: true,
      count: events.length,
      events,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Event By ID
export const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).populate(
      "organizer",
      "name email role"
    );

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    res.status(200).json({
      success: true,
      event,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Event
export const updateEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Event updated successfully",
      event: updatedEvent,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Event
export const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    await event.deleteOne();

    res.status(200).json({
      success: true,
      message: "Event deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Generate QR Code For Event
export const generateEventQRCode = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    const qrData = JSON.stringify({
      eventId: event._id,
      title: event.title,
    });

    const qrCode = await QRCode.toDataURL(qrData);

    event.qrCode = qrCode;
    await event.save();

    res.status(200).json({
      success: true,
      message: "QR code generated successfully",
      eventId: event._id,
      qrCode,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};