import express from "express";

import {
  createEvent,
  getEvents,
  getEventById,
} from "../controllers/eventController.js";

import { protect } from "../middleware/authMiddleware.js";

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
 */
router.post("/", protect, createEvent);

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

export default router;