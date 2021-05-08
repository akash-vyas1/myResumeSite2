var certs = document.querySelector(".certs").children;
// console.log(certs);
var size = certs.length;
console.log("total certificates : "+size);

var indicators = document.querySelector(".indicator").children;

var leftBtn = document.getElementById("goLeft");
var rightBtn = document.getElementById("goRight");

var currentCert = 0;
$(document).ready(function () {

    if(size==1) {
        $(leftBtn).css("display","none");
        $(rightBtn).css("display","none");
    }else {
        createCircles();
    }

    indicators[0].children[0].classList.add("active");
    
    $(leftBtn).click(function () { 
        // console.log("left button clicked");
        if(currentCert!=0) {
            showCertificate(currentCert,"left");
        }else {
            showCertificate(currentCert,"last");
        }
    });
    $(rightBtn).click(function () { 
        // console.log("right button clicked");
        if(currentCert<size-1) {
            showCertificate(currentCert,"right");
        }else {
            showCertificate(currentCert,"first");
        }
    });
});

function showCertificate(currentIndex,direction){
    var cert = certs[currentIndex];
    cert.style.display = "none";
    indicators[currentIndex].children[0].classList.remove("active");
    switch (direction) {
        case "left":{
            cert = certs[currentIndex-1];
            currentCert--;
            break;
        }
        case "right":{
            cert = certs[currentIndex+1];
            currentCert++;
            break;
        }
        case "last":{
            cert = certs[size-1];
            currentCert=size-1;
            indicators[0].children[0].classList.remove("active");
            break;
        }
        case "first":{
            cert = certs[0];
            currentCert=0;
            indicators[size-1].children[0].classList.remove("active");
            break;
        }
        default:
            break;
    }
    cert.style.display = "flex";
    indicators[currentCert].children[0].classList.add("active");
    // console.log(currentCert+1);
}

function openCert(index){
    index = Number(index);
    var cert = certs[currentCert];
    cert.style.display = "none";
    indicators[currentCert].children[0].classList.remove("active");
    
    cert = certs[index];
    cert.style.display = "flex";
    indicators[index].children[0].classList.add("active");
    currentCert=index;

}

function createCircles(){
    var indicator = document.getElementById("indicator");
    for(var i=0;i<size;i++) {
        indicator.appendChild(createCircle(i));
    }
}

function createCircle(i){
    var circle = document.createElement("div");
    circle.setAttribute("class","circle");
    circle.setAttribute("onclick","openCert("+i+")");
    var dot = document.createElement("div");
    dot.setAttribute("class","dot");
    circle.appendChild(dot);
    return circle;
}

{/* <section class="certificates section" style="display: unset;">
        <div class="all">
            <h2 class="head">Certificates</h2>
            <div class="left btn" id="goLeft" > <span> < </span> </div>
            <div class="right btn" id="goRight" > <span> > </span> </div>
            <div class="certs">
                <div class="cert">
                    <img src="oracle/oca/eCertificate.jpg" alt="">
                    <p>Oracle Certified Associate Java SE 8 </p>
                </div>   
                <div class="cert" style="display: none;">
                    <img src="images/timePowerProperty.jpg" alt="">
                    <p>Time Power Property, never misuse them</p>
                </div>  
                <div class="cert" style="display: none;">
                    <img src="images/whatiflastday.jpg" alt="">
                    <p>Would i want to do what i'm about to do? if today were the last day of my life</p>
                </div>
                <div class="cert" style="display: none;">
                    <img src="images/timePowerProperty.jpg" alt="">
                    <p>Time Power Property, never misuse them</p>
                </div> 
                
            </div>
            <div class="indicator" id="indicator"></div>
        </div>
    </section> */}

//     .all .left,
// .all .right  {
//     width: 45px;
//     height: 45px;
//     background: #eeeeee;
//     border-radius: 20%;
//     position: absolute;
//     right: 20px;
//     align-self: center;
//     border: 2px solid var(--blue);
//     box-shadow: 0 0 4px var(--blue);
//     cursor: pointer;
// }

// .btn span {
//     position: relative;
//     top: -15px;
//     font-size: 45px;
//     font-weight: 700;
//     color: var(--prussianblue);
//     user-select: none;
// }

// .left span {
//     left: 3px;
// }

// .right span {
//     right: -7px;
// }

// .all .left{
//     left: 125px;
// }

// .btn:active {
//     box-shadow:inset 0 0 3px var(--blue);
// }

// .btn:active span {
//     color: rgb(10, 124, 80);
// }

// .all .indicator {
//     width: 340px;
//     height: 50px;
//     align-self: flex-end;
//     justify-self:flex-start;
//     border-radius: 10px;
//     position: relative;
//     /* right: 30%; */
//     /* box-shadow: 0 0 7px var(--prussianblue); */
//     display: flex;
// }

// .indicator .circle {
//     width: 25px;
//     height: 25px;
//     background-color: var(--prussianblue);
//     border-radius: 40%;
//     margin: auto 7px;
//     box-shadow: 0 0 7px var(--prussianblue);
//     cursor: pointer;
// }

// .circle:active{
//     box-shadow: 0 0 0px var(--prussianblue);
// }
// .circle:active .dot{
//     background: rgb(13, 175, 113);
// }

// .circle .dot {
//     width: 15px;
//     height: 15px;
//     /* background:var(--logoColor); */
//     background:var(--logoColor);
//     border-radius: 45%;
//     position: relative;
//     left: 5px;
//     top: 5px;
// }

// .dot.active{
//     background: var(--lightblue);
// }



//LEFT
// var cert = certs[currentCert];
// cert.style.display = "none";
// cert = certs[currentCert-1];
// cert.style.display = "flex";
// currentCert--;

//RIGHT
// var cert = certs[currentCert];
// cert.style.display = "none";
// cert = certs[currentCert+1];
// cert.style.display = "flex";
// currentCert++;

//LAST
// var cert = certs[currentIndex];
// cert.style.display = "none";
// cert = certs[size-1];
// cert.style.display = "flex";
// currentCert=size-1;
// indicators[currentCert].children[0].classList.add("active");
// indicators[0].children[0].classList.remove("active");


//FIRST
// var cert = certs[currentIndex];
// cert.style.display = "none";
// cert = certs[0];
// cert.style.display = "flex";
// currentCert=0;
// indicators[currentCert].children[0].classList.add("active");
// indicators[size-1].children[0].classList.remove("active");