define(["backbone", "views/BaseView"], function(Backbone, BaseView){

	return BaseView.extend({

		initialize: function(){
			this.debug("view initialized");
		}
	});
});