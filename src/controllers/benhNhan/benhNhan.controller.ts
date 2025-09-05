import { ApiBase } from "../api/base.controller";
import { config } from "@config/setting";

export class BenhNhanController extends ApiBase {
  constructor() {
    super(config.domain, config.merchantId);
  }

  async dangKyKham(body: any, Ma_BN: string) {
    const result = await this.post('/dangky-kcb', body,{ 'Ma-BN': Ma_BN || "" } );
    return result;
  }
}