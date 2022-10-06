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
const quizz1 = document.querySelector('.quizz1')
const height1 = team.clientHeight;
const height2 = quizz1.clientHeight;
window.addEventListener('scroll', () => {
  if (window.scrollY > height1 + height2 - 10) {
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

const scoreCanneleTexte = document.querySelector('.scorecannele');
const scoreMacaronTexte = document.querySelector('.scoremacaron');

let scoreCannele = 0;
let scoreMacaron = 0;

for (let i = 0; i < answer2.length; i++) {

  function testAnswer() {
    const testAnswer = answer2[i].className;

    if (testAnswer == 'wrongAnswer') {
      answer2[i].className = "wrongAnswerRed";
    }
    if (testAnswer == 'rightAnswer') {
      answer2[i].className = "rightAnswerGreen";
      if (slideIndex % 2 == 0) {
        scoreCannele++;
        scoreCanneleTexte.innerHTML = scoreCannele;
      } else scoreMacaron++
      scoreMacaronTexte.innerHTML = scoreMacaron;
    }
  }

  answer2[i].addEventListener('click', testAnswer);
}


/* question finale */

const chocolatine = document.querySelector('.chocolatine');
const pain = document.querySelector('.pain');
const newImg = document.getElementById("chocoId");

chocolatine.addEventListener('click', () => {

  newImg.src = "/assets/etchebest-philippe.gif"
  newImg.style.width = "70vw"
  newImg.style.height = "50vh"

})

pain.addEventListener('click', () => {

  newImg.src = "/assets/etchebest-xari.gif"
  newImg.style.width = "70vw"
  newImg.style.height = "50vh"
})

/*
const start = document.querySelector('#btnClose');

start.addEventListener('click', () => {

  team.style.display = 'none'
  container.style.display = 'none'
})*/