const navSlide = () => {
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".nav-links");

  menu.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
}

navSlide();
