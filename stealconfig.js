
steal.config( {
	amd: true,
	map: {
		'*': {
			'jquery/jquery.js': 'jquery'
		}
	},
	paths: {
		'jquery': 'components/jquery/jquery.js'
	},
	shim: {
		jquery: {
			exports: 'jQuery'
		}
	},
	ext: {

	}
} );