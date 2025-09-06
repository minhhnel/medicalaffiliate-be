import { config } from '@config/setting';
import { ApiBase } from './base.controller';

export class DichVuController extends ApiBase {
  constructor () {
    super(config.domain!, config.merchantId!);
  }

  async getDichVuTree () {
    const result = await this.get('/dich-vu-tree');
    return result;
  }
}

export default DichVuController;
