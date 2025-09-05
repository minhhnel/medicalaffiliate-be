import dotenv from 'dotenv';
dotenv.config();

export const config = {
  domain: process.env.DOMAIN,
  merchantId: process.env.X_MERCHANT_ID,
  keySecret: process.env.KEYSECRET
};