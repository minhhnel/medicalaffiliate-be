import { Router } from 'express';
import { getUsers, getUserById, createUser } from '@controllers/api/user.controller';

const router = Router();

/**
 * @openapi
 * /users:
 *   get:
 *     summary: Get list of users
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', getUsers);

/**
 * @openapi
 * /users/{id}:
 *   get:
 *     summary: Get user by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/:id', getUserById);

/**
 * @openapi
 * /users:
 *   post:
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/', createUser);

export default router;
