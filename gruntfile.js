module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/script.js',
        dest: 'js/script.min.js'
      }
    }, // Uglify ends
    sass: { // Task
      dist: { // Target
        options: { // Target options
          style: 'expanded'
        },
        files: { // Dictionary of files
          'css/custom.css': 'sass/style.scss', // 'destination': 'source'
        }
      }
    }, // Sass ends
    watch: {
      scripts: {
        files: ['js/script.js', 'sass/style.scss', 'index.html', 'gruntfile.js'],
        tasks: ['uglify', 'sass','jshint'],
        options: {
          spawn: false,
        },
      },
    },
    csslint: {
      strict: {
        options: {
          import: 2
        },
        src: ['css/stylesheet.css']
      },
      lax: {
        options: {
          import: false
        },
        src: ['css/style.css']
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'js/script.js']
    }

  }); // init Config Ends

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-jshint');


  // Default task(s).
  grunt.registerTask('default', ['sass', 'watch']);
  grunt.registerTask('prod', ['uglify']);
  grunt.registerTask('cssvalidate', ['csslint', 'jshint']);
  grunt.registerTask('jslint', ['jshint']);

};
