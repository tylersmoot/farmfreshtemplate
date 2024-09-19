let rightArrow = document.querySelector("#arrowRight");
let leftArrow = document.querySelector("#arrowLeft");
let slideFrame= document.querySelector("#products .slideFrame");
let slide = document.querySelectorAll(".slide");
let length = 3;
let width = 1300;
let slideWidth = 282;
let count = 1;









leftArrow.addEventListener("click", function() {
    console.log("clicked");
})






function right () {

count = 1;

rightArrow.addEventListener("click", function() {
   
   
    if(count < length) {
    slideFrame.style.marginLeft = "-" + count * slideWidth + "px";

console.log("yes");
count++;
    } else if(count >= length) {
      slideFrame.style.marginLeft = "0px";
      count = 0;
      
    } 
   
    
})

}




let clientArrowLeft = document.querySelector("#clientArrowLeft");
let clientArrowRight = document.querySelector("#clientArrowRight");
let clientCarousel = document.querySelector(".carousel");
let clientCount = 0;
let clientWidth = 667;

clientArrowRight.addEventListener("click", function () {



   
    clientCount = 1;
    clientCarousel.style.marginLeft = "-" + clientCount * clientWidth + "px";
    clientCount++;


})