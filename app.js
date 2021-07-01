colors =["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"]

const greeting = document.querySelector("h1");

//console.log(greeting);

greeting.style.color = colors[4];

const handlers = {
  mouseEnter: function(){
    greeting.innerHTML = "The mouse is here"
    greeting.style.color = colors[0];
  },
  mouseLeft: function(){
    greeting.innerHTML ="The mouse is left";
    greeting.style.color = colors[1];
  },
  windowResized: function(){
    greeting.innerHTML = "The window is resized"
    greeting.style.color = colors[2];
  },
  mouseRightClicked: function(){
    greeting.innerHTML = "The mouse is right-clicked";
    greeting.style.color = colors[3];
  }
}

greeting.addEventListener("mouseenter",handlers.mouseEnter);
greeting.addEventListener("mouseleave",handlers.mouseLeft);
window.addEventListener("resize",handlers.windowResized);
document.addEventListener("contextmenu",handlers.mouseRightClicked);
