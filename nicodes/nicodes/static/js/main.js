const textArray = ["ls projects"]
typingDelay = 150;

const newTextDelay = 500;

let textArrayIndex = 0;
let charIndex= 0;

const typeTextSpan = document.querySelector(".typed-text") ;
//const typeTextDiv = document.querySelector(".changelog") ;


function type(){
  if (charIndex< textArray[textArrayIndex].length){
  typeTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
  charIndex++;
  setTimeout(type,typingDelay);
  }
  break;


}



document.addEventListener("DOMContentLoaded", function(){
 setTimeout(type,1000);
});






