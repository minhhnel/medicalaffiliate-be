import 'module-alias/register';
import path from 'path';
import express from 'express';
import compression from 'compression';
import cors from 'cors';
import sequelize from '@plugins/sequelize';
import { setupSwagger } from '@config/swagger';
import routes from '@config/routes';

process.env.TZ = 'Asia/Bangkok';
const port = process.env.PORT || 3000;
const app = express();

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
app.use(cors());

// API routes
app.use('/api/v1', routes);

// Swagger docs
setupSwagger(app, Number(port));

// 404 handler
app.use((req, res) => {
  res.status(404).send({ url: `${req.path} not found` });
});

// Start server
sequelize.authenticate().then(() => {
  app.listen(port, () => {
    console.log(`🚀 App is running at http://localhost:${port}`);
    console.log(`📖 Swagger docs at http://localhost:${port}/api-docs`);
    console.log('  Press CTRL-C to stop\n');
  });
});
