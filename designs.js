// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(width, height) {
	let pixelCanvas, grid;
	pixelCanvas=$('#pixelCanvas');
	if (pixelCanvas.children().length){
		pixelCanvas.empty();

	}
	for(let y = 0; y < height; y++){

		grid += "<tr>";
		for(let z=0; z<width; z++){

			grid += "<td></td>"
		}
		grid += "</tr>";
	}
	pixelCanvas.html(grid);
	pixelCanvas.css("background-color", "#FFF");
// Your code goes here
};

$(document).ready(function(){
	$('#submit-button').click(function(event){
		let height, width;
		width = $('#input_width').val();
		height = $('#input_height').val();
		event.preventDefault();
		makeGrid(width, height);

	});
	$('#pixelCanvas').click(function(event) {
		let color = $('#colorPicker').val();
		$(event.target).css('background-color', color);
	});
});
