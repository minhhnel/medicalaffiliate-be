import { config } from '@config/setting';
import { ApiBase } from './base.controller';

export class DanTocController extends ApiBase {
  constructor () {
    super(config.domain2!, config.merchantId!);
  }

  async getDanTocList () {
    const result = await this.get('/dan-toc');
    return result;
  }
}

export default DanTocController;
