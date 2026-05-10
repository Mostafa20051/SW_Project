import express from "express";

import {
  markAttendance,
  getEventAttendance,
  getMyAttendance,
  scanQRCodeAttendance,
} from "../controllers/attendanceController.js";

import { protect, authorizeRoles } from "../middleware/authMiddleware.js";

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
 *       400:
 *         description: Attendance already marked or missing event ID
 *       404:
 *         description: Event not found
 */
router.post("/mark", protect, markAttendance);

/**
 * @swagger
 * /api/attendance/scan:
 *   post:
 *     summary: Scan QR and mark attendance
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
 *         description: Attendance marked successfully via QR
 *       400:
 *         description: Attendance already marked or missing event ID
 *       404:
 *         description: Event not found
 */
router.post("/scan", protect, scanQRCodeAttendance);

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
 *       401:
 *         description: Not authorized
 */
router.get("/my", protect, getMyAttendance);

/**
 * @swagger
 * /api/attendance/event/{eventId}:
 *   get:
 *     summary: Get attendance records for specific event
 *     tags: [Attendance]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: eventId
 *         required: true
 *         schema:
 *           type: string
 *         description: Event ID
 *         example: 69fc55e716d3375227609ce3
 *     responses:
 *       200:
 *         description: Event attendance fetched successfully
 *       401:
 *         description: Not authorized
 *       403:
 *         description: Access denied
 */
router.get(
  "/event/:eventId",
  protect,
  authorizeRoles("admin", "organizer"),
  getEventAttendance
);

export default router;