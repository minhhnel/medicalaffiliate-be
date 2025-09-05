# ---- Build stage ----
    FROM node:20-alpine as builder
    WORKDIR /app
    COPY package*.json ./
    RUN npm install
    COPY . .
    RUN npm run build
    
    # ---- Run stage ----
    FROM node:20-alpine
    WORKDIR /app
    COPY --from=builder /app/dist ./dist
    COPY package*.json ./
    RUN npm install --omit=dev
    CMD ["node", "dist/server.js"]
    