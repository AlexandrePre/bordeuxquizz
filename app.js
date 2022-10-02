/* create variable for scrool header and footer */

const header = document.querySelector(".header");
const questionMort = document.querySelector(".questionMort");

const container = document.querySelector('.container');
const footer = document.querySelector('.footer');
const quizz1 = document.querySelector('.quizz1');
const team = document.getElementsByClassName("team");


/* fonction for scrool pour header */


window.addEventListener('scroll', () => {
    const { scrollTop, clientHeight } = document.documentElement;

    const topContainerToTopViewport = quizz1.getBoundingClientRect().bottom;

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


// /* question 1 quizz 1*/
// good1.addEventListener('click', function () {


//     scoreCanneleTexte.innerHTML = scoreCanneleGood;
//     return scoreCanneleGood = ++scoreCannele;
// }



// );

/* question 1 quizz 2*/

// const good2 = document.querySelector('.rep2q1-wild');
// good2.addEventListener('click', function () {


//     scoreCanneleTexte.innerHTML = scoreCanneleGood;
//     return scoreCanneleGood = ++scoreCannele;
// })


// formulaire pour rentrer le nom des équipes
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const team1 = document.getElementById("team1");
const team2 = document.getElementById("team2");

btn1.addEventListener('click', () => {
    const text1 = document.getElementById("text1").value;
    team1.innerHTML = text1;
});

btn2.addEventListener('click', () => {
    const text2 = document.getElementById("text2").value;
    team2.innerHTML = text2;
});

// empèche de reload
const form = document.getElementById("form");
form.onsubmit = function (event) {
    event.preventDefault();
};

// open modal
const btnWin = document.getElementById("btnWin");
btnWin.addEventListener("click", () => {


    const random = Math.floor(Math.random() * 100) + 1;
    const modal = document.getElementById("modal");
    const teamWin = document.getElementById("teamWin");
    const text1 = document.getElementById("text1").value;
    const text2 = document.getElementById("text2").value;

    if (random < 50) {
        ((modal.style.display = "flex") && (teamWin.innerHTML = text1));
    } else { ((modal.style.display = "flex") && (teamWin.innerHTML = text2)) };
});

btnWin.onsubmit = function (event) {
    event.preventDefault();
};

// close modal    
const btnClose = document.getElementById("btnClose");
const modal = document.getElementById("modal");
btnClose.addEventListener("click", () => {
    modal.style.display = "none";

});

btnClose.onsubmit = function (event) {
    event.preventDefault();
};

// slide horizontal

const items = document.querySelectorAll('.question');
const nbSlide = items.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
let slideIndex = 0;
const answer2 = document.querySelectorAll('h3');

console.log(answer2);

items[slideIndex].style.display = 'block';
items[slideIndex + 1].style.display = 'none';
items[slideIndex + 2].style.display = 'none';
items[slideIndex + 3].style.display = 'none';
items[slideIndex + 4].style.display = 'none';

function slideSuivante() {
    items[slideIndex].style.display = 'none';

    if (slideIndex < nbSlide - 1) {
        slideIndex++;
    } else {
        slideIndex = 1;
    }

    items[slideIndex].style.display = 'block';

    // remise à zéro des classes bonne et mauvaise réponse


    function testAnswer2() {

        for (let i = 0; i < answer2.length; i++) {

            const testAnswer2 = answer2[i].className;

            if (testAnswer2 == 'wrongAnswerRed') {
                answer2[i].className = "wrongAnswer";
            }
            if (testAnswer2 == 'rightAnswerGreen') {
                answer2[i].className = "rightAnswer";
            }
        }
    }

    testAnswer2();
    console.log(answer2);

}
suivant.addEventListener('click', slideSuivante);

function slidePrecedente() {
    items[slideIndex].style.display = 'none';

    if (slideIndex > 1) {
        slideIndex--;
    } else {
        slideIndex = nbSlide - 1;
    }

    items[slideIndex].style.display = 'block';

    // remise à zéro des classes bonne et mauvaise réponse




    function testAnswer2() {

        for (let i = 0; i < answer2.length; i++) {

            const testAnswer2 = answer2[i].className;

            if (testAnswer2 == 'wrongAnswerRed') {
                answer2[i].className = "wrongAnswer";
            }
            if (testAnswer2 == 'rightAnswerGreen') {
                answer2[i].className = "rightAnswer";
            }
        }
    }

    testAnswer2();
    console.log(answer2);
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

// function background color change

const answer = document.querySelectorAll('h3');
console.log(answer);


for (let i = 0; i < answer.length; i++) {

    function testAnswer() {
        const testAnswer = answer[i].className;

        if (testAnswer == 'wrongAnswer') {
            answer[i].className = "wrongAnswerRed";
        }
        if (testAnswer == 'rightAnswer') {
            answer[i].className = "rightAnswerGreen";
        }
    }

    answer[i].addEventListener('click', testAnswer);
}


