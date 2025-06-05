/** @type {import('@remix-run/dev').AppConfig} */
export default {
  server: false,
  appDirectory: 'app',
  assetsBuildDirectory: 'public/build',
  publicPath: '/build/',
  ignoredRouteFiles: ['**/.*'],
  future: {
    v2_routeConvention: true,
  },
};
