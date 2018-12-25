require('browser-sync').init({
  port: 3000,
  server: {
    baseDir: 'public'
  },
  ui: {
    port: 8080,
    weinre: {
      port: 9090
    }
  },
  watch: true
});
