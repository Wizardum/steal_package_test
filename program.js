
steal.packages( 'modules/auth', 'modules/users' );

steal(
	'jquery.1.7.1.js'
).then(
	'components/comp4',
	function() {
		console.log('program loaded!');
		console.log('---------------');

		var $div = $("<div>Click</div>").appendTo("body");
		$div.on("click", function() { 
			console.log("click");
			steal('modules/auth', 'modules/users');
		});
	}
);