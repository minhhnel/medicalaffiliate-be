import { Request, Response, NextFunction } from 'express';

// Extend Express Request interface
declare global {
  namespace Express {
    interface Request {
      customHeaders?: Record<string, string>;
    }
  }
}

/**
 * Middleware tự động lấy các header tùy biến dựa trên prefix
 * @param prefixPrefix tiền tố header cần lấy, ví dụ 'x-' để lấy tất cả x-*
 */
export function autoExtractHeadersMiddleware (prefix: string = '') {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const extractedHeaders: Record<string, string> = {};

      // Lấy tất cả header có prefix
      Object.keys(req.headers).forEach((key) => {
        if (key.toLowerCase().startsWith(prefix.toLowerCase())) {
          const value = req.headers[key];
          if (typeof value === 'string') extractedHeaders[key] = value;
          else if (Array.isArray(value)) extractedHeaders[key] = value.join(','); // handle multi-value headers
        }
      });

      req.customHeaders = extractedHeaders;
      next();
    } catch (err: any) {
      console.error(err);
      return res.status(500).json({ message: err.message });
    }
  };
}
