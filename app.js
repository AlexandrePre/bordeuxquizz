<<<<<<< HEAD
const header = document.querySelector(".header");
=======

const header = document.querySelector(".header");

>>>>>>> 0e4b43fc57c9101184aadf3fd2f0940b622dca4f
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
<<<<<<< HEAD
    } else {
        header.style.display = 'none';
        footer.style.display = 'none';

    }

=======
    } else {header.style.display = 'none';
    footer.style.display = 'none';
}
>>>>>>> 0e4b43fc57c9101184aadf3fd2f0940b622dca4f
});






