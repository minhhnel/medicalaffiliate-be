# Sử dụng Node.js LTS
FROM node:18

# Tạo thư mục làm việc
WORKDIR /app

# Copy package.json trước để tối ưu cache
COPY package*.json ./

# Cài dependencies
RUN npm install

# Copy toàn bộ source code
COPY . .

# Biến môi trường (có thể override khi chạy container)
ENV NODE_ENV=production
ENV PORT=3000

# Build nếu có (nếu project dùng TypeScript thì build trước)
RUN npm run build-ts

# Mở cổng
EXPOSE 3000

# Chạy server
CMD ["npm", "run", "start"]
