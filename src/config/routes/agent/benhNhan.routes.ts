import { Router, Request, Response, NextFunction } from 'express';
import { autoExtractHeadersMiddleware } from '@middlewares/extractMiddleware';
import { BenhNhanController } from '@controllers/agent/benhNhan/benhNhan.controller';
import { sendError, sendSuccess } from '@/libs/response';

const router = Router();
const benhNhanCtrl = new BenhNhanController();

/**
 * @swagger
 * tags:
 *   name: Agent - BenhNhan
 *   description: API quản lý bệnh nhân
 */

/**
 * @swagger
 * tags:
 *   name: Agent - BenhNhan
 *   description: API quản lý bệnh nhân
 */

/**
 * @swagger
 * /benh-nhan:
 *   get:
 *     summary: Lấy thông tin bệnh nhân
 *     tags: [Agent - BenhNhan]
 *     parameters:
 *       - in: query
 *         name: SO_GTTT
 *         schema:
 *           type: string
 *         required: true
 *         description: Số giấy tờ tùy thân
 *       - in: query
 *         name: LOAI_GTTT
 *         schema:
 *           type: string
 *           default: CCCD
 *         description: Loại giấy tờ tùy thân
 *       - in: query
 *         name: DIEN_THOAI
 *         schema:
 *           type: string
 *         description: Số điện thoại (tùy chọn)
 *       - in: query
 *         name: MA_THE_BHYT
 *         schema:
 *           type: string
 *         description: Mã thẻ BHYT (tùy chọn)
 *     responses:
 *       200:
 *         description: Thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     MA_BN:
 *                       type: string
 *                       example: '0000131703'
 *                     HO_TEN:
 *                       type: string
 *                       example: 'NGUYEN VAN X'
 *                     HO_BN:
 *                       type: string
 *                       example: 'NGUYEN VAN'
 *                     TEN_BN:
 *                       type: string
 *                       example: 'X'
 *                     MATINH_CUTRU:
 *                       type: string
 *                       example: '01'
 *                     MAHUYEN_CU_TRU:
 *                       type: string
 *                       example: '001'
 *                     MAXA_CU_TRU:
 *                       type: string
 *                       example: '00001'
 *                     MA_DANTOC:
 *                       type: string
 *                       example: '01'
 *                     MA_QUOCTICH:
 *                       type: string
 *                       example: '124'
 *                     MA_NGHE_NGHIEP:
 *                       type: string
 *                       example: '01'
 *                     DIA_CHI:
 *                       type: string
 *                       example: '123 ABC, Ha Noi'
 *                     NGAY_SINH:
 *                       type: string
 *                       example: '1990-01-01'
 *                     GIOI_TINH:
 *                       type: integer
 *                       example: 2
 *                     NHOM_MAU:
 *                       type: string
 *                       example: ''
 *                     SO_GTTT:
 *                       type: string
 *                       example: '012345678901'
 *                     EMAIL:
 *                       type: string
 *                       example: 'nguyenvana@example.com'
 *                     DIEN_THOAI:
 *                       type: string
 *                       example: '0912345678'
 *                     MA_DINH_DANH:
 *                       type: string
 *                       example: '046096000123'
 *                     MA_THE_BHYT:
 *                       type: string
 *                       example: '7933081123'
 *       400:
 *         description: Thiếu tham số
 *       500:
 *         description: Lỗi server
 */

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await benhNhanCtrl.getBenhNhan(req.query.SO_GTTT as string, req.query.LOAI_GTTT as string, req.query.DIEN_THOAI as string, req.query.MA_THE_BHYT as string);
    if (!result) {
      return sendSuccess(res, { });
    }
    return sendSuccess(res, result);
  } catch (err) {
    return sendError(res, 500, { message: 'Lỗi server' });
  }
});

/**
 * @swagger
 * /benh-nhan:
 *   post:
 *     summary: Đăng ký khám cho bệnh nhân
 *     tags: [Agent - BenhNhan]
 *     parameters:
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
*             example:
 *               ID_LOAI_KHAM: "03"
 *               BN_UU_TIEN: 0
 *               THONG_TIN_BENH_NHAN:
 *                 HO_TEN: "NGUYEN VAN X"
 *                 HO_BN: "NGUYEN VAN"
 *                 TEN_BN: "X"
 *                 MATINH_CUTRU: "01"
 *                 MAHUYEN_CU_TRU: "001"
 *                 MAXA_CU_TRU: "00001"
 *                 MA_DANTOC: "01"
 *                 MA_QUOCTICH: "VN"
 *                 MA_NGHE_NGHIEP: "01"
 *                 DIA_CHI: "123 ABC, Ha Noi"
 *                 NGAY_SINH: "1990-01-01"
 *                 GIOI_TINH: 2
 *                 DIEN_THOAI: "84973537229"
 *                 SO_GTTT: "012345678901"
 *                 MA_THE_BHYT: "7933081123"
 *               THONG_TIN_DICH_VU:
 *                 ID_KHOA: "32"
 *                 ID_PHONG_KHAM: "P160"
 *                 ID_LOAI_KHAM: "03"
 *                 MA_DICH_VU: "013"
 *     responses:
 *       200:
 *         description: Đăng ký khám thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: ""
 *                 data:
 *                   type: object
 *                   properties:
 *                     data:
 *                       type: object
 *                       properties:
 *                         THONG_TIN_BENH_NHAN:
 *                           type: object
 *                           properties:
 *                             ID_BN: { type: string, example: "0000131670" }
 *                             MA_BN: { type: string, example: "0000131670" }
 *                             HO_TEN: { type: string, example: "NGUYEN VAN A" }
 *                             HO_BN: { type: string, example: "NGUYEN VAN" }
 *                             TEN_BN: { type: string, example: "A" }
 *                             MATINH_CUTRU: { type: string, example: "01" }
 *                             MAHUYEN_CU_TRU: { type: string, example: "001" }
 *                             MAXA_CU_TRU: { type: string, example: "00001" }
 *                             MA_DANTOC: { type: string, example: "01" }
 *                             MA_QUOCTICH: { type: string, example: "VN" }
 *                             MA_NGHE_NGHIEP: { type: string, example: "01" }
 *                             DIA_CHI: { type: string, example: "123 ABC, Ha Noi" }
 *                             NGAY_SINH: { type: string, example: "1990-01-01" }
 *                             GIOI_TINH: { type: number, example: 2 }
 *                             SO_GTTT: { type: string, example: "012345678901" }
 *                         THONG_TIN_TIEP_NHAN:
 *                           type: object
 *                           properties:
 *                             ID_LK: { type: string, example: "000000158635" }
 *                             MA_LK: { type: string, example: "000000158635" }
 *                             NGAY_VAO: { type: string, example: "202509052340" }
 *                             NGAY_VAO_NOI_TRU: { type: string, example: "" }
 *                             NGAY_RA: { type: string, example: "" }
 *                             TRANG_THAI_LK: { type: number, example: 1 }
 *                             STT_LK: { type: number, example: 10 }
 *                         THONG_TIN_DANG_KY:
 *                           type: object
 *                           properties:
 *                             ID_DANG_KY: { type: string, example: "000000865740" }
 *                             MA_DANG_KY: { type: string, example: "000000865740" }
 *                             NGAY_DANG_KY: { type: string, example: "2025-09-05" }
 *                             TRANG_THAI_DANG_KY: { type: number, example: 1 }
 *                             DON_GIA_DANG_KY: { type: number, example: 60000 }
 *                             CHI_TIET_DANG_KY:
 *                               type: array
 *                               items:
 *                                 type: object
 *                                 properties:
 *                                   ID_DANG_KY: { type: string, example: "000000865740" }
 *                                   ID_CHI_TIET_DK: { type: string, example: "000000865740" }
 *                                   ID_PHONG_KHAM: { type: string, example: "013" }
 *                                   TEN_PHONG_KHAM: { type: string, example: "khám nội tiết" }
 *                                   LOAI_DICH_VU: { type: string, example: "Khám" }
 *                                   DON_VI: { type: string, example: "Lần" }
 *                                   SO_LUONG: { type: number, example: 1 }
 *                                   DVT: { type: string, example: "Lần" }
 *                                   DON_GIA: { type: number, example: 60000 }
 *                                   TRANG_THAI: { type: number, example: 1 }
 *                         THONG_TIN_THANH_TOAN:
 *                           type: object
 *                           properties:
 *                             SO_PHIEU: { type: string, example: "000000023247" }
 *                     code: { type: string, example: "000" }
 *                     message: { type: string, example: "Đăng ký khám thành công" }
 *                     page: { type: number, example: 0 }
 *                     pageSize: { type: number, example: 0 }
 *                     count: { type: number, example: 0 }
 *       400:
 *         description: Thiếu header hoặc dữ liệu không hợp lệ
 *       500:
 *         description: Lỗi server
 */

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await benhNhanCtrl.dangKyKham(req.body);
    if (!result) {
      return sendError(res, 404, { message: 'Đang ký khám không thành công' });
    }
    return sendSuccess(res, result);
  } catch (err) {
    return sendError(res, 500, { message: 'Đang ký khám không thành công' });
  }
});

export default router;
