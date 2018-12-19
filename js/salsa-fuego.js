window.onload = function() {

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

}



window.onresize = function() {

	// Call retearPaper() function
		retearPaper()

	// Call sizeDiv() function
		sizeDiv()

}
