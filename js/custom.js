var masonry = function() {
    // Stick with this lower overhead method
    var container = document.querySelector('#masonry');
    var msnry;
    // Initialize Masonry after all images have loaded
    imagesLoaded(container, function() {
        var msnry = new Masonry(container, {
            // Masonry options
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

var disableAnchor = function() {
    $('.header-links').click(function(event) {
        // This will prevent the default action of the anchor
        event.preventDefault();
    });
}


var navbar = function() {
    $('.nav a').on('click', function() {
        if ($('.navbar-toggle').css('display') != 'none') {
            $(".navbar-toggle").trigger("click");
        }
    });
};

var fade = function() {
    $('#portrait-overlay').hover(function() {
        $(this).stop().fadeTo(150, 1);
    }, function() {
        $(this).stop().fadeTo(150, 0);
    });
}

window.smoothScroll = function(target) {
    var scrollContainer = target;
    // Find scroll container
    do { 
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
 	// Find the top of target relatively to the container
    do {
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    var scroll = function(c, a, b, i) {
            i++;
            if (i > 30) return;
            c.scrollTop = a + (b - a) / 30 * i;
            setTimeout(function() {
                scroll(c, a, b, i);
            }, 20);
        }
    // Start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

$(document).ready(function() {
    masonry();
    disableAnchor();
    navbar();
    fade();
});