require.config({
	baseUrl:'js',
	shim:{
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ['jquery', 'underscore'],
			exports: 'Backbone'
		}
	},
	paths: {
		'underscore' :'libs/underscore-min',
		'backbone' :'libs/backbone-min',
		'jquery' :'libs/jquery.min'
	}
});

require(["app"], function(App){
	App.initialize();
});
