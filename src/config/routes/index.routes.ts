import { Router } from 'express';
import userRouter from './users.routes';
import dichVuRouter from './dichVu.routes';
import giaDichVuRouter from './giaDichVu.routes';
import benhNhanRouter from './benhNhan.routes';
import danTocRouter from './danToc.routes';
import ngheNghiepRouter from './ngheNghiep.routes';
import tinhHuyenXaRouter from './tinhHuyenXa.routes';
import tinhHuyenXa2Router from './tinhHuyenXa2.routes';
import quocGiaRouter from './quocGia.routes';
const router = Router();

// Gắn router con
router.use('/users', userRouter);
router.use('/dich-vu', dichVuRouter);
router.use('/gia-dich-vu', giaDichVuRouter);
router.use('/benh-nhan', benhNhanRouter);
router.use('/dan-toc', danTocRouter);
router.use('/nghe-nghiep', ngheNghiepRouter);
router.use('/tinh-huyen-xa', tinhHuyenXaRouter);
router.use('/tinh-huyen-xa2', tinhHuyenXa2Router);
router.use('/quoc-gia', quocGiaRouter);
export default router;