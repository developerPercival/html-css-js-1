//Navbar.
function navBarAnimation() {
  // target.
  const navbar = document.querySelector(".nav");

  //add event handler.
  window.addEventListener("scroll", function (e) {
    e.preventDefault();

    //scrollY coords.
    if (window.scrollY <= 150) {
      //default
      navbar.classList.remove("nav--change");
      navbar.classList.add("nav--default");
    } else {
      //change css style.
      navbar.classList.remove("nav--default");
      navbar.classList.add("nav--change");
    }
  });
}

//Smooth scrolling.
function smoothScrolling() {
  // target.
  const link = document.querySelectorAll("a");

  // add event handler.
  link.forEach((link) => {
    link.addEventListener("click", function (e) {
      // get href value
      const href = this.getAttribute("href");
      //get offsetop from href.
      const offSetTop = document.querySelector(href).offsetTop;

      //configure smooth scroll.
      scroll({
        top: offSetTop,
        behavior: "smooth",
      });
    });
  });
}

//fading navbar animation.
function fadingNavbar() {
  // Grab nav.
  const nav = document.querySelector(".nav--container");

  // fading logic.
  function fadingEffect(e) {
    // check if element is nav--link.
    if (e.target.classList.contains("nav--link")) {
      // save element.
      const link = e.target;
      // grab sibling of the target element.
      const sibling = nav.closest(".nav").querySelectorAll(".nav--link");

      //loop through sibling.
      sibling.forEach((item) => {
        // check with save element var.
        if (item !== link) {
          item.style.opacity = this;
        }
      });
    }
  }

  //Event
  nav.addEventListener("mouseover", fadingEffect.bind(0.5));
  nav.addEventListener("mouseout", fadingEffect.bind(1));
}

//Scroll animation
function scrollAnimation() {
  const containers = document.querySelectorAll(".boxes--content");

  const bottomTrigger = window.innerHeight / (5 * 4);

  window.addEventListener("scroll", function (e) {
    e.preventDefault();

    containers.forEach((container) => {
      const containerTop = container.getBoundingClientRect().top;

      if (containerTop <= bottomTrigger) {
        container.classList.remove("show");
      } else {
        container.classList.add("show");
      }
    });
  });
}

// merge all event function in one function.
function init() {
  navBarAnimation();
  smoothScrolling();
  fadingNavbar();
  scrollAnimation();
}

// initialize.
init();
