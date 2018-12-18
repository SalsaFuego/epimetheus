function sombreroTioInitialize() {

	// Assign sombreroTio to <div id="sombrero-tio">
		sombreroTio = document.getElementById('sombrero-tio');
		// console.log('sombreroTio:');
		// console.log(sombreroTio);

	// Use the The Window.getComputedStyle() method to return an object that reports the values of all CSS properties of sombreroTio
		var sombreroTioComputedStyle = window.getComputedStyle(sombreroTio, null);
		// console.log('sombreroTioComputedStyle:');
		// console.log(sombreroTioComputedStyle);

		// Access the 'width' property from the sombreroTioComputedStyle object and assign to sombreroTioWidthProperty
			sombreroTioWidthProperty = sombreroTioComputedStyle['width'];
			// console.log('sombreroTioWidthProperty:');
			// console.log(sombreroTioWidthProperty);

			// Use the parseInt() function to parse sombreroTioWidthProperty string argument and return an integer of the specified radix
				sombreroTioWidthProperty = parseInt(sombreroTioWidthProperty, 10);
				// console.log('sombreroTioWidthProperty:');
				// console.log(sombreroTioWidthProperty);

		// Access the 'height' property from the sombreroTioComputedStyle object and assign to sombreroTioHeightProperty
			sombreroTioHeightProperty = sombreroTioComputedStyle['height'];
			// console.log('sombreroTioHeightProperty:');
			// console.log(sombreroTioHeightProperty);

			// Use the parseInt() function to parse sombreroTioHeightProperty string argument and return an integer of the specified radix
				sombreroTioHeightProperty = parseInt(sombreroTioHeightProperty, 10);
				// console.log('sombreroTioHeightProperty:');
				// console.log(sombreroTioHeightProperty);

		// Access the 'paddingBottom' property from the sombreroTioComputedStyle object and assign to sombreroTioPaddingBottomProperty
			sombreroTioPaddingBottomProperty = sombreroTioComputedStyle['paddingBottom'];
			// console.log('sombreroTioPaddingBottomProperty:');
			// console.log(sombreroTioPaddingBottomProperty);

			// Use the parseInt() function to parse sombreroTioPaddingBottomProperty string argument and return an integer of the specified radix
				sombreroTioPaddingBottomProperty = parseInt(sombreroTioPaddingBottomProperty, 10);
				// console.log('sombreroTioPaddingBottomProperty:');
				// console.log(sombreroTioPaddingBottomProperty);

	// Assign salsaFuegoLogo to <div id="salsa-fuego-logo">
		salsaFuegoLogo = document.getElementById('salsa-fuego-logo');
		// console.log('salsaFuegoLogo:');
		// console.log(salsaFuegoLogo);

	// Use the The Window.getComputedStyle() method to return an object that reports the values of all CSS properties of salsaFuegoLogo
		var salsaFuegoLogoComputedStyle = window.getComputedStyle(salsaFuegoLogo, null);
		// console.log('salsaFuegoLogoComputedStyle:');
		// console.log(salsaFuegoLogoComputedStyle);

		// Access the 'width' property from the salsaFuegoLogoComputedStyle object object and assign to salsaFuegoLogoWidthProperty
			salsaFuegoLogoWidthProperty = salsaFuegoLogoComputedStyle['width'];
			// console.log('salsaFuegoLogoWidthProperty:');
			// console.log(salsaFuegoLogoWidthProperty);

			// Use the parseInt() function to parse salsaFuegoLogoWidthProperty string argument and return an integer of the specified radix
				salsaFuegoLogoWidthProperty = parseInt(salsaFuegoLogoWidthProperty, 10);
				// console.log('salsaFuegoLogoWidthProperty:');
				// console.log(salsaFuegoLogoWidthProperty);

		// Access the 'height' property from the salsaFuegoLogoComputedStyle object object and assign to salsaFuegoLogoHeightProperty
			salsaFuegoLogoHeightProperty = salsaFuegoLogoComputedStyle['height'];
			// console.log('salsaFuegoLogoHeightProperty:');
			// console.log(salsaFuegoLogoHeightProperty);

			// Use the parseInt() function to parse salsaFuegoLogoHeightProperty string argument and return an integer of the specified radix
				salsaFuegoLogoHeightProperty = parseInt(salsaFuegoLogoHeightProperty, 10);
				// console.log('salsaFuegoLogoHeightProperty:');
				// console.log(salsaFuegoLogoHeightProperty);

	// Declare yOffset variable and assigne to value of window.pageYOffset
		var yOffset = window.pageYOffset;
		// console.log('yOffset:');
		// console.log(yOffset);

	// Adjust styles of #sombrero-tio div based on value of yOffset variable
		if (yOffset > sombreroTioWidthProperty) {
			sombreroTio.style.height = '0';
			sombreroTio.style.width = '0';
			sombreroTio.style.visibility = 'hidden';
			sombreroTio.style.paddingBottom = '0';
		} else {
			sombreroTio.style.height = 'auto';
			sombreroTio.style.width = ((sombreroTioWidthProperty - yOffset) + 'px');
			sombreroTio.style.visibility = 'visible';
			sombreroTio.style.paddingBottom = '3px';
		}

}



function sombreroTioSeesaw() {

	// Declare yOffset variable and assigne to value of window.pageYOffset
		var yOffset = window.pageYOffset;
		// console.log('yOffset:');
		// console.log(yOffset);

	// Adjust styles of #sombrero-tio div based on value of yOffset variable
		if (yOffset < sombreroTioWidthProperty) {
			sombreroTio.style.width = ((sombreroTioWidthProperty - yOffset) + 'px');
			sombreroTio.style.visibility = 'visible';
			sombreroTio.style.paddingBottom = '3px';
		} else {
			sombreroTio.style.width = '0';
			sombreroTio.style.visibility = 'hidden';
			sombreroTio.style.paddingBottom = '0';
		}

}



function fontSize() {

	// Declare yOffset variable and assigne to value of window.pageYOffset
		var yOffset = window.pageYOffset;
		// console.log('yOffset:');
		// console.log(yOffset);

		var navItem = document.getElementsByClassName('nav-item');
		console.log('navItem:');
		console.log(navItem);

		for (i = 0; i < navItem.length; i++) {

			if (sombreroTioWidthProperty - yOffset > 0) {
				navItem[i].style.fontSize = '1.125rem';
			} else {
				navItem[i].style.fontSize = '1rem';
			}

		}

}
