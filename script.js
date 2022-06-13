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
function scrollView(id) {
	document.getElementById(id).scrollIntoView(true);
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