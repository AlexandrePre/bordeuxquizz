/* create variable for scrool header and footer */

const header = document.querySelector(".header");
const questionMort = document.querySelector(".questionMort");

const container = document.querySelector('.container');
const footer = document.querySelector('.footer');
const quizz1 = document.querySelector('.quizz1');
const team = document.getElementsByClassName("team");


/* fonction for scrool pour header */

header.style.display = 'none';


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

footer.style.display = 'none';

window.addEventListener('scroll', () => {
    const { scrollTop, clientHeight } = document.documentElement;

    const topContainerToTopViewport = quizz1.getBoundingClientRect().bottom;

    if (scrollTop > topContainerToTopViewport) {
        footer.style.display = 'block';

    } else {
        footer.style.display = 'none';

    }
});



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



