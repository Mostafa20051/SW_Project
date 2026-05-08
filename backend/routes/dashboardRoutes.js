import express from "express";
import { getDashboardStats } from "../controllers/dashboardController.js";
import { protect, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * /api/dashboard/stats:
 *   get:
 *     summary: Get dashboard statistics
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Dashboard statistics fetched successfully
 *       401:
 *         description: Not authorized
 *       403:
 *         description: Access denied
 */
router.get(
  "/stats",
  protect,
  authorizeRoles("admin", "organizer"),
  getDashboardStats
);

export default router;