import path from 'path';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';
import glob from 'glob';

export function setupSwagger (app: Express, port: number) {
  const ext = 'ts';
  const patterns = [
    path.resolve(process.cwd(), `src/config/routes/**/*.routes.${ext}`),
  ];

  const files: string[] = patterns.flatMap((pattern) => glob.sync(pattern));
  const options: swaggerJSDoc.Options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'HIS API',
        version: '1.0.0',
        description: 'API documentation with Swagger',
      },
      servers: [
        {
          url: `http://localhost:${port}/api/v1`,
        },
      ],
    },
    apis: files,
  };

  const swaggerSpec = swaggerJSDoc(options);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
