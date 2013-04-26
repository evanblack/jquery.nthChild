;(function ($) {

	$.fn.nthChild = function(options) {

		/**
		* cssClasses {String} - The CSS classes to apply to the nth child elements
		* tags {Array} - The names of tags that are allowed to receive the class name
		*/
		var defaults = {
			cssClasses:['first','second','third','fourth','fifth','sixth','seventh','eighth','ninth','tenth','eleventh','twelfth'],
			tags:['div', 'li', 'th', 'tr', 'td']
		};

		options = $.extend(defaults, options);

		return this.each(function () {

			var $el = $(this),
				$children = $el.children();

			if($children.length) {
				var resetVal = $el.data("reset");
				var resetIndex = 0;
				$children.each(function(i){
					if(resetVal){
						if(resetIndex == resetVal){
							resetIndex = 0;
						}
						$(this).addClass(options.cssClasses[resetIndex]);
						resetIndex++;
					} else {
						$(this).addClass(options.cssClasses[i]);
					}
				});

			}

		}); // return

	};

})(jQuery);