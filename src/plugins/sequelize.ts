import fs from 'fs';
import path from 'path';
import { Sequelize } from 'sequelize';

// Chọn môi trường
const NODE_ENV = process.env.NODE_ENV || 'development';

// Lấy config tương ứng
const config: any = require(path.join(__dirname, '../config/database'))[NODE_ENV];

// Tạo Sequelize instance
const sequelize = config.url
  ? new Sequelize(config.url, config)
  : new Sequelize(config.database, config.username, config.password, config);

// Load, initialize và associate models ngay trong 1 lần
const models: any[] = [];
const modelsDir = path.join(__dirname, '../models');

fs.readdirSync(modelsDir)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== 'index.js') && (file.endsWith('.js') || file.endsWith('.ts')))
  .forEach((file) => {
    const modelModule = require(path.join(modelsDir, file));
    const model = modelModule.default;
    if (model) {
      // Initialize model nếu có
      if (typeof model.initialize === 'function') {
        model.initialize(sequelize);
      }
      models.push(model);
    }
  });

// Thiết lập associations cho tất cả model
models.forEach((model) => {
  if (typeof model.associate === 'function') {
    model.associate();
  }
});

export default sequelize;
export { sequelize, models };
