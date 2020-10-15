$(document).ready(function() {
    var isOpen = false;
    $('.menu').click(function() {
        if (!isOpen) {
            $('.menubtn').addClass('open');
            $('.links').css('display', 'block');
            $('.menutext').text("Close");
            isOpen = true;
        } else {
            $('.menubtn').removeClass('open');
            $('.links').css('display', 'none');
            $('.menutext').text("Menu");
            isOpen = false;
        }
    });
    $('.main,footer').click(function() {
        if (isOpen) {
            //console.log("in right click ");
            $('.menubtn').removeClass('open');
            $('.links').css('display', 'none');
            $('.menutext').text("Menu");
            isOpen = false;
        }
    });
});

var notmenu = document.querySelector(".body:not(.menu)");