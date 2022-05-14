"use strict";

const body = document.getElementById("container");
const header = document.querySelector(".header");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");
const socials = document.querySelectorAll(".social-icon");
const bulbIcon = document.querySelector(".icon--bulb");

const time = document.getElementById("time");
const inputs = document.querySelectorAll("input");
const textArea = document.querySelector("textarea");

header.innerHTML = `
  <div class="logo">
    <h1 class="logo__name">David Kiama</h1>

    <svg class="icon--computer">
      <use xlink:href="img/sprite.svg#computer-svgrepo-com"></use>
    </svg>
  </div>

  <nav class="nav">
    <a href="index.html" class="nav__item">About</a>
    <a href="work.html" class="nav__item">Work</a>
    <a href="gallery.html" class="nav__item">Gallery</a>
    <a href="contact.html" class="nav__item">Contact</a>

    
  </nav>
  <svg class="icon--hamburger">
    <use xlink:href="img/sprite.svg#hamburger-menu"></use>
  </svg>

  
`;

footer.innerHTML = `
<div class="con"><span class="con--circle"> </span></div>
<div class="circle">
  <span class="circle--outer">
    <span class="circle--inner"> &nbsp; </span>
  </span>
</div>
<h3 class="copyright">Copyright &copy; 2022. David Kiama</h3>



`;
const nav = document.querySelector(".nav");
const links = document.querySelectorAll(".nav__item");
const compIcon = document.querySelector(".icon--computer");
const iconHamburger = document.querySelector(".icon--hamburger");

if (time) {
  const getTime = function () {
    const today = new Date();
    let hour = String(today.getHours()).padStart(2, "0");
    let min = String(today.getMinutes()).padStart(2, "0");

    time.textContent = `${hour} : ${min}`;

    setTimeout(getTime, 1000);
  };

  getTime();
}

const darkMode = function () {
  let dark = localStorage.getItem("dark");

  if (dark === "" || dark === "false") {
    dark = false;
  } else {
    dark = true;
  }

  if (dark) {
    bulbIcon.style.fill = "green";
    compIcon.style.fill = "green";

    body.classList.add("dark");
    header.classList.add("dark-header");
    main.classList.add("dark-2");
    textArea && textArea.classList.add("dark");

    inputs.forEach((input) => {
      input.classList.add("dark");
    });

    socials.forEach((icon) => {
      icon.classList.add("dark-3");
    });

    links.forEach((link) => {
      link.classList.add("dark");
    });
  } else {
    bulbIcon.style.fill = "";
    compIcon.style.fill = "";

    body.classList.remove("dark");
    header.classList.remove("dark-header");
    main.classList.remove("dark-2");
    textArea && textArea.classList.remove("dark");

    inputs.forEach((input) => {
      input.classList.remove("dark");
    });

    socials.forEach((icon) => {
      icon.classList.remove("dark-3");
    });

    links.forEach((link) => {
      link.classList.remove("dark");
    });
  }
};

bulbIcon.addEventListener("click", function () {
  let dark = localStorage.getItem("dark");

  if (dark === "" || dark === "false") {
    dark = false;
  } else {
    dark = true;
  }

  dark = !dark;
  localStorage.setItem("dark", dark);

  darkMode();
});

darkMode();

// Menu display

let displayMenu = false;

iconHamburger.addEventListener("click", function () {
  displayMenu = !displayMenu;
  if (displayMenu) {
    nav.classList.add("display_menu");
    iconHamburger.style.color = "#e6e6e6";
  } else {
    iconHamburger.style.color = "inherit";
    nav.classList.remove("display_menu");
  }
  console.log(displayMenu);
});
