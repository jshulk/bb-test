define(["backbone"], function(Backbone){


	var main = Backbone.View.extend({});

	_.extend(main.prototype, {
		debug: function(msg){
			console.log(msg);
		}
	});

	return main;
});