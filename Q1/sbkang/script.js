const computer = document.querySelector("#computer");
const button = document.querySelectorAll(".btn");

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
        let userSelect = String(this.textContent).substring(0, 1);
        let diff = rsp.indexOf(computerSelect) - rsp.indexOf(userSelect);

        if (diff == 0) {
            alert("Draw !");
        } else if (diff == 1 || diff == -2) {
            alert("You Win !");
        } else {
            alert("You Lose !");
        }

        clearInterval(interval);
        setTimeout(function () {
            intervalStart();
        }, 1000);
    });
});
