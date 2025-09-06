import { Router } from 'express';
import StaffController from '@/controllers/admin/staffs/staff.controller';
const router = Router();

/**
 * @swagger
 * tags:
 *   name: Admin - Staff
 *   description: API quản lý nhân viên
 */

/**
 * @swagger
 * /admin/staff:
 *   get:
 *     summary: Lấy danh sách nhân viên
 *     tags: [Admin - Staff]
 *     responses:
 *       200:
 *         description: Thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     example: { id: 1, name: "Staff A" }
 *       400:
 *         description: Thiếu tham số
 *       500:
 *         description: Lỗi server
 */

router.get('/', StaffController.getStaff);

export default router;
