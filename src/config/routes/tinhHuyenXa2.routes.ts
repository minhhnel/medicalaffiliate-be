import { Router, Request, Response, NextFunction } from 'express';
import TinhHuyenXa2Controller from '@controllers/api/tinhHuyenXa2.controller';
import { autoExtractHeadersMiddleware } from '@middlewares/extractMiddleware';
import { sendError, sendSuccess } from '@/libs/response';

const router = Router();
const tinhHuyenXa2Ctrl = new TinhHuyenXa2Controller();

// Middleware tự động lấy các header x-*
router.use(autoExtractHeadersMiddleware());

/**
 * @swagger
 * tags:
 *   name: TinhHuyenXa2
 *   description: API lấy danh sách Tỉnh-Huyện-Xã 2 cấp
 */

/**
 * @swagger
 * /tinh-huyen-xa2/list:
 *   get:
 *     summary: Lấy danh sách Tỉnh-Huyện-Xã 2 cấp
 *     tags: [TinhHuyenXa2]
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
 *                       MA_TINH:
 *                         type: string
 *                         example: "01"
 *                       TEN_TINH:
 *                         type: string
 *                         example: "Hà Nội"
 *                       MA_XA:
 *                         type: string
 *                         example: "001"
 *                       TEN_XA:
 *                         type: string
 *                         example: "Ba Đình"
 *       500:
 *         description: Lỗi server
 */
router.get('/list', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await tinhHuyenXa2Ctrl.getTinhHuyenXa2List();
    if (!result) {
      return sendError(res, 404, { message: 'Không tìm thấy dữ liệu Tỉnh-Huyện-Xã' });
    }
    return sendSuccess(res, result);
  } catch (err) {
    return sendError(res, 500, { message: 'Lỗi server' });
  }
});

export default router;
