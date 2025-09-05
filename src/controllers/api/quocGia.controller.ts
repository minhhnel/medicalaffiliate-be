import { ApiBase } from './base.controller';
import { config } from '@config/setting';

export class QuocGiaController extends ApiBase {
  constructor() {
    super(config.domain2!, config.merchantId!);
  }

  async getQuocGiaList() {
    const result = await this.get('/quoc-gia'); 
    return result;
  }
}

export default QuocGiaController;
