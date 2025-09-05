import { Router, Request, Response, NextFunction } from 'express';
import NgheNghiepController from '@controllers/api/ngheNghiep.controller';
import { autoExtractHeadersMiddleware } from '@middlewares/extractMiddleware';
import { sendError, sendSuccess } from '@/libs/response';

const router = Router();
const ngheNghiepCtrl = new NgheNghiepController();

// Middleware tự động lấy các header x-*
router.use(autoExtractHeadersMiddleware());

/**
 * @swagger
 * tags:
 *   name: NgheNghiep
 *   description: API lấy danh sách nghề nghiệp
 */

/**
 * @swagger
 * /nghe-nghiep/list:
 *   get:
 *     summary: Lấy danh sách nghề nghiệp
 *     tags: [NgheNghiep]
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
 *                       MA_NGHENGHIEP:
 *                         type: string
 *                         example: "01"
 *                       TEN_NGHENGHIEP:
 *                         type: string
 *                         example: "Bác sĩ"
 *       500:
 *         description: Lỗi server
 */
router.get('/list', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ngheNghiepCtrl.getNgheNghiepList();
    if (!result) {
      return sendError(res, 404, { message: 'Không tìm thấy dữ liệu nghề nghiệp' });
    }
    return sendSuccess(res, result);
  } catch (err) {
    return sendError(res, 500, { message: 'Lỗi server' });
  }
});

export default router;
