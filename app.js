
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
let slideIndex = 0;
const answer2 = document.querySelectorAll('h3');


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

    // remise à zéro des classes bonne et mauvaise réponse : function dans la function

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

    // remise à zéro des classes bonne et mauvaise réponse : function dans la function

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


