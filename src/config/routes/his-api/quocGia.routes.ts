import { Router, Request, Response, NextFunction } from 'express';
import QuocGiaController from '@controllers/api/quocGia.controller';
import { autoExtractHeadersMiddleware } from '@middlewares/extractMiddleware';
import { sendError, sendSuccess } from '@/libs/response';

const router = Router();
const quocGiaCtrl = new QuocGiaController();

// Middleware tự động lấy các header x-*
router.use(autoExtractHeadersMiddleware());

/**
 * @swagger
 * tags:
 *   name: HisApi - QuocGia
 *   description: API lấy danh sách Quốc gia
 */

/**
 * @swagger
 * /his-api/quoc-gia:
 *   get:
 *     summary: Lấy danh sách Quốc gia
 *     tags: [HisApi - QuocGia]
 *     responses:
 *       200:
 *         description: Thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: string
 *                   example: "000"
 *                 message:
 *                   type: string
 *                   example: "Thành công"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       MA_QUOCGIA:
 *                         type: string
 *                         example: "VN"
 *                       TEN_QUOCGIA:
 *                         type: string
 *                         example: "Việt Nam"
 *       500:
 *         description: Lỗi server
 */
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await quocGiaCtrl.getQuocGiaList();
    if (!result) {
      return sendError(res, 404, { message: 'Không tìm thấy dữ liệu Quốc gia' });
    }
    return sendSuccess(res, result);
  } catch (err) {
    return sendError(res, 500, { message: 'Lỗi server' });
  }
});

export default router;
