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
    $('#openProject').click(function () { 
        $('section').css("display","none");
        $('.project').css("display","unset");
        console.log("Project panel");
    });
    $('#openTechSkills').click(function () { 
        $('section').css("display","none");
        $('.techSkills').css("display","unset");
        console.log("Technical skills panel");
    });
    $('#openCompProg').click(function () { 
        $('section').css("display","none");
        $('.compProg').css("display","unset");
        console.log("Competitive Programming panel");
    });
});