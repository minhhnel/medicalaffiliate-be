import { ApiBase } from './base.controller';
import { config } from '@config/setting';

export class DichVuController extends ApiBase {
  constructor() {
    super(config.domain!, config.merchantId!);
  }

  async getDichVuTree(headers: Record<string, string>) {
    this.validate(headers['x-sign'], headers['x-timestamp']);
    const result = await this.get('/dich-vu-tree', { 'x-sign': headers['x-sign'], 'x-timestamp': headers['x-timestamp'] });
    return result;
  }

  private validate(xSign?: string, timestamp?: string) {
    if (!xSign || !timestamp) {
      throw new Error('x-sign or x-timestamp is missing');
    }
  }
}

export default DichVuController;
