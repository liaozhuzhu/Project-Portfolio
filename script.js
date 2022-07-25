// Navigation Mobile Functions
//
const navSlide = () => {
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  menu.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    // Menu Animation
    navLinks.forEach((link, index) => {
      if (link.style.animation) { 
        link.style.animation = "";
      }
      else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .3}s`;
      }
    });

    //Menu Animation After Clicked
    menu.classList.toggle("toggle");
    
  });

}

navSlide();

// Navigation Scroll Functions
//
function scrollView(section) {
	document.getElementById(section).scrollIntoView(true);
}

document.getElementById("home-button").addEventListener("click", () => {
  scrollView("page-top");
});

document.getElementById("about-button").addEventListener("click", () => {
  scrollView("about-section");
});

document.getElementById("project-button").addEventListener("click", () => {
  scrollView("project-section");
});

document.getElementById("contact-button").addEventListener("click", () => {
  scrollView("social-section");
}); 

document.getElementById("website-button").addEventListener("click", () => {
  scrollView("page-top");
});
// Image Gifs
let todoDiv = document.getElementById("todo-div");
let todo = document.getElementById("todo-image");
todoDiv.addEventListener("mouseover", () => {
  todo.setAttribute("src", "Images/todo.gif");
});
todoDiv.addEventListener("mouseout", ()=> {
  todo.setAttribute("src", "Images/todo.JPG");
});

let weatherDiv = document.getElementById("weather-div");
let weather = document.getElementById("weather-image");
weatherDiv.addEventListener("mouseover", () => {
  weather.setAttribute("src", "Images/weather.gif");
});
weatherDiv.addEventListener("mouseout", ()=> {
  weather.setAttribute("src", "Images/weather.JPG");
});

let calcDiv = document.getElementById("calc-div");
let calc = document.getElementById("calc-image");
calcDiv.addEventListener("mouseover", () => {
  calc.setAttribute("src", "Images/calc.gif");
});
calcDiv.addEventListener("mouseout", ()=> {
  calc.setAttribute("src", "Images/calc.JPG");
});

let mathDiv = document.getElementById("math-div");
let math = document.getElementById("math-image");
mathDiv.addEventListener("mouseover", () => {
  math.setAttribute("src", "Images/math.gif");
});
mathDiv.addEventListener("mouseout", ()=> {
  math.setAttribute("src", "Images/math.JPG");
});

let etchDiv = document.getElementById("etch-div");
let etch = document.getElementById("etch-image");
etchDiv.addEventListener("mouseover", () => {
  etch.setAttribute("src", "Images/etch.gif");
});
etchDiv.addEventListener("mouseout", ()=> {
  etch.setAttribute("src", "Images/etch.JPG");
});

let sortDiv = document.getElementById("sort-div");
let sort = document.getElementById("sort-image");
sortDiv.addEventListener("mouseenter", () => {
  sort.setAttribute("src", "Images/sort.gif");
});
sortDiv.addEventListener("mouseout", ()=> {
  sort.setAttribute("src", "Images/sort.JPG");
});