"use strict";

const body = document.getElementById("container");
const header = document.querySelector(".header");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");
const socials = document.querySelectorAll(".social-icon");

const time = document.getElementById("time");
const inputs = document.querySelectorAll("input");
const textArea = document.querySelector("textarea");

const moonIcon = document.querySelector(".icon--theme");
const nav = document.querySelector(".nav");
const links = document.querySelectorAll(".nav__item");
const compIcon = document.querySelector(".icon--computer");
const iconHamburger = document.querySelector(".icon--hamburger");

const darkMode = function () {
  let dark = localStorage.getItem("dark");

  if (dark === "" || dark === "false") {
    dark = false;
  } else {
    dark = true;
  }

  if (dark) {
    moonIcon.style.fill = "green";
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
    moonIcon.style.fill = "";
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

moonIcon.addEventListener("click", function () {
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
