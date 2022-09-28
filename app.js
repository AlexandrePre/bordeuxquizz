
const header = document.querySelector(".header");

const container = document.querySelector('.container');

const footer = document.querySelector(".footer");

const quizz1 = document.querySelector('.quizz1');


header.style.display = 'none';
footer.style.display = 'block';

window.addEventListener('scroll', () => {
    const { scrollTop, clientHeight } = document.documentElement;
    const topContainerToTopViewport = quizz1.getBoundingClientRect().top;
    if (scrollTop > topContainerToTopViewport.toFixed()) {
        header.style.display = 'block';
        footer.style.display = 'block';
    } else {header.style.display = 'none';
            footer.style.display = 'none';
}
});






