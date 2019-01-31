/*jslint node: true */

"use strict";

const sass = require('node-sass');
module.exports = function (grunt) {
  
  grunt.loadNpmTasks("grunt-postcss");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-pug");
  grunt.loadNpmTasks("grunt-sass");

  grunt.initConfig({
    sass: {
      options: {
        implementation: sass,
        sourceMap: true
      },
      style: {
        files: {
          "dist/styles/style.css": "src/styles/style.scss"
        }
      }
    },

    postcss: {
      style: {
        options: {
          processors: [
            require("autoprefixer")()
          ]
        },
        src: "dist/styles/*.css"
      }
    },
    
    pug: {
      compile: {
        options: {
          pretty: true,
          data: {
            debug: false
          }
        },
        files: {
          "dist/index.html": ["src/pages/*.pug"]
        }
      }
    },
    
    watch: {
      options: {
        spawn: false
      },
      sass: {
        files: ["src/styles/**/*.scss"],
        tasks: ["sass", "postcss"]
      },
      pug: {
        files: ["src/pages/**/*.pug"],
        tasks: ["pug"]
      }
    }
  });

  grunt.registerTask("default", "watch");
};
