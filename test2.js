/**
 * Test 2
 *
 * Tried using without any .then( ) calls.
 * The less file is not compiled and the modules are not even loaded in the production build, even though the files are
 * compiled as packages.
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

		steal(
			'main.less',
			'components/comp4',
			function( ){
				log( 'program loaded!' );

				steal( 'modules/users', 'modules/auth', function( ){
					log( '<strong>all modules loaded!</strong>' );
				} );
			}
		);
	}
);