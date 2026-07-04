const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const dotsContainer = document.querySelector(".dots");
const sliderFrame = document.querySelector(".slider-frame");

let slideNumber = 1;
const totalSlides = images.length;
let slideInterval;

/* ================== Create Dots ================== */
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === 0) {
    dot.classList.add("active");
  }
  dotsContainer.appendChild(dot);
}

const allDots = document.querySelectorAll(".dot");

/* ================== Reset Dots ================== */
function resetDots() {
  allDots.forEach((dot) => {
    dot.classList.remove("active");
  });
}

/* ================== Update Active Dot ================== */
function updateDots() {
  resetDots();
  allDots[slideNumber - 1].classList.add("active");
}

/* ================== Go To Slide ================== */
function goToSlide() {
  slider.style.transform = `translateX(-${(slideNumber - 1) * 100}%)`;
  updateDots();
}

/* ================== Next Slide ================== */
function nextSlide() {
  if (slideNumber < totalSlides) {
    slideNumber++;
  } else {
    slideNumber = 1;
  }
  goToSlide();
}

/* ================== Prev Slide ================== */
function prevSlide() {
  if (slideNumber > 1) {
    slideNumber--;
  } else {
    slideNumber = totalSlides;
  }
  goToSlide();
}

/* ================== Auto Slide ================== */
function startSlideShow() {
  clearInterval(slideInterval);
  slideInterval = setInterval(() => {
    nextSlide();
  }, 2000);
}

function stopSlideShow() {
  clearInterval(slideInterval);
}

/* ================== Arrow Events ================== */
rightArrow.addEventListener("click", () => {
  nextSlide();
});

leftArrow.addEventListener("click", () => {
  prevSlide();
});

/* ================== Dot Click Events ================== */
allDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    slideNumber = index + 1;
    goToSlide();
  });
});

/* ================== Pause on Hover ================== */
sliderFrame.addEventListener("mouseenter", stopSlideShow);
sliderFrame.addEventListener("mouseleave", startSlideShow);

rightArrow.addEventListener("mouseenter", stopSlideShow);
rightArrow.addEventListener("mouseleave", startSlideShow);

leftArrow.addEventListener("mouseenter", stopSlideShow);
leftArrow.addEventListener("mouseleave", startSlideShow);

allDots.forEach((dot) => {
  dot.addEventListener("mouseenter", stopSlideShow);
  dot.addEventListener("mouseleave", startSlideShow);
});

/* ================== Start Slider ================== */
goToSlide();
startSlideShow();