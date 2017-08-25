module.exports = function(grunt) {
  grunt.initConfig({
  // Project configuration.
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
    
    watch: {
      scripts: {
          files: ['*.html', 'scss/**/*.scss','js/**/*.js'],
          tasks: ['sass'],
          options: {
              spawn: false,
          },
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
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'browserSync', 'watch']);
  //wylaczylem 'imagemin' bo kompresuje zdjecia przy kazdej komendzie GRUNT
};