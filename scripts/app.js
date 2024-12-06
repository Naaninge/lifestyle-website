import imageList from "./imageData.js";
import { getElement } from "./utils.js";

const menu = getElement(".hamburger");
const close = getElement(".close-menu");
const navItems = getElement(".nav-items");
const sliderImages = getElement(".images");
const nav = getElement("main#about nav");
const span = getElement(".year");

let count = 0;
const sliderCount = imageList.length;
sliderImages.innerHTML = `<img src=${imageList[0].url} alt=${imageList[0].alt}/>`;

if (sliderCount === 0) {
  console.error("Image list is empty. Check `imageData.js`.");
}

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
  const { url, alt } = imageList[count] || {
    url: "",
    alt: "Image unavailable",
  };
  sliderImages.innerHTML = `<img src=${url} alt=${alt}/>`;
};

//Toggle Menu
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


//get the current the year
const year = new Date().getFullYear();
span.textContent = `${year}`;

window.addEventListener("DOMContentLoaded", () => {
  if (sliderImages && imageList[0]) {
    const { url, alt } = imageList[0] || { url: "", alt: "Image unavailable" };
    sliderImages.innerHTML = `<img src="${url}" alt="${alt}">`;
    autoSlider();
  }
});

// jQuery

// add a background to the home nav on scroll
$(window).ready(function () {
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll > 20) {
      $("#home nav").css("background", "white");
      $("#home nav .nav-item  a").css("color", "var(--primary-color)");
    } else {
      $("#home nav").css("background", "transparent");
      $("#home nav .nav-item  a").css("color", "white");
    }
  });
});

