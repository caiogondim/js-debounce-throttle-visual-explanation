/* global module */

module.exports = function (grunt) {
  "use strict";

  grunt.loadNpmTasks("grunt-contrib-connect")
  grunt.loadNpmTasks("grunt-contrib-csslint")
  grunt.loadNpmTasks("grunt-contrib-jshint")

  grunt.initConfig({
    connect: {
      dev: {
        options: {
          port: 3000,
          base: ".",
          keepalive: true
        }
      }
    },
    csslint: {
      options: {
        "universal-selector": false,
        "box-sizing": false
      },
      src: ["./*.css"]
    },
    jshint: {
      files: [
        "Gruntfile.js",
        "scripts/maini.js"
      ],
      options: grunt.file.readJSON(".jshintrc")
    },
  })

  grunt.registerTask("run", ["connect:dev"])
  grunt.registerTask("test", ["csslint", "jshint"])
}
