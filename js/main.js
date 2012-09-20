requirejs.config({
	// Defines the base URL for Javascript files
	// The URL is relative to the main index.html page
	baseUrl: 'js/'
	
	// Defines aliases for common Javascript files/modules
	, paths: {

		// RequireJS plugins
		  text: 'libs/requirejs/require-text.min'
		, css: 'libs/requirejs/require-css.min'

		// Core libraries
		, modernizr: [
			  '//cdnjs.cloudflare.com/ajax/libs/modernizr/2.6.2/modernizr.min'
			, 'libs/modernizr/modernizr-2.6.2.min'
		]
		, jquery: [
			  '//ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min'
			, 'libs/jquery/jquery-1.8.1.min'
		]
		, jqueryExt: 'libs/jquery/jquery-ext'
		, underscore: [
			  '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.3.3/underscore-min'
			, 'libs/underscore/underscore-1.3.3.min'
		]
		, backbone: [
			  '//cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.2/backbone-min'
			, 'libs/backbone/backbone-0.9.2.min'
		]
		, backboneFix: 'libs/backbone/backbone-fix'

		// TODO: Uncomments the following to set alias for additional libraries
		// , jqueryui: [
		// 	  '//ajax.googleapis.com/ajax/libs/jqueryui/1.8.23/jquery-ui.min'
		// 	, 'libs/jquery/jqueryui/jquery-ui-1.8.23.min'
		// ]
		// , bootstrap: [
		// 	  '//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.1.1/bootstrap.min'
		// 	, 'libs/bootstrap/bootstrap-2.1.1.min'
		// ]
		// , handlebars: [
		// 	  '//cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.0.0.beta6/handlebars.min'
		// 	, 'libs/handlebars/handlebars-1.0.0.beta.6.min'
		// ]
		// END TODO
	}

	// Defines dependencies (effectively sets the loading orders)
	, shim: {
		  'backbone': ['jquery', 'underscore']
		, 'backboneFix': ['backbone']
		, 'jqueryExt': ['jquery']
		, 'router': [
			  'modernizr'
			, 'jquery'
			, 'jqueryExt'
			, 'backbone'
			, 'backboneFix'			

			// TODO: Uncomments the following to includes loading additional libraries
			// , 'jqueryui'
			// , 'bootstrap'
			// , 'handlebars'
			// END TODO
		]

		// TODO: Uncomments the following to set jQuery dependency for jQuery UI
		// , 'jqueryui': ['jquery']
		// END TODO

	}
});

// Activates router module
require([ 'router' ], function () {});
