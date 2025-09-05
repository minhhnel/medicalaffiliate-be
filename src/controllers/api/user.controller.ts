import { Request, Response } from 'express';

export const getUsers = (req: Request, res: Response) => {
  res.json([
    { id: 1, name: 'Nguyen Van A' },
    { id: 2, name: 'Tran Thi B' },
  ]);
};

export const getUserById = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ id, name: `User ${id}` });
};

export const createUser = (req: Request, res: Response) => {
  const { name } = req.body;
  res.status(201).json({ id: Date.now(), name });
};
