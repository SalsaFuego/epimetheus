function spotlightContent() {

	// Add all <div class="spotlight-content"> elements to spotlightContent
		spotlightContent = document.getElementsByClassName('spotlight-content');
		// console.log('spotlightContent:' + spotlightContent);

	// Loop through spotlightContent and {{do stuff...}}
		for (i = 0; i < spotlightContent.length; i++) {

			// Use the childNodes property to return a collection of a node's child nodes as a NodeList object
				var spotlightContentChildNodes = spotlightContent[i].childNodes;
				// console.log('spotlightContentChildNodes:');
				// console.log(spotlightContentChildNodes);

				// Define heightProperty and assign value of ''
					var heightProperty = '';

				// Loop through spotlightContentChildNodes and {{do stuff...}}
					for (j = 0; j < spotlightContentChildNodes.length; j++) {

						if (spotlightContentChildNodes[j].className == 'col-auto') {

							// Use the childNodes property to return a collection of a node's child nodes as a NodeList object
								var spotlightContentGrandchildNodes = spotlightContentChildNodes[j].childNodes;

								// Loop through spotlightContentGrandchildNodes and {{do stuff...}}
									for (k = 0; k < spotlightContentGrandchildNodes.length; k++) {

										if (spotlightContentGrandchildNodes[k].tagName == 'IMG') {

											// Use the The Window.getComputedStyle() method to return an object that reports the values of all CSS properties of spotlightContentGrandchildNodes[k]
												var computedStyleObject = window.getComputedStyle(spotlightContentGrandchildNodes[k], null);
												console.log('computedStyleObject:');
												console.log(computedStyleObject);

											// Access the 'height' property from the computedStyleObject object
												heightProperty = computedStyleObject['height'];
												console.log('heightProperty:' + heightProperty);

										}

									}

						}

						if (spotlightContentChildNodes[j].className == 'col-4') {

							// Assign value of heightProperty to spotlightContentChildNodes[j].style.height
								spotlightContentChildNodes[j].style.height = heightProperty;
								// console.log('spotlightContentChildNodes[j].style.height:' + spotlightContentChildNodes[j].style.height);

						}

					}

		}

}