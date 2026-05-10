import express from "express";

import {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent,
  generateEventQRCode,
} from "../controllers/eventController.js";

import { protect, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * /api/events:
 *   post:
 *     summary: Create new event
 *     tags: [Events]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - date
 *               - location
 *             properties:
 *               title:
 *                 type: string
 *                 example: Git and GitHub Workshop
 *               description:
 *                 type: string
 *                 example: Training session about Git basics and GitHub collaboration.
 *               date:
 *                 type: string
 *                 format: date-time
 *                 example: 2026-05-15T10:00:00.000Z
 *               location:
 *                 type: string
 *                 example: An-Najah National University
 *     responses:
 *       201:
 *         description: Event created successfully
 *       401:
 *         description: Not authorized
 *       403:
 *         description: Access denied
 */
router.post("/", protect, authorizeRoles("admin", "organizer"), createEvent);

/**
 * @swagger
 * /api/events:
 *   get:
 *     summary: Get all events
 *     tags: [Events]
 *     responses:
 *       200:
 *         description: Events fetched successfully
 */
router.get("/", getEvents);

/**
 * @swagger
 * /api/events/{id}:
 *   get:
 *     summary: Get event by ID
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Event ID
 *     responses:
 *       200:
 *         description: Event fetched successfully
 *       404:
 *         description: Event not found
 */
router.get("/:id", getEventById);

/**
 * @swagger
 * /api/events/{id}:
 *   put:
 *     summary: Update event
 *     tags: [Events]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Event ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Updated Git Workshop
 *               description:
 *                 type: string
 *                 example: Updated event description.
 *               date:
 *                 type: string
 *                 format: date-time
 *                 example: 2026-05-20T10:00:00.000Z
 *               location:
 *                 type: string
 *                 example: IT Building
 *     responses:
 *       200:
 *         description: Event updated successfully
 *       401:
 *         description: Not authorized
 *       403:
 *         description: Access denied
 *       404:
 *         description: Event not found
 */
router.put("/:id", protect, authorizeRoles("admin", "organizer"), updateEvent);

/**
 * @swagger
 * /api/events/{id}:
 *   delete:
 *     summary: Delete event
 *     tags: [Events]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Event ID
 *     responses:
 *       200:
 *         description: Event deleted successfully
 *       401:
 *         description: Not authorized
 *       403:
 *         description: Access denied
 *       404:
 *         description: Event not found
 */
router.delete(
  "/:id",
  protect,
  authorizeRoles("admin", "organizer"),
  deleteEvent
);

/**
 * @swagger
 * /api/events/{id}/qr:
 *   post:
 *     summary: Generate QR code for event
 *     tags: [Events]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Event ID
 *     responses:
 *       200:
 *         description: QR code generated successfully
 *       401:
 *         description: Not authorized
 *       403:
 *         description: Access denied
 *       404:
 *         description: Event not found
 */
router.post(
  "/:id/qr",
  protect,
  authorizeRoles("admin", "organizer"),
  generateEventQRCode
);

export default router;