
console.log ("Hello!"
  )

var opacity = 0; 
var intervalID = 0; 
function show() { 
    var body = document.getElementById("body"); 
    opacity = Number(window.getComputedStyle(body) 
                     .getPropertyValue("opacity")); 
    if (opacity < 1) { 
        opacity = opacity + 0.1; 
        body.style.opacity = opacity; 
    } else { 
        clearInterval(intervalID); 
    } 
} 
function fadeIn() { 
    setInterval(show, 200); 
} 
window.onload = fadeIn;
