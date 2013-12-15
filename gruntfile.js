/* global module */

module.exports = function (grunt) {
  "use strict";

  grunt.loadNpmTasks("grunt-contrib-connect")
  grunt.loadNpmTasks("grunt-contrib-csslint")
  grunt.loadNpmTasks("grunt-contrib-jshint")
  grunt.loadNpmTasks("grunt-contrib-compass")
  grunt.loadNpmTasks("grunt-contrib-watch")
  grunt.loadNpmTasks("grunt-notify")
  grunt.loadNpmTasks("grunt-concurrent")

  grunt.initConfig({
    connect: {
      default: {
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
    },
    concurrent: {
      default: {
        tasks: ["watch:sass", "connect"],
        options: {
          logConcurrentOutput: true
        }
      }
    }
  })

  grunt.registerTask("run", ["concurrent"])
  grunt.registerTask("test", ["csslint", "jshint"])
  grunt.registerTask("default", "run")
}
