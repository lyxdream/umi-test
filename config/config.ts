import { defineConfig } from '@umijs/max';
import routes from './routes.config';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'Ant Design2',
  },
  routes: routes,
  npmClient: 'pnpm',
});
