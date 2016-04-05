module.exports = function(grunt) {

  var globalConfig = {
     scssUrl: 'https://assets.brand.ai/acme-demo/_style-params.scss',
     iconsUrl: 'https://assets.brand.ai/acme-demo/icons-zip',
     imagesUrl: 'https://assets.brand.ai/acme-demo/images-zip'
  };

  grunt.initConfig({
    globalConfig: globalConfig,
    //process sass to css
    sass: {
      dist: {
        files: {
          'css/style.css': 'scss/style.scss'
        }
      }
    },
    // Download external resources
    'curl-dir': {
      'styles': {
        src: [ '<%= globalConfig.scssUrl %>'],
        dest: 'scss' // the sass source folder
      }
    },
    curl: {
      icons: {
        src: [ '<%= globalConfig.iconsUrl %>'],
        dest: 'tmp/icons.zip'
      },
      images: {
        src: [ '<%= globalConfig.imagesUrl %>'],
        dest: 'tmp/images.zip'
      }
    },
    clean: {
      icons: {
        src: [ 'tmp/' ]
      },
      images: {
        src: [ 'tmp/' ]
      }
    },
    // Unzip resources
    unzip: {
      icons: {
        src:  'tmp/icons.zip',
        dest: 'icons' //icons destintion folder
      },
      images: {
        src:  'tmp/images.zip',
        dest: 'images' //images destintion folder
      }
    }

  });

  grunt.loadNpmTasks('grunt-curl');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-zip');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('styles', 'curl-dir:styles');
  grunt.registerTask('scss', 'sass');
  grunt.registerTask('unzip-icons', 'curl:icons unzip:icons clean:icons');
  grunt.registerTask('unzip-images', 'curl:images unzip:images clean:images');
};
