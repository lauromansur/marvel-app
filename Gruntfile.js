module.exports = function (grunt) {

    /* Project configuration - http://gruntjs.com/configuring-tasks */
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ['dist/*'],
        copy: {
            dist: { files: [{expand: true, cwd: 'app/', src: [
                './*.{html,ico}', 'img/**/*', 'css/**/*.css', 'js/**/*', '!js/**/*_test.js',
                'lib/**/*.js', 'lib/**/*.css'], dest: 'dist/'}]
            }
        },
        sass: {
            dist: { files: [{ src: 'app/css/app.scss', dest: 'app/css/app.css' }] }
        },
        uglify: {
            dist: { files: [{expand: true, cwd: 'dist/', src: ['js/**/*.js'], dest: 'dist/'}] }
        },
        cssmin: {
            dist: { files: [{expand: true, cwd: 'dist/', src: ['**/*.css'], dest: 'dist/'}] }
        },
        htmlmin: {
            options: { caseSensitive: true, removeComments: true, collapseWhitespace: true },
            dist: { files: [{expand: true, cwd: 'dist/', src: ['./*.html', 'js/**/*.html'], dest: 'dist/'}] }
        },
        cacheBust: {
            options: { baseDir: 'dist', assets: ['js/**', '!js/img/**'], deleteOriginals: true, length: 8 },
            dist: { files: [{expand: true, cwd: 'dist/', src: ['**/*.{js,css,html}']}] }
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
    grunt.loadNpmTasks('grunt-cache-bust');
    grunt.loadNpmTasks('grunt-contrib-watch');

    /* Tasks */
    grunt.registerTask('default', ['clean', 'sass', 'copy', 'process']);
    grunt.registerTask('process', ['uglify', 'cssmin', 'htmlmin', 'cacheBust']);
};