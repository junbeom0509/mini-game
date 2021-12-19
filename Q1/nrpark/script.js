function checkGame(randVal, userVal) {
  let text_result = document.querySelector(".text-result");
  console.log(text_result);
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
    text_result.innerHTML = "비겼습니다";
  } else {
    if (randVal == 0) {
      result = userVal == 1 ? "이겼습니다" : "졌습니다";
    } else if (randVal == 1) {
      result = userVal == 2 ? "이겼습니다" : "졌습니다";
    } else if (randVal == 2) {
      result = userVal == 0 ? "이겼습니다" : "졌습니다";
    }
    alert(result);
    text_result.innerHTML = result;
  }
}
function runGame() {
  randVal.innerHTML = arr[index++];
  if (index == arr.length) index = 0;
}

const randVal = document.querySelector(".content");
const arr = ["✊", "🖐", "✌️"];
let index = 0;
const btn = document.querySelectorAll(".btn");
const btn_restart = document.querySelector(".btn_restart");

let setGame = setInterval(runGame, 500);

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
    clearInterval(setGame);
    checkGame(randVal.innerHTML, userVal);
  });
});

btn_restart.addEventListener("click", function () {
  setGame = setInterval(runGame, 500);
});
