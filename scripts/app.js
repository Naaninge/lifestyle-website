import imageList from "./imageData.js";
import {getElement,fetchData} from "./utils.js"

const menu = getElement(".hamburger");
const close = getElement(".close-menu");
const navItems = getElement(".nav-items");
const sliderImages = getElement(".slider .slider-row .images");
const nav = getElement("main#about nav");
const navbar = getElement(".nav");
const span = getElement(".year");



const api_url = "https://api.api-ninjas.com/v1/exercises?muscle=biceps";

let count = 0;
const sliderCount = imageList.length;
const { url, alt } = imageList[count];

// automatic slider
const autoSlider = () => {
  setInterval(() => {
    goToNext();
  }, 2000);
};

// function to change slide images
const goToNext = () => {
  if (count >= sliderCount - 1) {
    count = 0;
  } else {
    count++;
  }
  const { url, alt } = imageList[count];
  sliderImages.innerHTML = `<img src=${url} alt=${alt}>`;
};

// Toggle Menu
menu.addEventListener("click", () => {
  menu.classList.add("hide");
  close.classList.add("show");
  navItems.classList.add("show");
  nav.style.background = "#FFF";
});

close.addEventListener("click", () => {
  close.classList.remove("show");
  menu.classList.remove("hide");
  navItems.classList.remove("show");
  nav.style.background = "transparent";
});

// get the offset position of the navbar
const navOffset = navbar.offsetTop;

// fixed navbar
const fixedNav = () => {
  if (window.scrollY >= navOffset) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

//get the current the year
const year = new Date().getFullYear();
span.textContent = `${year}`;

window.addEventListener("DOMContentLoaded", () => {
  sliderImages.innerHTML = `<img src=${url} alt=${alt}>`;
  autoSlider();
  fixedNav();
  fetchData(api_url);
});
