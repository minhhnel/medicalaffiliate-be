import { Router, Request, Response, NextFunction } from 'express';
import GiaDichVuController from '@controllers/api/giaDichVu.controller';
import { autoExtractHeadersMiddleware } from '@middlewares/extractMiddleware';
import { sendError, sendSuccess } from '@/libs/response';

const router = Router();
const giaDichVuCtrl = new GiaDichVuController();

// Middleware tự động lấy các header x-*
router.use(autoExtractHeadersMiddleware());

/**
 * @swagger
 * tags:
 *   name: HisApi - GiaDichVu
 *   description: API lấy giá dịch vụ
 */

/**
 * @swagger
 * /his-api/gia-dich-vu:
 *   get:
 *     summary: Lấy danh sách giá dịch vụ
 *     tags: [HisApi - GiaDichVu]
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
 *                       MA_DICH_VU:
 *                         type: string
 *                         example: "013"
 *                       TEN_DICH_VU:
 *                         type: string
 *                         example: "Khám tổng quát"
 *                       DON_GIA_PHONG_KHAM:
 *                         type: string
 *                         example: "500000"
 *                       DON_GIA_BHYT:
 *                         type: string
 *                         example: "150000"
 *       500:
 *         description: Lỗi server
 */
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await giaDichVuCtrl.getGiaDichVuList();
    if (!result) {
      return sendError(res, 404, { message: 'Không tìm thấy dữ liệu giá dịch vụ' });
    }
    return sendSuccess(res, result);
  } catch (err) {
    return sendError(res, 500, { message: 'Lỗi server' });
  }
});

export default router;
