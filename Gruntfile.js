module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
        server: {
            options: {
                port: 1337,
                base: 'www',
                keepalive: true,
                livereload: true
            }
        }
    },
    watch: {
        dev: {
            files: ['www/*.html', 'www/js/*.js', 'www/css/*.css'],
            tasks: [],
            options: {
                livereload: true
            }
        }
    }
  });

  // Load the plugin that provides the "uglify" task.
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  // grunt.registerTask('default', ['uglify']);

};
