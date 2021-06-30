const h1 = document.querySelector("h1");

function handleMouseEnter() {
  if (h1.className === "active") {
    h1.className = "";
  } else {
    h1.className = "active";
  }
}

h1.addEventListener("click", handleMouseEnter);
