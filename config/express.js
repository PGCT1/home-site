module.exports.express = {
	customMiddleware:function(app,defaultMiddleware,sails){
		app.locals.pretty = true;
	}
};
