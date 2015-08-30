module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                separator: ';'
            },
            js: {
                src: ['theme/js/*.js', '!theme/js/bsdist.js', '!theme/js/bsdist.min.js'],
                dest: 'theme/js/bsdist.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'theme/js/bsdist.js',
                dest: 'theme/js/bsdist.min.js'
            }
        },
        less: {
            compileCustom: {
                src: 'theme/css/less/custom.less',
                dest: 'theme/css/custom.css'
            },
            compileContent: {
                src: 'theme/css/less/content.less',
                dest: 'theme/css/content.css'
            },
            compileRTEContent: {
                src: 'theme/css/rte/less/content.less',
                dest: 'theme/css/rte/content.css'
            }
        },
        cssmin: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'theme/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'theme/css',
                    ext: '.min.css'
                }]
            }/*,
            rteContent:{
                src: 'theme/css/rte/content.css',
                dest: 'theme/css/rte/content.min.css'
            }*/
        }
    });

    // These plugins provide necessary tasks.
    require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });
    grunt.registerTask('default', ['concat', 'uglify', 'less', 'cssmin']);

};