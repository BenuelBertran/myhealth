"use strict";

const header = document.querySelector(".header");
const toggle = document.querySelector(".slider__wrapper");
const leftButton = document.querySelector(".slider__toggle--left");
const rightButton = document.querySelector(".slider__toggle--right");
const firstSlide = document.querySelector(".slider__item--first");
const secondSlide = document.querySelector(".slider__item--second");

toggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (evt.target === leftButton) {
    secondSlide.classList.add("hidden");
    firstSlide.classList.remove("hidden");
    header.classList.remove("header--second");
    rightButton.classList.remove("slider__toggle--active");
    leftButton.classList.add("slider__toggle--active");
  } else if (evt.target === rightButton) {
    firstSlide.classList.add("hidden");
    secondSlide.classList.remove("hidden");
    header.classList.add("header--second");
    rightButton.classList.add("slider__toggle--active");
    leftButton.classList.remove("slider__toggle--active");
  }
});