/* create variable for scrool header and footer */

const header = document.querySelector(".header");
const questionMort = document.querySelector(".questionMort");

const container = document.querySelector('.container');
const footer = document.querySelector('.footer')
const quizz1 = document.querySelector('.quizz1');
const bigContainer = document.querySelector('.bigContainer');


header.style.display = 'none';
footer.style.display = 'none';

/* fonction for scrool pour header */

window.addEventListener('scroll', () => {

    const { scrollTop, clientHeight } = document.documentElement;

    const topContainerToTopViewport = quizz1.getBoundingClientRect().top;

    if (scrollTop > topContainerToTopViewport) {
        header.style.display = 'block';

    } else {
        header.style.display = 'none';

    }
});

/* fonction for scrool pour footer */

window.addEventListener('scroll', () => {

    const { scrollTop, clientHeight } = document.documentElement;

    const topContainerToTopViewport = quizz1.getBoundingClientRect().bottom;

    if (scrollTop > topContainerToTopViewport) {
        footer.style.display = 'block';

    } else {
        footer.style.display = 'none';

    }
});



/* create variable for rep good team cannele */

const scoreCanneleTexte = document.querySelector('.scorecannele');
const scoreMacaronTexte = document.querySelector('.scoremacaron');

const good1 = document.querySelector('.rep1q1');


let scoreCannele = 0;
let scoreCanneleGood = ++scoreCannele


/* question 1 quizz 1*/
good1.addEventListener('click', function () {


    scoreCanneleTexte.innerHTML = scoreCanneleGood;
    return scoreCanneleGood = ++scoreCannele;
}



);

/* question 1 quizz 2*/

const good2 = document.querySelector('.rep2q1-wild');
good2.addEventListener('click', function () {


    scoreCanneleTexte.innerHTML = scoreCanneleGood;
    return scoreCanneleGood = ++scoreCannele;
})












