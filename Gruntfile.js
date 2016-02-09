module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'css/style.css': 'scss/style.scss'
        }
      }
    },
    downloadfile: {
      files: [
        {
          url: 'https://assets.brand.ai/acme-demo/_style-params.scss',
          dest: 'scss'
        }
      ]
    }
  });

  grunt.loadNpmTasks('grunt-downloadfile');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('styles', ['downloadfile']);
};
