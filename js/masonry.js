function masonry() {
	// Stick with this lower overhead method
	var container = document.querySelector('#masonry');
	var msnry;
	// initialize Masonry after all images have loaded
	imagesLoaded( container, function() {
	  	var msnry = new Masonry( container, {
		  // options

		  itemSelector: '.col-xs-12.col-sm-12.col-md-6.col-lg-6'
		});
	});

	/*
	Using using the below code will reload masonry after all the images have loaded
	this adds an additional animation at the cost of performance


	var container = document.querySelector('#container');

	var msnry = new Masonry( container, {
	  // options
	   itemSelector: '.col-xs-6.col-sm-6.col-md-6.col-lg-6'
	});

	imagesLoaded( container, function() {
	  msnry.layout();
	});
	*/

};

$(document).ready(masonry);