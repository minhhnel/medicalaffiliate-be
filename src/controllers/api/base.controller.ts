import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import https from "https";
import { Crypt } from "@jobs/crypt.processor";
import { config } from "@config/setting";

interface ApiRequestOptions extends AxiosRequestConfig {
  skipAuth?: boolean;
}

interface ApiHeaders {
  "x-merchant-id": string;
  "x-timestamp": string;
  "x-sign": string;
  [key: string]: any;
}

export class ApiBase {
  protected axiosInstance: AxiosInstance;
  protected merchantId: string;
  protected crypt: Crypt;

  constructor(baseURL: string, merchantId: string) {
    this.merchantId = merchantId;
    this.crypt = new Crypt(config.keySecret);

    this.axiosInstance = axios.create({
      baseURL,
      headers: { "Content-Type": "application/json" },
      httpsAgent: new https.Agent({ rejectUnauthorized: false }),
    });
  }

  private generateAuthHeaders(data?: Record<string, any>): ApiHeaders {
    const timestamp = this.crypt.getTimestamp();
    const valuesForSign = [
      this.merchantId,
      timestamp,
      ...(data ? Object.keys(data).sort().map(k => data[k]) : []),
    ];
    const xSign = this.crypt.generateXSign(valuesForSign);

    return {
      "x-merchant-id": this.merchantId,
      "x-timestamp": timestamp,
      "x-sign": xSign,
    };
  }

  private mergeHeaders(defaults: Record<string, any>, custom?: Record<string, any>) {
    return { ...defaults, ...(custom || {}) };
  }

  private handleError(error: any, method: string, path: string) {
    console.error(`${method} ${path} error:`, error.response?.data || error.message);
    return error;
  }

  protected async get<T>(
    path: string,
    params?: Record<string, any>,
    options: ApiRequestOptions = {}
  ): Promise<T> {
    const headers = this.generateAuthHeaders(params);
    try {
      const res = await this.axiosInstance.get<T>(path, {
        ...options,
        headers: this.mergeHeaders(headers, options.headers),
        params,
      });
      return res.data;
    } catch (err: any) {
      throw this.handleError(err, "GET", path);
    }
  }

  protected async post<T>(
    path: string,
    body?: Record<string, any>,
    params?: Record<string, any>,
    options: ApiRequestOptions = {}
  ): Promise<T> {
    const { skipAuth = false, ...config } = options;
    const headers = skipAuth ? config.headers : this.mergeHeaders(this.generateAuthHeaders(params), config.headers);

    try {
      const res = await this.axiosInstance.post<T>(path, body, { ...config, headers });
      return res.data;
    } catch (err: any) {
      throw this.handleError(err, "POST", path);
    }
  }
}
