var fade = function() {
    $('#portrait-overlay').hover(function() {
        $(this).stop().fadeTo(150, 1);
    }, function() {
        $(this).stop().fadeTo(150, 0);
    });
}

$(document).ready(fade);