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
function homeScrollView() {
  document.getElementById("page-top").scrollIntoView(true);

}

function aboutScrollView() {
  document.getElementById("about-section").scrollIntoView(true);
}

function projectScrollView() {
  document.getElementById("project-section").scrollIntoView(true);
}

function contactScrollView() {
  document.getElementById("social-section").scrollIntoView(true);
}

document.getElementById("home-button").addEventListener("click", homeScrollView);
document.getElementById("about-button").addEventListener("click", aboutScrollView);
document.getElementById("project-button").addEventListener("click", projectScrollView);
document.getElementById("contact-button").addEventListener("click", contactScrollView); 