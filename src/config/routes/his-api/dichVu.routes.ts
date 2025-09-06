import { Router, Request, Response, NextFunction } from 'express';
import DichVuController from '@controllers/api/dichVu.controller';
import { autoExtractHeadersMiddleware } from '@middlewares/extractMiddleware';
import { sendError, sendSuccess } from '@/libs/response';

const router = Router();
const dichVuCtrl = new DichVuController();

// Middleware dùng để lấy tự động các header x-*
router.use(autoExtractHeadersMiddleware());

/**
 * @swagger
 * tags:
 *   name: HisApi - DichVu
 *   description: API quản lý dịch vụ
 */

/**
 * @swagger
 * /his-api/dich-vu:
 *   get:
 *     summary: Lấy danh sách cây dịch vụ
 *     tags: [HisApi - DichVu]
 *     parameters:
 *
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
 *                     example: { id: 1, name: "Dịch vụ A", children: [] }
 *       400:
 *         description: Thiếu header
 *       500:
 *         description: Lỗi server
 */
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await dichVuCtrl.getDichVuTree();
    if (!result) {
      return sendError(res, 404, { message: 'Dịch vụ không tồn tại' });
    }
    return sendSuccess(res, result);
  } catch (err) {
    return sendError(res, 500, { message: 'Lỗi server' });
  }
});

export default router;
