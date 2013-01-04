
steal.config( {
	amd: true,
	map: {
		'*': {
			'jquery/jquery.js': 'jquery',
			'can': 'core/can',
			'core/can/util/util.js': 'core/can/util/jquery/jquery.js',
			'ext': 'core/extensions'
		}
	},
	paths: {
		'jquery': 'core/can/lib/jquery.1.8.3.js'
	},
	shim: {
		jquery: {
			exports: 'jQuery'
		}
	},
	ext: {
		mustache: 'core/can/view/mustache/mustache.js'
	}
} );