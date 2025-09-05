import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import https from 'https';

export class ApiBase {
  protected axiosInstance: AxiosInstance;
  protected merchantId: string;

  constructor(baseURL: string, merchantId: string) {
    this.merchantId = merchantId;
    this.axiosInstance = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
      httpsAgent: new https.Agent({ rejectUnauthorized: false }),
    });
  }

  /**
   * GET request với x-sign, x-merchant-id, x-timestamp
   * @param path Path API (ví dụ: /dich-vu-tree)
   * @param timestamp Optional timestamp để tạo x-sign
   */
  protected async get<T>(
    path: string,
    params?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const headers = {
        ...params,
        'x-merchant-id': this.merchantId,
        ...(config?.headers || {}),
      };
      const res = await this.axiosInstance.get<T>(path, { ...config, headers, });
      return res.data;
    } catch (err: any) {
      console.error(`GET ${path} error:`, err.response?.data || err.message);
      throw err;
    }
  }
  
}
