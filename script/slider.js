function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("Slides");
  let dots = document.getElementsByClassName("demo");
  if (n > slides.length) {
    slideIndex1 = 1;
  }
  if (n < 1) {
    slideIndex1 = slides.length;
  }
  for (let slide of slides) {
    slide.style.display = "none";
  }
  for (let dot of dots) {
    dot.classList.toggle("active");
  }
  slides[slideIndex1 - 1].style.display = "block";
  dots[slideIndex1 - 1].classList.add("active");
}

let slideIndex1 = 1;

function plusSlides(n) {
  showSlides((slideIndex1 += n));
}

function currentSlide(n) {
  showSlides((slideIndex1 = n));
}

showSlides(1);
