module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less:{
            development:{
                files:{
                    './build/style/main.css':'./src/style/main.less'
                }
            },
            production:{
                options:{
                    compress: true
                },
                files:{
                    './dist/style/main.min.css':'./src/style/main.less'
                }
            }
        },
        watch:{
            less:{
                files:['src/style/**/*.less'],
                tasks: ['less:development']
            }
        },
        replace:{
            dev:{
                options:{
                    patterns: [
                        {
                            match: 'ENDERECO-CSS',
                            replacement: 'style/main.css'
                        }
                    ]
                },
                files:[
                    {
                        expand: true,
                        flatten: true,
                        src:['./src/index.html'],
                        dest: 'build/'
                    }
                ]
            }
        },
        htmlmin:{
            dist: {
                options:{
                    removeComents: true,
                    collapseWhitespace: true
                },
                files:{
                    'prebuild/index.html': './src/index.html'
                }
            }
        }
    })


    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production']);
}