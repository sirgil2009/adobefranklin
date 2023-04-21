
import { createOptimizedPicture } from '../../scripts/lib-franklin.js';


let slideIndex = 1;

function nextOrPrevSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  const slides = document.querySelectorAll('.single-slide');
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;
  slides.forEach((slide) => {
    slide.style.display = 'none';
  }); 
  slides[slideIndex - 1].style.display = 'block';
}

export default function decorate(block) {

  const slidesContainer = document.createElement('div');
  const prevButton = document.createElement('a');
  const nextButton = document.createElement('a');
  const dotsContainer = document.createElement('div');
  prevButton.className = 'prev';
  prevButton.innerHTML = '&#10094;';
  nextButton.className = 'next';
  nextButton.innerHTML = '&#10095;';
  nextButton.addEventListener('click', () => nextOrPrevSlide(1));
  prevButton.addEventListener('click', () => nextOrPrevSlide(-1));

  slidesContainer.className = 'slides-container';
  [...block.children].forEach((row) => {
    const slide = document.createElement('div');
    slide.innerHTML = row.innerHTML;
    if (slide.children.length === 1 && slide.querySelector('picture')){ 
      slide.className = 'single-slide';
      slidesContainer.append(slide);
    }
  });
  slidesContainer.append(prevButton);
  slidesContainer.append(nextButton);
  block.append(slidesContainer );
  showSlides(slideIndex);
}
