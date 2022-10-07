
/* eslint-disable indent */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-loop-func */
/* eslint-disable quotes */
/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-unused-expressions */


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

const team = document.querySelector(".team");
const footer = document.querySelector('.footer');
const quizz1 = document.querySelector('.quizz1');
const height1 = team.clientHeight;
const height2 = quizz1.clientHeight;
window.addEventListener('scroll', () => {
  if (window.scrollY > height1 + height2 - 15) {
    footer.classList.add('scroll1');
  } else {
    footer.classList.remove('scroll1');
  }
});

// formulaire pour rentrer le nom des equipe
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
const random = Math.floor(Math.random() * 100) + 1;
const btnWin = document.getElementById('btnWin');
const winnerTexte = document.querySelector('.winner');
const loserTexte = document.querySelector('.loser');
btnWin.addEventListener('click', () => {
  const modal = document.getElementById('modal');
  const teamWin = document.getElementById('teamWin');
  if (random < 50) {
    ((modal.style.display = 'flex') && (teamWin.innerHTML = team1.innerHTML) && (btnWin.style.display = 'none'));
    const winner = team1.innerHTML;
    const loser = team2.innerHTML;
    winnerTexte.innerHTML = winner;
    loserTexte.innerHTML = loser;
  } else {
    ((modal.style.display = 'flex') && (teamWin.innerHTML = team2.innerHTML) && (btnWin.style.display = 'none'));
    const winner = team2.innerHTML;
    const loser = team1.innerHTML;
    winnerTexte.innerHTML = winner;
    loserTexte.innerHTML = loser;
  }
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

// slide horizontal

const items = document.querySelectorAll('.question');
const nbSlide = items.length;
const suivant = document.querySelector('.right');
let slideIndex = 0;
const answer2 = document.querySelectorAll('h3');
const wrongInGreen = document.querySelectorAll('.rightAnswer');

items[0].style.display = 'block';
/* items[slideIndex + 1].style.display = 'none';
items[slideIndex + 2].style.display = 'none';
items[slideIndex + 3].style.display = 'none';
items[slideIndex + 4].style.display = 'none';
items[slideIndex + 5].style.display = 'none';
items[slideIndex + 6].style.display = 'none';
items[slideIndex + 7].style.display = 'none';
items[slideIndex + 8].style.display = 'none';
items[slideIndex + 9].style.display = 'none'; */

function slideSuivante() {
  items[slideIndex].style.display = 'none';

  if (slideIndex < nbSlide) {
    slideIndex++;
  } else {
    slideIndex = 1;
  }
  items[slideIndex].style.display = 'block';
  if (slideIndex === nbSlide - 1) {
    suivant.style.display = 'none';
  }
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
}

function keyPress(e) {
  if (e.keyCode === 37) {
    slidePrecedente();
  } else if (e.keyCode === 39) {
    slideSuivante();
  }
}
document.addEventListener('keydown', keyPress);

// function background color change
const scoreCanneleTexte = document.querySelector('.scorecannele');
const scoreMacaronTexte = document.querySelector('.scoremacaron');
let scoreCannele = 0;
let scoreMacaron = 0;
for (let i = 0; i < answer2.length; i++) {
  function testAnswer() {
    const testAnswer = answer2[i].className;
    if (testAnswer == 'wrongAnswer') {
      answer2[i].className = "wrongAnswerRed";
      wrongInGreen[slideIndex - 1].className = "rightAnswerGreen";
    }
    if (testAnswer == 'rightAnswer') {
      answer2[i].className = "rightAnswerGreen";
      if (slideIndex % 2 == 0) {
        scoreCannele++; scoreCanneleTexte.innerHTML = scoreCannele;
        // eslint-disable-next-line semi
      } else scoreMacaron++;
      scoreMacaronTexte.innerHTML = scoreMacaron;
    }
  }
  answer2[i].addEventListener('click', testAnswer);
};
/* question finale */

const chocolatine = document.querySelector('.chocolatine');
const pain = document.querySelector('.pain');
const newImg = document.getElementById("chocoId");
chocolatine.addEventListener('click', () => {
  newImg.src = "/assets/etchebest-philippe.gif";
  newImg.style.width = "100%";
  newImg.style.height = "40vh";
  chocolatine.style.display = "none";
  pain.style.display = "none";
});

pain.addEventListener('click', () => {
  newImg.src = "/assets/etchebest-xari.gif";
  newImg.style.width = "100%";
  newImg.style.height = "50vh";
  chocolatine.style.display = "none";
  pain.style.display = "none";
});