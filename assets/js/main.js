/* вкладки */
let btns = document.querySelectorAll('.btn');
let texts = document.querySelectorAll('.text');
btns.forEach((btn, index) => {
  btn.onclick = () => {
    document.querySelector('.btn.active').classList.remove('active');
    btn.classList.add('active');
    document.querySelector('.text.active').classList.remove('active');
    texts[index].classList.add('active');
  };
});


/* слайдер */
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function switchSlides() {
  slides[currentIndex].classList.remove('active');
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  slides[currentIndex].classList.add('active');
}
setInterval(switchSlides, 5000);


/* Аккордион */
function toggleAccordion(header){
  let content = header.nextElementSibling;
  content.classList.toggle("show2");
}
