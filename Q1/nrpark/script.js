function checkGame(randVal, userVal) {
  switch (randVal) {
    case "✊":
      randVal = "1";
      break;
    case "🖐":
      randVal = "2";
      break;
    case "✌️":
      randVal = "0";
      break;
  }
  if (randVal == userVal) {
    alert("비겼습니다");
  } else {
    if (randVal == 0) {
      result = userVal == 1 ? "이겼습니다" : "졌습니다";
    } else if (randVal == 1) {
      result = userVal == 2 ? "이겼습니다" : "졌습니다";
    } else if (randVal == 2) {
      result = userVal == 0 ? "이겼습니다" : "졌습니다";
    }
    alert(result);
  }
}

const randVal = document.querySelector(".content");
const arr = ["✊", "🖐", "✌️"];
let index = 0;
const runGame = setInterval(function () {
  randVal.innerHTML = arr[index++];
  if (index == arr.length) index = 0;
}, 1000);

let btn_scissor = document.querySelector(".btn_scissor");
let btn_rock = document.querySelector(".btn_rock");
let btn_paper = document.querySelector(".btn_paper");

let btn_restart = document.querySelector(".btn_restart");

btn_scissor.addEventListener("click", function () {
  clearInterval(runGame);
  checkGame(randVal.innerHTML, 0);
});
btn_rock.addEventListener("click", function () {
  clearInterval(runGame);
  checkGame(randVal.innerHTML, 1);
});
btn_paper.addEventListener("click", function () {
  clearInterval(runGame);
  checkGame(randVal.innerHTML, 2);
});

// CHECK:: 아직 구현 못함 ㅠ
btn_paper.addEventListener("click", function () {
  runGame = runGame;
});
