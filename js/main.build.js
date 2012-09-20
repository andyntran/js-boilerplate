// NOTE: Use the following command to run this build file in the application folder (js-boilerplate)
// node js/libs/requirejs/r-2.0.6.js -o js/main.build.js

({
      appDir: "../"
    , baseUrl: "./js/"
    
    // TODO: Changes "dir" value to preferred folder
    , dir: "../../js-boilerplate-build"
    // END TODO

    , paths: {
          text: 'libs/requirejs/require-text.min'
        , css: 'libs/requirejs/require-css.min'
        , modernizr: 'libs/modernizr/modernizr-2.6.2.min'
        , jquery: 'libs/jquery/jquery-1.8.1.min'
        , jqueryExt: 'libs/jquery/jquery-ext'
        , underscore: 'libs/underscore/underscore-1.3.3.min'
        , backbone: 'libs/backbone/backbone-0.9.2.min'
        , backboneFix: 'libs/backbone/backbone-fix'

        // TODO: Uncomments the following to set alias for additional libraries
        // , jqueryui: 'libs/jquery/jqueryui/jquery-ui-1.8.23.min'
        // , bootstrap: 'libs/bootstrap/bootstrap-2.1.1.min'
        // , handlebars: 'libs/handlebars/handlebars-1.0.0.beta.6.min'
        // END TODO
    }
    , modules: [{ name: "main" }]
})