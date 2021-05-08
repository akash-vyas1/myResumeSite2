// console.log("Loading file");

$(document).ready(function () {
    $('#openHome').click(function () { 
        $('section').css("display","none");
        $('.home').css("display","flex");
        console.log("Home page");
    });
    $('#openEducation').click(function () { 
        $('section').css("display","none");
        $('.education').css("display","unset");
        console.log("Education panel");
    });
    $('#openCertificates').click(function () { 
        $('section').css("display","none");
        $('.certificates').css("display","unset");
        console.log("Certificate panel");
    });
});