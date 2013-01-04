//steal/js test1/scripts/compress.js

load("steal/rhino/rhino.js");
steal('steal/build','steal/build/scripts','steal/build/styles',function(){
	steal.build('scripts/build.html',{to: 'bin'});
});
