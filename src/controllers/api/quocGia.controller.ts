import { config } from '@config/setting';
import { ApiBase } from './base.controller';

export class QuocGiaController extends ApiBase {
  constructor () {
    super(config.domain2!, config.merchantId!);
  }

  async getQuocGiaList () {
    const result = await this.get('/quoc-gia');
    return result;
  }
}

export default QuocGiaController;
