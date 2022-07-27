import { Settings as LayoutSettings } from '@ant-design/pro-layout';

export default {
  headerTheme: 'dark',
  navTheme: 'light',
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  headerHeight: 54,
  splitMenus: true,
  fixedHeader: true,
  autoHideHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  menu: {
    locale: true,
  },
  title: false,
  pwa: false,
  iconfontUrl: '',
} as LayoutSettings & {
  pwa: boolean;
  serveUrlMap: {
    dev: string;
    test: string;
  };
};
