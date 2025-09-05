import { ApiBase } from "../api/base.controller";
import { config } from "@config/setting";

export class BenhNhanController extends ApiBase {
  constructor() {
    super(config.domain, config.merchantId);
  }

  async getBenhNhan(
    SO_GTTT: string,
    LOAI_GTTT: string = "CCCD",
    DIEN_THOAI?: string,
    MA_THE_BHYT?: string
  ) {
    const params = Object.fromEntries(
      Object.entries({ SO_GTTT, LOAI_GTTT, DIEN_THOAI, MA_THE_BHYT })
        .filter(([_, v]) => v !== undefined)
    ) as Record<string, string>;
      
    const queryString = new URLSearchParams(params).toString();
    const result = await this.get(`/benhnhan?${queryString}`, params);
    return result;
  }
  

  async dangKyKham(body: any) {
    const result = await this.post('/dangky-kcb', body, { 'MA_BN': body.THONG_TIN_BENH_NHAN.MA_BN || "" } );
    return result;
  }
}