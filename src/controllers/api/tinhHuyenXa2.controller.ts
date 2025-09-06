import { config } from '@config/setting';
import { ApiBase } from './base.controller';

export class TinhHuyenXa2Controller extends ApiBase {
  constructor () {
    super(config.domain2!, config.merchantId!);
  }

  async getTinhHuyenXa2List () {
    const result = await this.get('/tinh-huyen-xa2');
    return result;
  }
}

export default TinhHuyenXa2Controller;
