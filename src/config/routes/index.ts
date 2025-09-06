import fs from 'fs';
import path from 'path';
import { Router } from 'express';

const router = Router();

function toKebabCase (str: string) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/_/g, '-')
    .toLowerCase();
}

function loadRoutes (basePath: string, parentPath = '') {
  fs.readdirSync(basePath).forEach((file) => {
    const fullPath = path.join(basePath, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      loadRoutes(fullPath, parentPath + '/' + file);
    } else if (file.endsWith('.routes.ts') || file.endsWith('.routes.js')) {
      const routeName = file.split('.')[0].replace('.routes', '');
      const routePath = parentPath + '/' + toKebabCase(routeName);

      const routeModule = require(fullPath);
      const route = routeModule.default || routeModule;

      if (typeof route !== 'function') {
        return;
      }

      router.use(routePath, route);
    }
  });
}

loadRoutes(__dirname);

export default router;
