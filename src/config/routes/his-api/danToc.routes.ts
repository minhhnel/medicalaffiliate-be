import { Router, Request, Response, NextFunction } from 'express';
import DanTocController from '@controllers/api/danToc.controller';
import { autoExtractHeadersMiddleware } from '@middlewares/extractMiddleware';
import { sendError, sendSuccess } from '@/libs/response';

const router = Router();
const danTocCtrl = new DanTocController();

// Middleware tự động lấy các header x-*
router.use(autoExtractHeadersMiddleware());

/**
 * @swagger
 * tags:
 *   name: HisApi - DanToc
 *   description: API lấy danh sách dân tộc
 */

/**
 * @swagger
 * /his-api/dan-toc:
 *   get:
 *     summary: Lấy danh sách dân tộc
 *     tags: [HisApi - DanToc]
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
 *                       MA_DANTOC:
 *                         type: string
 *                         example: "01"
 *                       TEN_DANTOC:
 *                         type: string
 *                         example: "Kinh"
 *       500:
 *         description: Lỗi server
 */
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await danTocCtrl.getDanTocList();
    if (!result) {
      return sendError(res, 404, { message: 'Không tìm thấy dữ liệu dân tộc' });
    }
    return sendSuccess(res, result);
  } catch (err) {
    return sendError(res, 500, { message: 'Lỗi server' });
  }
});

export default router;
