module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'css/style.css': 'scss/style.scss'
        }
      }
    },
    'curl-dir': {
      'styles': {
        src: ['https://assets.brand.ai/acme-demo/_style-params.scss'],
        dest: 'scss' // the sass source folder
      }
    }
  });

  grunt.loadNpmTasks('grunt-curl');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('styles', ['curl-dir:styles']);
};
