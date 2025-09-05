// hmacFile.ts
import { readFile } from 'fs/promises';
import { createHmac } from 'crypto';

/**
 * Tính HMAC-SHA256 của một file
 * @param filePath Đường dẫn đến file
 * @param secretKey Khóa bí mật
 * @returns Promise<string> - HMAC dưới dạng hex
 */
export async function hmacFile(filePath: string, secretKey: string): Promise<string> {
    try {
        const fileContent = await readFile(filePath);
        const hmac = createHmac('sha256', secretKey);
        hmac.update(fileContent);
        return hmac.digest('hex');
    } catch (err) {
        throw new Error(`${(err as Error).message}`);
    }
}

