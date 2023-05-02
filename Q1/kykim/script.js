const computer = document.querySelector("#computer");
const button = document.querySelectorAll(".btn");
const result = document.querySelector("#result");

let rsp = ["✊", "✌", "🤚"];
let idx = 0;
let interval;

function intervalStart() {
    interval = setInterval(function () {
        if (idx > 2) {
            idx = 0;
        }
        computer.innerText = rsp[idx];
        idx++;
    }, 100);
}

intervalStart();

button.forEach(function (element) {
    element.addEventListener("click", function () {
        let computerSelect = computer.innerText;
        let userSelect = this.textContent;
        let diff = rsp.indexOf(computerSelect) - rsp.indexOf(userSelect);
        clearInterval(interval);
        setTimeout(function () {
            intervalStart();
            result.innerText = "";
        }, 1000);
        if (computerSelect == userSelect) {
            result.innerText = "Draw !";
        } else if (diff == 1 || diff == -2) {
            result.innerText = "You Win !";
        } else {
            result.innerText = "You Lose !";
        }
    });
});


button.forEach(function (element) {
    element.addEventListener("click", function () {
        let ch_result = 0;
        let computerSelect = computer.innerText;
        let userSelect = this.textContent;
        let diff = rsp.indexOf(computerSelect) - rsp.indexOf(userSelect);
        const resultElement = document.getElementById('sum');
        let number = resultElement.innerText;
        clearInterval(interval);
        setTimeout(function () {
            intervalStart();
            result.innerText = "";
        }, 1000);
        if (computerSelect == userSelect) {
            result.innerText = "Draw !";
        } else if (diff == 1 || diff == -2) {
            number = parseInt(number) + 1;
            resultElement.innerText = number;
        } else {
            number = parseInt(number) - 1;
            resultElement.innerText = number;
        }
    });
});
