import { Router, Request, Response, NextFunction } from 'express';
import TinhHuyenXaController from '@controllers/api/tinhHuyenXa.controller';
import { autoExtractHeadersMiddleware } from '@middlewares/extractMiddleware';
import { sendError, sendSuccess } from '@/libs/response';

const router = Router();
const tinhHuyenXaCtrl = new TinhHuyenXaController();

// Middleware tự động lấy các header x-*
router.use(autoExtractHeadersMiddleware());

/**
 * @swagger
 * tags:
 *   name: HisApi - TinhHuyenXa
 *   description: API lấy danh sách Tỉnh, Huyện, Xã
 */

/**
 * @swagger
 * /his-api/tinh-huyen-xa:
 *   get:
 *     summary: Lấy danh sách Tỉnh, Huyện, Xã
 *     tags: [HisApi - TinhHuyenXa]
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
 *                       MA_HUYEN:
 *                         type: string
 *                         example: "001"
 *                       TEN_HUYEN:
 *                         type: string
 *                         example: "Ba Đình"
 *                       MA_XA:
 *                         type: string
 *                         example: "0001"
 *                       TEN_XA:
 *                         type: string
 *                         example: "Phúc Xá"
 *       500:
 *         description: Lỗi server
 */
router.get('/list', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await tinhHuyenXaCtrl.getTinhHuyenXaList();
    if (!result) {
      return sendError(res, 404, { message: 'Không tìm thấy dữ liệu Tỉnh-Huyện-Xã' });
    }
    return sendSuccess(res, result);
  } catch (err) {
    return sendError(res, 500, { message: 'Lỗi server' });
  }
});

export default router;
