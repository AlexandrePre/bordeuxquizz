













































































/* create variable for scrool header and footer */

const header = document.querySelector(".header");
const questionMort = document.querySelector(".questionMort");

const container = document.querySelector('.container');
const footer = document.querySelector('.footer');
const quizz1 = document.querySelector('.quizz1');
const team = document.getElementsByClassName(".team");



/* comptage de point et good and false */

const scoreCanneleTexte = document.querySelector('.scorecannele');
const scoreMacaronTexte = document.querySelector('.scoremacaron');

const answer = document.getElementsByClassName('answer');
const answerNice = document.getElementsByClassName('answerGood')

console.log(answerNice);


let scoreCannele = 0;
let scoreCanneleGood = ++scoreCannele

for (const answerGood of answerNice) {
    answerGood.addEventListener('click', () => {

        answerGood.style.backgroundColor = "green"
        scoreCanneleTexte.innerHTML = scoreCanneleGood;
        return scoreCanneleGood = ++scoreCannele;


    }
    );
}

for (const answerFalse of answer) {
    answerFalse.addEventListener('click', () => {

        answerFalse.style.backgroundColor = "red"

    }
    );
}


