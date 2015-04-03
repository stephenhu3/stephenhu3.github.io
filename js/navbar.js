function navbar() {
    $('.nav a').on('click', function() {
        if ($('.navbar-toggle').css('display') != 'none') {
            $(".navbar-toggle").trigger("click");
        }
    });
};

$(document).ready(navbar);