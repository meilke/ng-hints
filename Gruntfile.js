module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    karma: {
      options: {
        preprocessors: {
          'src/**/*.js': 'coverage'
        },
        reporters: ['coverage', 'progress'],
        coverageReporter: {
          reporters: [
            {type: 'html', dir: 'coverage/', file : 'index.html'},
            {type: 'text-summary'}
          ]
        }
      },
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },
    jslint: {
      code: {
        src: ['src/**/*.js', 'tests/**/*.js', 'Gruntfile.js'],
        directives: {
          sloppy: true,
          quotmark : 'single',
          node: true,
          browser: true,
          indent: 2,
          vars: true,
          unused: true,
          nomen: true,
          predef: [
            'angular',
            'it',
            'module',
            'inject',
            'assert',
            'describe',
            'beforeEach',
            'afterEach'
          ]
        }
      }
    }
  });

  grunt.registerTask('default', [
    'jslint',
    'karma'
  ]);
};