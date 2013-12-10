module.exports = function (grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.initConfig({
    connect: {
      dev: {
        options: {
          port: 3000,
          base: '.',
          keepalive: true
        }
      }
    }
  });

  grunt.registerTask('run', ['connect:dev']);
};
