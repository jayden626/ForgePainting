/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.navbar-fixed-top' ),
		didScroll = false,
		changeHeaderOn = 300;

	function init() {	

		//Set navbar to shrink and opaque if page loads already scrolled
		if( window.pageYOffset > changeHeaderOn) {
			classie.add( header, 'navbar-shrink' );
			header.style.background = `rgba(40,81,144,1`;
		}
		
		window.addEventListener( 'scroll', function( event ) {
			//changing header size
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
			
			//changing header opacity
			const currentScroll = window.pageYOffset;
			const startFade = 100; //height in px when fade will startToFade
			const endFade = 300; //height when fade will stop
			if (currentScroll <= startFade) {
			    opacity = 0
			} else if (currentScroll <= endFade) {
				opacity = (currentScroll - startFade) / (endFade - startFade);
			} else {
				opacity = 1;
			}
			header.style.background = `rgba(40,81,144,${opacity})`;
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'navbar-shrink' );
		}
		else {
			classie.remove( header, 'navbar-shrink' );
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();