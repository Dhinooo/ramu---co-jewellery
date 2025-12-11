let slideIndex = 1
showSlides(slideIndex)

// Next/Previous
function plusSlides (n) {
  showSlides((slideIndex += n))
}

// Dots
function currentSlide (n) {
  showSlides((slideIndex = n))
}

function showSlides (n) {
  let i
  let slides = document.getElementsByClassName('carousel-slide')
  let dots = document.getElementsByClassName('dot')

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active')
  }

  slides[slideIndex - 1].style.display = 'block'
  dots[slideIndex - 1].classList.add('active')
}

// -------------------------------------------------------------------------------

let slider = document.querySelector('.track')
let move = 390 // card width + margin
let index = 0

function slideRight () {
  if (index < 2) {
    // total cards - 1
    index++
    slider.style.transform = `translateX(-${index * move}px)`
  }
}

function slideLeft () {
  if (index > 0) {
    index--
    slider.style.transform = `translateX(-${index * move}px)`
  }
}
