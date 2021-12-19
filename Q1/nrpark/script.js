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
}, 500);

const btn = document.querySelectorAll(".btn");
btn.forEach(function (element) {
  element.addEventListener("click", function () {
    switch (this.innerHTML) {
      case "바위":
        userVal = "1";
        break;
      case "보":
        userVal = "2";
        break;
      case "가위":
        userVal = "0";
        break;
    }
    clearInterval(runGame);
    checkGame(randVal.innerHTML, userVal);
  });
});

// CHECK:: 아직 구현 못함 ㅠ
let btn_restart = document.querySelector(".btn_restart");
btn_paper.addEventListener("click", function () {
  runGame = runGame;
});
