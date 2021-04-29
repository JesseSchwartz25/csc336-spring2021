// color the rectangle and move them randomlyi
// Today's goal :
//   - rectangles randomly are colored when the color button is clicked
//   - when the select is changed the number of rectangles changes to match it

// in the next class we will make the move function work

// here is a road map of the functions you need to implement.

(function() {
	"use strict";

	window.onload = function() {
		var colorButton = document.getElementById("color");
		colorButton.onclick = colorIt;

		var moveButton = document.getElementById("move");
		moveButton.onclick = moveIt;

		var numSelect = document.getElementById("count");
		numSelect.onchange = createRectangles;

		createRectangles();
		colorIt();
		// moveIt();
	};

	// creates the number of rectangles specified in the select.
	function createRectangles() {
		document.getElementById("rectanglearea").innerHTML = "";
		var count = document.getElementById("count").value;
		// finish the functions here

		let buildArea = document.getElementById('rectanglearea');

		for(let i = 0; i < count; i++){
			let rect = document.createElement('div');
			rect.classList.add('rectangle');
			buildArea.appendChild(rect);
			rect.onclick = rect.remove;
		}

	}

   	// Randomly color all of the rectangles
    function colorIt() {
    	// your code goes here
    	//you might find the following code snippts useful
    	//var r = Math.floor(Math.random() * 256);
			console.log(count.value);

			let buildArea = document.getElementById('rectanglearea');

			for(let i = 0; i < count.value; i++){
				let red =  Math.floor(Math.random() * 256);
				red = red.toString(16);
				let green =  Math.floor(Math.random() * 256);
				green = green.toString(16);
				let blue =  Math.floor(Math.random() * 256);
				blue = blue.toString(16);


				// console.log(red + green + blue);

				buildArea.children[i].style.backgroundColor = '#' + red + green + blue;

				buildArea.children[i].id = i;
			}

    }

    // // WARNING: incomplete
	// Randomly position all the rectangles
	function moveIt() {
		var rects = document.querySelectorAll("#rectanglearea .rectangle");
		var area = document.getElementById("rectanglearea");
		for(var i = 0; i < rects.length; i++) {
			let width = Math.random() * 650;
			let height = Math.random() * 450;

			rects[i].classList.add('movable');
			rects[i].style.marginLeft = width + 'px';
			rects[i].style.marginTop = height + 'px';
			rects[i].style.opacity = 80 + '%';

			console.log(width, height);
		}
	}



})();
