function sizeDiv() {

	// Add all <div class="torn-paper-background-image"> elements to tornPaperBackgroundImage
		tornPaperBackgroundImage = document.getElementsByClassName('torn-paper-background-image');
		// console.log('tornPaperBackgroundImage:');
		// console.log(tornPaperBackgroundImage);

	// Loop through tornPaperBackgroundImage and {{do stuff...}}
		for (i = 0; i < tornPaperBackgroundImage.length; i++) {

			// Use the The Window.getComputedStyle() method to return an object that reports the values of all CSS properties of tornPaperBackgroundImage[i]
				var computedStyleObject = window.getComputedStyle(tornPaperBackgroundImage[i], null);
				// console.log('computedStyleObject:');
				// console.log(computedStyleObject);

			// Access the 'backgroundImage' property from the computedStyleObject object
				var backgroundImageProperty = computedStyleObject['backgroundImage'];
				// console.log('backgroundImageProperty:');
				// console.log(backgroundImageProperty);

			// Define extractUrlRegEx and assign to regular expression that extracts urls from all possible declaration formats
				var extractUrlRegEx = /(?:\(['"]?)(.*?)(?:['"]?\))/;
				// console.log('extractUrlRegEx:');
				// console.log(extractUrlRegEx);

			// Define extractUrl execute extractUrlRegEx on (backgroundImageProperty)[1]
				// NOTE: This method returns the matched text if it finds a match, otherwise it returns null
				var extractUrl = extractUrlRegEx.exec(backgroundImageProperty)[1];
				// console.log('extractUrl:');
				// console.log(extractUrl);

			// Define newImage and use the Image() constructor to create a new HTMLImageElement instance
				var newImage = new Image();
				// console.log('newImage:');
				// console.log(newImage);

			// Use value of extractUrl to define src of newImage
				newImage.src = extractUrl;
				// console.log('newImage:');
				// console.log(newImage);

			// Define newImageNaturalWidth variable and assign value of newImage.naturalWidth
				var newImageNaturalWidth =  newImage.naturalWidth;
				// console.log('newImageNaturalWidth:');
				// console.log(newImageNaturalWidth);

			// Define newImageNaturalHeight variable and assign value of newImage.naturalHeight
				var newImageNaturalHeight =  newImage.naturalHeight;
				// console.log('newImageNaturalHeight:');
				// console.log(newImageNaturalHeight);

			// Define newImageHeightToWidth variable and assign value of newImageNaturalHeight / newImageNaturalWidth
				var newImageHeightToWidth = newImageNaturalHeight / newImageNaturalWidth;
				// console.log('newImageHeightToWidth:');
				// console.log(newImageHeightToWidth);

			// Use the .getBoundingClientRect() method to return the size of tornPaperBackgroundImage[i] and its position relative to the viewport (left, top, right, bottom, x, y, width, and height properties)
				var rect = tornPaperBackgroundImage[i].getBoundingClientRect();
				var rectWidth = rect.width;
				// console.log('rectWidth:');
				// console.log(rectWidth);

			// Define calculatedHeight variable and assign value of newImageHeightToWidth * rectWidth
				var calculatedHeight = newImageHeightToWidth * rectWidth;
				// console.log('calculatedHeight:');
				// console.log(calculatedHeight);

			// Assign value of calculatedHeight to tornPaperBackgroundImage[i].style.height
				tornPaperBackgroundImage[i].style.height = (calculatedHeight + 'px');
				// console.log('tornPaperBackgroundImage[i].style.height:');
				// console.log(tornPaperBackgroundImage[i].style.height);

		}

}