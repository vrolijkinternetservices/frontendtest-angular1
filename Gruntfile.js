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
            files: ['www/*.html', 'www/js/*.js', 'www/css/*.css']
        },
        copy: {
            build_vendor_js : {
                files: [
                    {
                        src: '<%= vendor_files.js %>',
                        dest: 'build/scripts',
                        cwd: '.',
                        expand: true
                    }

                ]
            },
            build_vendor_css: {
                files: [
                    {
                        src: '<%= vendor_files.css %>',
                        dest: 'build/css',
                        cwd: '.',
                        expand: true
                    }
                ]
            },
            build_index: {
                files: [
                    {
                        src: 'index.html',
                        dest: 'build',
                        cwd: 'src',
                        expand: true
                    }
                ]
            },
            
            build_json: {
                files:[
                    {
                        src: 'data.json',
                        dest: 'build',
                        cwd: 'src',
                        expand: true
                    }
                ]
            },
            
            build_fonts: {
                        src:  '<%= src_files.fonts %>',
                        dest: 'build/fonts',
                        cwd: '.',
                        expand: true              
            }
        },
        index: {
            build: {
                src: [
                    '<%= vendor_files.js %>',
                    'src/app/app.js',
                    '<%= vendor_files.css %>'
                ]
            }
        },
        html2js: {

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

    /**
    * A utility function to get all app CSS sources.
    */
    function filterForCSS ( files ) {
        return files.filter( function ( file ) {
            return file.match( /\.css$/ );
        });
    }

    // Load the plugin that provides the "uglify" task.
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-html2js');

    // Default task(s).
    grunt.registerTask('build', function(buildtype) {
        switch (buildtype) {
            case 'dev':
                grunt.task.run([
                    'clean', 
                    'html2js', 
                    'jshint', 
                    'concat', 
                    'copy:build_vendor_js', 
                    'copy:build_vendor_css', 
                    'copy:build_json',
                    'copy:build_fonts',
                    'sass', 
                    'index'
                ]);
                break;
            case 'stage':
                console.log("staging");
                grunt.task.run();
                break;
            case 'prod':
                console.log("production");
                grunt.task.run();
                break;
            default:
                console.log("pass dev, staging or production");
        }
    });

    // process index.html
    grunt.registerMultiTask('index', 'Process index.html' ,function() {

        var jsFiles = filterForJS(this.filesSrc).map(function(file){
            return 'scripts/' + file.replace('src/app/', '');
            // return 'scripts/' + file;
        });

        var cssFiles = filterForCSS(this.filesSrc).map(function(file){
            return 'css/' + file;
        });

        var lrUrl = ['//localhost:35729/livereload.js'];

        grunt.file.copy('src/index.html', 'build/index.html', {
            process: function(contents, path) {
                return grunt.template.process(contents, {
                    data: {
                        scripts: jsFiles,
                        css: cssFiles,
                        livereload: lrUrl
                    }
                });
            }
        });

    });
  // Default task(s).
  // grunt.registerTask('default', ['uglify']);

};
