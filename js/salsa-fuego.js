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

document.addEventListener('DOMContentLoaded', () => {
	// Add all <section class="full-width"> elements to fullWidthSections
	let fullWidthSections = document.querySelectorAll('section.full-width');
	console.log(fullWidthSections);

	// Loop through fullWidthSections and {{do stuff...}}
	for (i = 0; i < fullWidthSections.length; i++) {

		if (i % 4 == 0) {
			fullWidthSections[i].style.backgroundColor = '#c5342f';
		}
		else if (i % 4 == 1) {
			fullWidthSections[i].style.backgroundColor = '#f47b3d';
		}
		else if (i % 4 == 2) {
			fullWidthSections[i].style.backgroundColor = '#5b9d7a';
		}
		else {
			fullWidthSections[i].style.backgroundColor = '#ffc63e';
		}

	};
});
