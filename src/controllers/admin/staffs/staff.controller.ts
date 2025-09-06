import { Request, Response } from 'express';
import Staff from '@/models/staffs';
import { sendError, sendSuccess } from '@/libs/response';
import { InternalError } from '@/libs/errors';

class StaffController {
  public static async getStaff (req: Request, res: Response) {
    try {
      const result = await Staff.findAll();
      return sendSuccess(res, result);
    } catch (error) {
      return sendError(res, 500, InternalError, error as Error);
    }
  }
}

export default StaffController;
