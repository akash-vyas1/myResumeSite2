// console.log("Loading file");

$(document).ready(function () {
    $('#openHome').click(function () { 
        $('section').css("display","none");
        $('.home').css("display","flex");
        console.log("Education panel");
    });
    $('#openEducation').click(function () { 
        $('section').css("display","none");
        $('.education').css("display","unset");
        console.log("Education panel");
    });
});