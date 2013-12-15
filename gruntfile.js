/* global module */

module.exports = function (grunt) {
  "use strict";

  grunt.loadNpmTasks("grunt-contrib-connect")
  grunt.loadNpmTasks("grunt-contrib-csslint")
  grunt.loadNpmTasks("grunt-contrib-jshint")
  grunt.loadNpmTasks("grunt-contrib-compass")
  grunt.loadNpmTasks("grunt-contrib-watch")
  grunt.loadNpmTasks("grunt-notify")

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
      src: ["./styles/*.css"]
    },
    jshint: {
      files: [
        "Gruntfile.js",
        "scripts/maini.js"
      ],
      options: grunt.file.readJSON(".jshintrc")
    },
    compass: {
      default: {
        options: {
          sassDir: "styles/",
          cssDir: "styles/",
          outputStyle: "compressed",
          noLineComments: true
        }
      }
    },
    watch: {
      sass: {
        files: "styles/*.scss",
        tasks: ["compass", "csslint"]
      }
    }
  })

  grunt.registerTask("run", ["connect:dev"])
  grunt.registerTask("test", ["csslint", "jshint"])
}
