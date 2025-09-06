import { config } from '@config/setting';
import { ApiBase } from './base.controller';

export class NgheNghiepController extends ApiBase {
  constructor () {
    super(config.domain!, config.merchantId!); // baseURL đã chứa /api/Kiosk
  }

  async getNgheNghiepList () {
    const result = await this.get('/nghe-nghiep'); // chỉ cần path /nghe-nghiep
    return result;
  }
}

export default NgheNghiepController;
