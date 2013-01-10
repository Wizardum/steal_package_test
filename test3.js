/**
 * Test 3
 *
 * Trying to compile with a package that depends on another package.
 * In this case the Users package depends on the Dashboard packages but it won't compile, even if we don't steal them.
 *
 * In development mode, everything works as it should.
 */

steal.packages( 'modules/auth', 'modules/users', 'modules/dashboard' );

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
			log( '<strong>all modules loaded!</strong>' );
		} );
	}
);