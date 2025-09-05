import { ApiBase } from "../api/base.controller";
import { config } from "@config/setting";

export class BenhNhanController extends ApiBase {
  constructor() {
    super(config.domain, config.merchantId);
  }

  async dangKyKham(body: any) {
    const result = await this.post('/dangky-kcb', body, { 'MA_BN': body.THONG_TIN_BENH_NHAN.MA_BN || "" } );
    return result;
  }
}