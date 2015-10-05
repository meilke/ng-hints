module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      'bower_components/angular/angular.min.js',
      'bower_components/angular-sanitize/angular-sanitize.min.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'src/**/*.js',
      'tests/*-tests.js'
    ],
    exclude: [
    ],
    preprocessors: {
    },
    reporters: [
      'progress',
      'karma-coverage'
    ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: false
  });
};
