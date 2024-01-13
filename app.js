let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "purple", "green"];

let stated = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (stated == false) {
        console.log("game is started");
        stated = true;
        levelUp();
    }

});
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 100);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 100);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);

    gameFlash(randBtn);

}
function checkAns(idx) {
    if (gameSeq[idx] === userSeq[idx]) {
        if (gameSeq.length == userSeq.length) {
            setTimeout(levelUp, 260);
        }
    } else {
        h2.innerHTML = `Game Over! your score was ${level} <br>enter any key to start again.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        resetGame();
    }

}
function btnPress() {
    let btn = this;
    userFlash(btn);

    let useroClor = btn.getAttribute("id");
    userSeq.push(useroClor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function resetGame() {
    stated = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}