
const container = document.getElementsByClassName("container");
const header = document.getElementsByClassName("header");

window.addEventListener('scroll', () => {
    const { scrollTop, clientHeight } = document.documentElement;
    const topContainerToTopViewport = container.getBoundingClientRect().bottom;
    if (scrollTop > topContainerToTopViewport) {
        header.style.display = 'block';
    } else {
        header.style.display = 'none';
    }
});

// formulaire pour rentrer le nom des équipes
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const team1 = document.getElementById("team1");
const team2 = document.getElementById("team2");
const team3 = document.getElementById("team3")

btn1.addEventListener('click', () =>{
    const text1 = document.getElementById("text1").value;
    team1.innerHTML = text1 ;
});

btn2.addEventListener('click', () =>{
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
btnWin.addEventListener("click",  () => {

const random = Math.floor(Math.random() * 100) + 1;
const modal = document.getElementById("modal");
const teamWin = document.getElementById("teamWin");
const text1 = document.getElementById("text1").value;
const text2 = document.getElementById("text2").value;
            
    if (random < 50) {
        ((modal.style.display = "flex") && (teamWin.innerHTML = text1));
        } else { ((modal.style.display = "flex") && (teamWin.innerHTML = text2)) };
    });

// close modal    
const btnClose = document.getElementById("btnClose");
const modal = document.getElementById("modal");
btnClose.addEventListener("click", () => {
    modal.style.display = "none";
});

