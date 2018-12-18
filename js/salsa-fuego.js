window.onload = function() {

	// shrinking-navbar-effect.js
	// ##########################

		// Define sombreroTio and assign value of ''
			var sombreroTio = '';

		// Define salsaFuegoLogo and assign value of ''
			var salsaFuegoLogo = '';

		// Define sombreroTioWidthProperty and assign value of ''
			var sombreroTioWidthProperty = '';

		// Define sombreroTioHeightProperty and assign value of ''
			var sombreroTioHeightProperty = '';

		// Define sombreroTioPaddingBottomProperty and assign value of ''
			var sombreroTioPaddingBottomProperty = '';

		// Define salsaFuegoLogoWidthProperty and assign value of ''
			var salsaFuegoLogoWidthProperty = '';

		// Define salsaFuegoLogoHeightProperty and assign value of ''
			var salsaFuegoLogoHeightProperty = '';

		// Call the sombreroTioInitialize() function
			sombreroTioInitialize()

	// torn-paper-effect.js
	// ####################

		// Define tornPaperSvg variable and assign to an empty array
			var tornPaperSvg = [];
			// console.log('tornPaperSvg:');
			// console.log(tornPaperSvg);

		// Define tornPaperBackgroundImage variable and assign to an empty array
			var tornPaperBackgroundImage = [];
			// console.log('tornPaperBackgroundImage:');
			// console.log(tornPaperBackgroundImage);

		// Call tearPaper() function
			tearPaper()

		// Call sizeDiv() function
			sizeDiv()

	// spotlight-content.js
	// ####################

		// Call sizeDiv() function
			spotlightContent()

}



window.onresize = function() {

	// Call retearPaper() function
		retearPaper()

	// Call sizeDiv() function
		sizeDiv()

}



window.onscroll = function() {

	// Call the sombreroTioSeesaw() function
		sombreroTioSeesaw()

	// Call the fontSize() function
		fontSize()

}