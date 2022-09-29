
const header = document.querySelector(".header");

const container = document.querySelector('.container');
const footer = document.querySelector('.footer')
const quizz1 = document.querySelector('.quizz1');
const team = document.querySelector('containerTeam1');


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


import { w3cHtmlValidator } from 'w3c-html-validator';
const options = { filename: './index.html' };
w3cHtmlValidator.validate(options).then(console.log);