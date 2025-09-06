import { config } from '@config/setting';
import { ApiBase } from './base.controller';

export class TinhHuyenXaController extends ApiBase {
  constructor () {
    super(config.domain2!, config.merchantId!);
  }

  async getTinhHuyenXaList () {
    const result = await this.get('/tinh-huyen-xa');
    return result;
  }
}

export default TinhHuyenXaController;
