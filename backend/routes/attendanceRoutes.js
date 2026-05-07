import express from "express";

import {
  markAttendance,
  getEventAttendance,
  getMyAttendance,
} from "../controllers/attendanceController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * /api/attendance/mark:
 *   post:
 *     summary: Mark attendance for an event
 *     tags: [Attendance]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - eventId
 *             properties:
 *               eventId:
 *                 type: string
 *                 example: 69fc55e716d3375227609ce3
 *     responses:
 *       201:
 *         description: Attendance marked successfully
 */
router.post("/mark", protect, markAttendance);

/**
 * @swagger
 * /api/attendance/my:
 *   get:
 *     summary: Get my attendance records
 *     tags: [Attendance]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: My attendance records fetched successfully
 */
router.get("/my", protect, getMyAttendance);

/**
 * @swagger
 * /api/attendance/event/{eventId}:
 *   get:
 *     summary: Get attendance records for specific event
 *     tags: [Attendance]
 *     parameters:
 *       - in: path
 *         name: eventId
 *         required: true
 *         schema:
 *           type: string
 *         description: Event ID
 *     responses:
 *       200:
 *         description: Event attendance fetched successfully
 */
router.get("/event/:eventId", getEventAttendance);

export default router;