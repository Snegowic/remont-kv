const slider = document.querySelectorAll('.slide'); 
let currentIndex = 0;

function switchSlides(){
  slider[currentIndex].classList.remove('active');
  currentIndex ++;
  if(currentIndex >= slider.length){
    currentIndex = 0;
  }
  slider[currentIndex].classList.add('active');
}
setInterval(switchSlides, 5000);



// Функция для переключения аккордеона
function Accordion(button) {
  const item = button.parentElement;
  const content = button.nextElementSibling;

  button.classList.toggle('active');
  content.classList.toggle('active');

  // Закрываем другие открытые элементы аккордеона
  const allItems = document.querySelectorAll('.portfolio__block');
  allItems.forEach(accordionItem => {
      if (accordionItem !== item) {
          accordionItem.querySelector('.portfolio__item').classList.remove('active');
          accordionItem.querySelector('.accordion-content').classList.remove('active');
      }
  });
}