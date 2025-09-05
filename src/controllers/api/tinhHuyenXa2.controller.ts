import { ApiBase } from './base.controller';
import { config } from '@config/setting';

export class TinhHuyenXa2Controller extends ApiBase {
  constructor() {
    super(config.domain2!, config.merchantId!);
  }

  async getTinhHuyenXa2List() {
    const result = await this.get('/tinh-huyen-xa2'); 
    return result;
  }
}

export default TinhHuyenXa2Controller;
