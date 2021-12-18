const computer = document.querySelector("#computer");
const button = document.querySelectorAll(".btn");
const result = document.querySelector("#result");

// let imgArray = new Array();
// imgArray [0] = new Image();
// imgArray [0].src = "3_rock.png";
// imgArray [1] = new Image();
// imgArray [1].src = "4_sissors.png";
// imgArray [2] = new Image();
// imgArray [2].src = "2_paper.png";
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
["3_rock.png", "4_sissors.png", "2_paper.png"];