import { Router } from 'express';
import userRouter from './users.routes';
import dichVuRouter from './dichVu.routes';

const router = Router();

// Gắn router con
router.use('/users', userRouter);
router.use('/dich-vu', dichVuRouter);

export default router;