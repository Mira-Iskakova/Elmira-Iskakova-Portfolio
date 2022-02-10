const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".menu");
  const menuLinks = document.querySelectorAll(".menu li");

  burger.addEventListener("click", () => {
    //Toggle nav
    nav.classList.toggle("nav-active");

    //Animate links
    menuLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 1.5
        }s`;
      }
    });

    //Burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();
