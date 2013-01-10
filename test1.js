/**
 * Test 1
 *
 * Auth and Users modules are loaded but the callback function is not called.
 */

steal.packages( 'modules/auth', 'modules/users' );

var log;

steal(
	'jquery',
	'steal/less',
	function(){
		log = function( message ){
			$( '<p>{1}</p>'.replace( '{1}', message ) ).appendTo( '#content' );
		};
	}
).then(
	'./main.less',
	'components/comp4',

	function() {
		log( 'program loaded!' );

		steal( 'modules/users', 'modules/auth', function( ){
			log( '<strong>ALL MODULES LOADED!</strong>' );
		} );
	}
);