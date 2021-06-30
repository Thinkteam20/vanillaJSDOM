const h1 = document.querySelector("h1");

function handleMouseEnter() {
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleMouseEnter);
