module.exports = function (grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-csslint');

  grunt.initConfig({
    connect: {
      dev: {
        options: {
          port: 3000,
          base: '.',
          keepalive: true
        }
      }
    },
    csslint: {
      options: {
        'universal-selector': false,
        'box-sizing': false
      },
      src: ['./*.css']
    }
  });

  grunt.registerTask('run', ['connect:dev']);
  grunt.registerTask('test', ['csslint']);
};
