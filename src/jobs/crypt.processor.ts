import crypto from 'crypto';
import { config } from '@config/setting';

export class Crypt {
  private securityKey: string;

  constructor (securityKey: string) {
    this.securityKey = securityKey;
  }

  /**
   * Sinh chữ ký HMAC-SHA256 từ danh sách giá trị
   * @param values Mảng giá trị để ghép
   * @param separator Ký tự phân tách, mặc định là "|"
   * @returns Chữ ký HMAC-SHA256 dạng hex
   */
  generateXSign (values: Array<string | number>): string {
    const dataStr = values.map(String).join('|');
    const hmac = crypto.createHmac('sha256', this.securityKey);
    hmac.update(dataStr);
    return hmac.digest('hex');
  }

  getTimestamp (): string {
    return Date.now().toString();
  }
}
