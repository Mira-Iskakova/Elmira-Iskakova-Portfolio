const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".menu");
  const menuLinks = document.querySelectorAll(".menu li");

  //Toggle nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
  //Animate links
  menuLinks.forEach((link, index) => {
    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 2}s`;
  });
};

navSlide();
