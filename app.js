
const header = document.querySelector(".header");

const container = document.querySelector('.container');

const footer = document.querySelector("h3");

const quizz1 = document.querySelector('.quizz1');


header.style.display = 'none';
footer.style.display = 'none';

window.addEventListener('scroll', () => {
    const { scrollTop, clientHeight } = document.documentElement;
    const topContainerToTopViewport = quizz1.getBoundingClientRect().top;
    if (scrollTop > topContainerToTopViewport.toFixed()) {
        header.style.display = 'block';
        footer.style.display = 'block';
    } else {
        header.style.display = 'none';
        footer.style.display = 'none';
    }
});

// slide horizontal

const items = document.querySelectorAll('.question');
const nbSlide = items.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
let count = 0;

items[count].style.display = 'block';
items[count + 1].style.display = 'none';
items[count + 2].style.display = 'none';

function slideSuivante() {
    items[count].style.display = 'none';

    if (count < nbSlide - 1) {
        count++;
    } else {
        count = 0;
    }

    items[count].style.display = 'block';
}
suivant.addEventListener('click', slideSuivante);

function slidePrecedente() {
    items[count].style.display = 'none';

    if (count > 0) {
        count--;
    } else {
        count = nbSlide - 1;
    }

    items[count].style.display = 'block';
}
precedent.addEventListener('click', slidePrecedente);

function keyPress(e) {
    console.log(e);

    if (e.keyCode === 37) {
        slidePrecedente();
    } else if (e.keyCode === 39) {
        slideSuivante();
    }
}
document.addEventListener('keydown', keyPress)



