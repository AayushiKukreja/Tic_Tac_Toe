
let audio = new Audio("ting.mp3")
let over = new Audio("gameover.mp3")
let turn = "X"
let isover = false;


function changeTurn() {
  return turn === "X" ? "0" : "X";
}

//Win
function Win() {
  let text = document.getElementsByClassName('text');
  let wins = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
  ]
  wins.forEach(e => {
    if ((text[e[0]].innerText === text[e[1]].innerText) && (text[e[2]].innerText === text[e[1]].innerText) && (text[e[0]].innerText !== "")) {
      document.querySelector('.info').innerText = text[e[0]].innerText + " Won"
      isover = true
      document.querySelector('.image').getElementsByTagName('img')[0].style.width = "200px";
      document.querySelector('.image').getElementsByTagName('img')[0].style.paddingTop="70px";
      document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
      document.querySelector(".line").style.width = "20vw";
    }
  })
}

//Game Over
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
  let text = element.querySelector('.text');
  element.addEventListener('click', function() {
    if (text.innerText === '') {
      text.innerText = turn;
      turn = changeTurn();
      audio.play();
      Win();
      if (!isover) {
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
      }
      if (isover) {
        over.play();
      }
    }
  })
})

//Reset
reset.addEventListener('click', function() {
  let texts = document.querySelectorAll('.text');
  Array.from(texts).forEach(e => {
    e.innerText = ""
  });
  turn = "X";
  isover = false
  document.querySelector(".line").style.width = "0vw";
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
  document.querySelector('.image').getElementsByTagName('img')[0].style.width = "0px"
})
