module.exports = function (grunt) {

    /* Project configuration - http://gruntjs.com/configuring-tasks */
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ['docs/*'],
        copy: {
            dist: { files: [{expand: true, cwd: 'app/', src: [
                './*.{html,ico}', 'img/**/*', 'css/**/*.css', 'js/**/*', '!js/**/*_test.js',
                'bower_components/**/*.js', 'bower_components/**/*.css'], dest: 'docs/'}]
            }
        },
        sass: {
            dist: { files: [{ src: 'app/css/app.scss', dest: 'app/css/app.css' }] }
        },
        uglify: {
            dist: { files: [{expand: true, cwd: 'docs/', src: ['js/**/*.js'], dest: 'docs/'}] }
        },
        cssmin: {
            dist: { files: [{expand: true, cwd: 'docs/', src: ['**/*.css'], dest: 'docs/'}] }
        },
        htmlmin: {
            options: { caseSensitive: true, removeComments: true, collapseWhitespace: true },
            dist: { files: [{expand: true, cwd: 'docs/', src: ['./*.html', 'js/**/*.html'], dest: 'docs/'}] }
        },
        cacheBust: {
            options: { baseDir: 'dist', assets: ['src/**', '!src/img/**'], deleteOriginals: true, length: 8 },
            dist: { files: [{expand: true, cwd: 'docs/', src: ['**/*.{js,css,html}']}] }
        },
        watch: {
            sass: { files: ['app/css/**/*.scss'], tasks: ['sass'], options: {spawn: false} }
        }
    });

    /* Load the plugins that provides the tasks */
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
//    grunt.loadNpmTasks('grunt-cache-bust');
    grunt.loadNpmTasks('grunt-contrib-watch');

    /* Tasks */
    grunt.registerTask('default', ['clean', 'sass', 'copy', 'process']);
    grunt.registerTask('process', ['uglify', 'cssmin', 'htmlmin'/*, 'cacheBust'*/]);
};