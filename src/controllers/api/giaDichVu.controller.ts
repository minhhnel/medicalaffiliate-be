import { config } from '@config/setting';
import { ApiBase } from './base.controller';

export class GiaDichVuController extends ApiBase {
  constructor () {
    super(config.domain!, config.merchantId!);
  }

  async getGiaDichVuList () {
    const result = await this.get('/gia-dichvu');
    return result;
  }
}

export default GiaDichVuController;
