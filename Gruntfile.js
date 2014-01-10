module.exports = function(grunt) {

    // Configuration goes here
    grunt.initConfig({
        clean: {
            build: ["dist"],
            cleantmp: ["tmp"]
        },
        copy: {
            build: {
                files: [
                    {
                        cwd: 'src',
                        src: ['**','!less/**','!js/**','!*.html','!textcontent/**'],
                        dest: 'dist',
                        expand: true
                    },
                    {
                        cwd: 'src',                                            
                        src: ['*.html'],
                        dest: 'tmp',
                        expand: true
                    },
                    {
                        cwd: 'bower_components/bootstrap/dist',
                        src: ['fonts/**'],
                        dest: 'dist',
                        expand: true
                    }
                ]
            }
        },
        md2html: {
            build: {
                options: {
                    markedOptions: {
                        gfm: false,
                        langPrefix: 'code-'
                    }
                },
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: 'textcontent/*.md',
                    dest: 'tmp',
                    ext: '.html'
                }]
            }
        },
        includereplace: {
            dist: {
                cwd: 'tmp',
                src: '*.html',
                dest: 'dist',
                expand: true
            }
        },
        recess: {
            build: {
                src: grunt.file.read('./gruntconfig/lessorder').replace(/^\s+|\s+$/g, '').split(/\r?\n/),
                dest: 'dist/css/combined.css',
                options: {
                    compile: true,
                    compress: true
                }
            }
        },
        uglify: {

            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'dist/js/combined.min.js': grunt.file.read('./gruntconfig/jsorder').replace(/^\s+|\s+$/g, '').split(/\r?\n/)
                }
            }

        },
        watch: {
            scripts: {
                files: grunt.file.read('./gruntconfig/jsorder').replace(/^\s+|\s+$/g, '').split(/\r?\n/),
                tasks: ['uglify'],
                options: {
                },
            },
            stylesheets: {
                files: grunt.file.read('./gruntconfig/lessorder').replace(/^\s+|\s+$/g, '').split(/\r?\n/),
                tasks: ['recess'],
                options: {
                },
            },
            html: {
                files: ['src/**','!less/**','!js/**'],
                tasks: ['clean:cleantmp','copy','md2html','includereplace','clean:cleantmp'],
                options: {
                },
            }
        }

    });

    // Load plugins here
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-recess');
    grunt.loadNpmTasks('grunt-include-replace');
    grunt.loadNpmTasks('grunt-md2html');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Define your tasks here

    grunt.registerTask(
        'build', 
        'Compiles all of the assets and copies the files to the build directory.', 
        ['clean','copy','md2html','includereplace','recess','uglify','clean:cleantmp']
    );
};
