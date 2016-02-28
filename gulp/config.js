var sourceFiles = './app';
var publicAssets = './build';

module.exports = {
  sourceFiles: sourceFiles,
  publicAssets: publicAssets,
  styles: {
    src: sourceFiles + '/**/*.scss',
    dest: publicAssets + '/assets',
    outputName: 'adobe-weather.css',
  },
  templates: {
    src: sourceFiles + '/**/*.template.html',
    dest: sourceFiles + '/templates',
    templateCacheOptions: {
      moduleSystem: 'Browserify',
      standalone: true,
      transformUrl: function (url) {
        return url.substring(url.lastIndexOf('/') + 1);
      },
    },
  },
  scripts: {
    jshint: {
      src: sourceFiles + '/**/*.js',
    },
    bundleConfigs: {
      entries: sourceFiles + '/app.js',
      dest: publicAssets + '/assets',
      outputName: 'adobe-weather.js',
    },
  },
  browserSync: {
    proxy: 'localhost:4000',
    open: false,
  },
  html: {
    src: sourceFiles + '/index.html',
    dest: publicAssets,
  },
};
