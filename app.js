

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


/* eslint-disable no-unused-expressions */
/* eslint-disable func-names */
// scroll header
const header = document.querySelector('.header');
const container = document.querySelector('.container');
const height = container.clientHeight;
window.addEventListener('scroll', () => {
  if (window.scrollY > height - 5) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
});

// scroll footer
const team = document.querySelector('.team');
const footer = document.querySelector('.footer');
const height1 = team.clientHeight;
window.addEventListener('scroll', () => {
  if (window.scrollY > height1 + 2222) {
    footer.classList.add('scroll1');
  } else {
    footer.classList.remove('scroll1');
  }
});

// formulaire pour rentrer le nom des équipes
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const team1 = document.getElementById('team1');
const team2 = document.getElementById('team2');
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
btn1.addEventListener('click', () => {
    team1.innerHTML = text1.value;
    text1.value = '';
});
btn2.addEventListener('click', () => {
    team2.innerHTML = text2.value;
    text2.value = '';
});

// open modal
const btnWin = document.getElementById('btnWin');
btnWin.addEventListener('click', () => {
    const random = Math.floor(Math.random() * 100) + 1;
    const modal = document.getElementById('modal');
    const teamWin = document.getElementById('teamWin');
    if (random < 50) {
    ((modal.style.display = 'flex') && (teamWin.innerHTML = team1.innerHTML));
  } else { ((modal.style.display = 'flex') && (teamWin.innerHTML = team2.innerHTML)); }

    btnWin.onsubmit = function (event) {
        event.preventDefault();
    };
});
const form = document.getElementById('form');
form.onsubmit = function (event) {
    event.preventDefault();
};

// close modal
const btnClose = document.getElementById('btnClose');
const modal = document.getElementById('modal');
btnClose.addEventListener('click', () => {
    modal.style.display = 'none';
});
btnClose.onsubmit = function (event) {
    event.preventDefault();
};








  

