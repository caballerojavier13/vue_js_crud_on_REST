function path(path, source) {
    if (typeof(source) === 'undefined') {
        path = './bower_components/' + path;
    }
    if (source == 'assets') {
        path = './assets/' + path;
    }
    return path;
}

var elixir = require('laravel-elixir');
require('laravel-elixir-vueify');

elixir.config.sourcemaps = false;
elixir.config.assetsPath = 'assets';
elixir.config.publicPath = 'static';

elixir(function(mix) {
    mix
       

        // Scripts
        .browserify('app.js', 'static/js/app.js')

        // Script merging
        //.scripts([
        // 'static/js/app.js'
       // ], 'static/js/app.js', './')

        // Versioning
        //.version(['static/js/drf_vue.js', 'static/css/drf_vue.css']);
});