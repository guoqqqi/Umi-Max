import { defineConfig } from '@umijs/max';

import defaultSettings from './defaultSettings';
import routes from './route';

const { REACT_APP_ENV } = process.env;

export default defineConfig({
  hash: true,
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  dva: {},
  locale: {
    default: 'zh-CN',
    baseSeparator: '-',
  },
  define: {
    REACT_APP_ENV: REACT_APP_ENV || false,
  },
  mfsu: {},
  layout: {
    title: 'Umi Max',
  },
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  routes,
  npmClient: 'pnpm',
});
