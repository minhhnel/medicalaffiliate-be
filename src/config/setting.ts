import dotenv from 'dotenv';
dotenv.config();

export const config = {
  domain: process.env.DOMAIN || "",
  domain2: process.env.DOMAIN2 || "",
  merchantId: process.env.X_MERCHANT_ID || "",
  keySecret: process.env.KEYSECRET || ""
};