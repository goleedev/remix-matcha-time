export default {
  future: {
    v2_routeConvention: true,
  },
  server: {
    runtime: 'cloudflare-pages',
    moduleFormat: 'esm',
    buildPath: 'functions/[[path]].js',
  },
};
