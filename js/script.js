// *** Hamburger Menu functionality ***

const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");
btn.addEventListener("click", navToggle);
menu.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

// *** Hide Navbar on scroll **

var lastScrollTop; // This Varibale will store the top position

navbar = document.getElementById("navbar"); // Get The NavBar

window.addEventListener("scroll", function () {
  //on every scroll this funtion will be called

  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  //This line will get the location on scroll

  if (scrollTop > lastScrollTop) {
    //if it will be greater than the previous
    navbar.style.top = "-100px";
    //set the value to the negetive of height of navbar
  } else {
    navbar.style.top = "0";
  }

  lastScrollTop = scrollTop; //New Position Stored
});
