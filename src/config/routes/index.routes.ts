import { Router } from 'express';
import userRouter from './users.routes';
import dichVuRouter from './dichVu.routes';
import benhNhanRouter from './benhNhan.routes';

const router = Router();

// Gắn router con
router.use('/users', userRouter);
router.use('/dich-vu', dichVuRouter);
router.use('/benh-nhan', benhNhanRouter);

export default router;