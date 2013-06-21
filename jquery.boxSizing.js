(function($, undefined){
	
	$.support.boxSizing = ('boxSizing' in document.createElement('div').style) && (document.documentMode === undefined || document.documentMode > 7);
	
	$.fn.boxSizing = function(options){
		
		var I = this,
			o = $.extend({}, arguments.callee.defaults, options);
		
		if($.support.boxSizing) return; //If box-sizing is supported, don't do anything.
		
		//Use a queue to add behaviors separately, so they don't hold up the rest of the page.
		var q = [],
			clearQueue = function(){
				for(var i=0; i<q.length; i++){
					clearTimeout(q[i]);
				}
			},
			queue = function(fn){
				q.push(setTimeout(fn, 0));
			},
			size = function(){
				clearQueue();
				I.each(function(){
					var el = this;					
					queue(function(){
						var $el = $(el),
							width = $el.css('width'),// || $el.css('min-width') || $el.css('max-width'),
							height = $el.css('height');// || $el.css('min-height') || $el.css('max-height');
						if(width || height){
							el.addBehavior(o.htcPath);	
						}
					});
				});	
			};
			
		size();
		
	};
	
	$.fn.boxSizing.defaults = {
		htcPath: '/boxsizing.htc'		
	};
	
})(jQuery);