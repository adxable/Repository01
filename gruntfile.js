module.exports = function(grunt) {
  grunt.initConfig({
  // Project configuration.
    watch: {
      scripts: {
        files: ['html/*.html', 'scss/*.scss','js/*.js'],
        tasks: ['sass', 'cssmin', 'browserSync'],
        options: {
            spawn: false,
        },
      }
    },

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'sass/style.sass'
        }
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css/',
          src: ['*.css', '!*.min.css'],
          dest: 'css/',
          ext: '.min.css'
        }]
      }
    },

    uglify: {
      my_target: {
        options: {
          beautify: true
        },
        files: {
          'js/test.min.js': ['js/*.js']
        }
      },
      my_advanced_target: {
        options: {
          beautify: {
            width: 80
          }
        },
        files: {
          'js/test.min.js': ['js/*.js']
        }
      }
    },


   
    browserSync: {
      default_options: {
        bsFiles: {
          src: [
            "css/*.css",
            "sass/*sass",
            "html/*.html"
          ]       
        },
        options: {
            watchTask: true, 
            server: {
              baseDir: "./",
            }
        }
      }
    },

    uncss: {
      dist: {
        files: {
          'css/tidy.css': ['html/index.html']
        }
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'images/build/'
        }]
      }
    },
  
  });

  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  // Default task(s).
  grunt.registerTask('default', ['imagemin', 'uncss', 'uglify', 'watch']);
};