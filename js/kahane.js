// Define our "kahane" object, if not already defined
if ( kahane === undefined ) { var kahane = {}; }

var kahane = (function($) {

	'use strict';

	var

	// Globally available variables
	$body = $('body'),

	/* ==========================================================================
	   hamburger
	========================================================================== */
	hamburger = function() {
		$('.hamburger').click(function(){
			$(this).add('#menu, #logo').toggleClass('open');
		});
	},

	/* ==========================================================================
	   Gfycat
	========================================================================== */
	gfycat = function() {

	},

	/* ==========================================================================
	   Init
	========================================================================== */

	init = function() {
		hamburger();
		gfycat();
	};

	return {
		init:init
	};

}(jQuery));

$(function() {
	'use strict';
	kahane.init();
});
