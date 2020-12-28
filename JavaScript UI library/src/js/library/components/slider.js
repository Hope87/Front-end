import $ from "../core";

$.prototype.slider = function () {
  for (let i = 0; i < this.length; i++) {
    const width = window.getComputedStyle(
      this[i].querySelector(".slider-inner")
    ).width;
    const slides = this[i].querySelectorAll(".slider-item");
    const slidesField = this[i].querySelector(".slider-img");
    const indicators = this[i].querySelectorAll(".slider-indicators li");

    slidesField.style.width = 100 * slides.length + "%";
    slides.forEach((slide) => {
      slide.style.width = width;
    });

    let offset = 0;
    let slideIndex = 0;

    $(this[i].querySelector('[data-slide="next"]')).click((e) => {
      e.preventDefault();

      if (offset === +width.replace(/\D/g, "") * (slides.length - 1)) {
        offset = 0;
      } else {
        offset += +width.replace(/\D/g, "");
      }

      slidesField.style.transform = `translateX(-${offset}px)`;

      if (slideIndex === slides.length - 1) {
        slideIndex = 0;
      } else {
        slideIndex++;
      }

      indicators.forEach((indicator) => indicator.classList.remove("active"));
      indicators[slideIndex].classList.add("active");
    });

    $(this[i].querySelector('[data-slide="prev"]')).click((e) => {
      e.preventDefault();

      if (offset === 0) {
        offset = +width.replace(/\D/g, "") * (slides.length - 1);
      } else {
        offset -= +width.replace(/\D/g, "");
      }

      slidesField.style.transform = `translateX(-${offset}px)`;

      if (slideIndex === 0) {
        slideIndex = slides.length - 1;
      } else {
        slideIndex--;
      }

      indicators.forEach((indicator) => indicator.classList.remove("active"));
      indicators[slideIndex].classList.add("active");
    });

    const sliderId = this[i].getAttribute("id");

    $(`#${sliderId} .slider-indicators li`).click((e) => {
      const slideTo = e.target.getAttribute("data-slide-to");

      slideIndex = slideTo;
      offset = +width.replace(/\D/g, "") * slideTo;

      slidesField.style.transform = `translateX(-${offset}px)`;
      indicators.forEach((indicator) => indicator.classList.remove("active"));
      indicators[slideIndex].classList.add("active");
    });
  }
};

$(".slider").slider();
