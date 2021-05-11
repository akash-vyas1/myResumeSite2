

$(document).ready(function () {
    // var elements = document.querySelectorAll(".all .allskills .container ul li .percentage span");
    // console.log(elements.length);
});




function showPercentage(name){
    var element = document.getElementById(name+"-percentage");
    // console.log(name);
    element.innerText="";
    var style = getComputedStyle(document.body);
    var percentage = style.getPropertyValue('--'+name);
    var text = document.createTextNode(percentage);
    element.appendChild(text);
    // alert(name+" : "+percentage+"%");
    $("."+name+"-percentage-out").css("display","unset");
}

function closePercentage(name) { 
    $("."+name+"-percentage-out").css("display","none");
}
