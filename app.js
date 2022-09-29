
const header = document.querySelector(".header");
const questionMort = document.querySelector(".questionMort");

const container = document.querySelector('.container');
const footer = document.querySelector('.footer')
const quizz1 = document.querySelector('.quizz1');
const team = document.querySelector('containerTeam1');


header.style.display = 'none';
footer.style.display = 'none';


window.addEventListener('scroll', () => {

    const { scrollTop, clientHeight } = document.documentElement;

    const topContainerToTopViewport = quizz1.getBoundingClientRect().bottom;

    if (scrollTop > topContainerToTopViewport) {
        header.style.display = 'block';
        footer.style.display = 'block';
    } else {
        header.style.display = 'none';
        footer.style.display = 'none';

    }
});



