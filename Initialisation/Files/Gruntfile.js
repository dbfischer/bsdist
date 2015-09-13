module.exports = function(grunt) {

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);
    //require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        paths: {
            bower: 'bower_components',
            lib: 'lib',
            theme: 'theme'
        },

        copy: {
            toLib: {
                files: [
                    /* bootstrap */
                    {
                        expand: true,
                        src: ['<%= paths.bower %>/bootstrap/dist/css/bootstrap.css'],
                        dest: '<%= paths.lib %>/bootstrap/css/',
                        flatten: true
                    },
                    {
                        expand: true,
                        cwd: '<%= paths.bower %>/bootstrap-sass-official/assets/stylesheets/',
                        src: ['**'],
                        dest: '<%= paths.lib %>/bootstrap/scss/'
                    },
                    {
                        expand: true,
                        src: ['<%= paths.bower %>/bootstrap/dist/fonts/*'],
                        dest: '<%= paths.lib %>/bootstrap/fonts/',
                        flatten: true
                    },
                    {
                        expand: true,
                        src: ['<%= paths.bower %>/bootstrap/dist/js/bootstrap.js'],
                        dest: '<%= paths.lib %>/bootstrap/js/',
                        flatten: true
                    },

                    /* prettyPhoto */
                    {
                        expand: true,
                        src: ['<%= paths.bower %>/jquery-prettyPhoto/css/prettyPhoto.css'],
                        dest: '<%= paths.lib %>/jquery-prettyPhoto/css/',
                        flatten: true
                    },
                    {
                        expand: true,
                        cwd: '<%= paths.bower %>/jquery-prettyPhoto/images/prettyPhoto/',
                        src: ['**'],
                        dest: '<%= paths.lib %>/jquery-prettyPhoto/images/prettyPhoto/'
                    },
                    {
                        expand: true,
                        src: ['<%= paths.bower %>/jquery-prettyPhoto/js/jquery.prettyPhoto.js'],
                        dest: '<%= paths.lib %>/jquery-prettyPhoto/js/',
                        flatten: true
                    }
                ]
            },
            toTheme: {
                files: [
                    /* jquery */
                    {
                        expand: true,
                        src: ['<%= paths.bower %>/jquery/dist/jquery.min.js'],
                        dest: '<%= paths.theme %>/js/',
                        flatten: true
                    },
                    /* bootstrap fonts */
                    {
                        expand: true,
                        src: ['<%= paths.lib %>/bootstrap/fonts/*'],
                        dest: '<%= paths.theme %>/fonts/',
                        flatten: true
                    },
                    /* prettyPhoto images */
                    {
                        expand: true,
                        cwd: '<%= paths.lib %>/jquery-prettyPhoto/images/prettyPhoto/',
                        src: ['**'],
                        dest: '<%= paths.theme %>/images/prettyPhoto/'
                    }
                ]
            },
            fontawesome: {
                files: [
                    {
                        expand: true,
                        src: ['<%= paths.bower %>/font-awesome/css/font-awesome.min.css'],
                        dest: '<%= paths.lib %>/font-awesome/css/',
                        flatten: true
                    },
                    {
                        expand: true,
                        src: ['<%= paths.bower %>/font-awesome/fonts/*'],
                        dest: '<%= paths.lib %>/font-awesome/fonts/',
                        flatten: true
                    },
                    {
                        expand: true,
                        src: ['<%= paths.bower %>/font-awesome/fonts/*'],
                        dest: '<%= paths.theme %>/fonts/',
                        flatten: true
                    }
                ]
            }
        },

        sass: {
            options: {
                bundleExec: false,
                debugInfo: false,
                lineNumbers: false,
                style: 'compact',
                unixNewlines: true
            },
            lib: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= paths.lib %>/bootstrap/scss/',
                        src: ['bootstrap.scss'],
                        dest: '<%= paths.lib %>/bootstrap/css/',
                        ext: '.css'
                    }
                ]
            },
            theme: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= paths.theme %>/scss',
                        src: ['*.scss'],
                        dest: '<%= paths.theme %>/css',
                        ext: '.css'
                    }
                ]
            },
            rte: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= paths.theme %>/scss/rte',
                        src: ['*.scss'],
                        dest: '<%= paths.theme %>/css/rte',
                        ext: '.css'
                    }
                ]
            },
            fontawesome: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= paths.lib %>/font-awesome/scss/',
                        src: ['font-awesome.scss'],
                        dest: '<%= paths.lib %>/font-awesome/css/',
                        ext: '.css'
                    }
                ]
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            lib: {
                src: ['<%= paths.lib %>/bootstrap/js/bootstrap.js','<%= paths.lib %>/jquery-prettyPhoto/js/jquery.prettyPhoto.js'],
                dest: '<%= paths.theme %>/js/_libs.js'
            },
            theme: {
                src: ['<%= paths.theme %>/js/includes/*.js'],
                dest: '<%= paths.theme %>/js/_includes.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            footerJs: {
                src: ['<%= paths.theme %>/js/_libs.js','<%= paths.theme %>/js/_includes.js'],
                dest: '<%= paths.theme %>/js/footer.min.js'
            }
        },
        cssmin: {
            theme: {
                files: [
                    {
                        '<%= paths.theme %>/css/all.min.css': ['<%= paths.lib %>/bootstrap/css/bootstrap.css', '<%= paths.lib %>/jquery-prettyPhoto/css/prettyPhoto.css', 'theme/css/styles.css']
                    },
                    {
                        '<%= paths.theme %>/css/rte/content.min.css': ['<%= paths.theme %>/css/rte/content.css']
                    }
                ]
            }
        }
    });

    grunt.registerTask('default', [
        'sass:lib',
        'sass:theme',
        'sass:rte',
        //'sass:fontawesome',
        'concat',
        'uglify',
        'cssmin'
    ]);

    grunt.registerTask('init', [
        'copy:toLib',
        'copy:toTheme',
        //'copy:fontawesome'
    ]);

};