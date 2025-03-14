const inputDisplay = document.getElementById("input-display");
const outputDisplay = document.getElementById("output-display");

document.addEventListener("keydown", (event) => {
    const validKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", "Escape", "Enter", "Backspace"];

    if (validKeys.includes(event.key)) {
        if (event.key === "Escape") {
            calOperate("AC");
        } else if (event.key === "Backspace") {
            calOperate("del");
        } else if (event.key === "Enter") {
            resultCalculate();
        } else {
            expression(event.key);
        }
    }
});

function expression(value) {
    let intialState = 0;
    if (inputDisplay.innerText === '0' && intialState === 0) {
        inputDisplay.innerText = "";
        intialState = 1;
    }
    inputDisplay.innerText += value;
}

function calOperate(op) {
    if (op === 'AC') {
        inputDisplay.innerText = "0";
        outputDisplay.innerText = "0";
    } else if (op === 'del') {
        inputDisplay.innerText = inputDisplay.innerText.slice(0, -1) || "0";
    }
}


function resultCalculate() {
    try {
        outputDisplay.innerText = eval(inputDisplay.innerText);
    } catch (error) {
        outputDisplay.innerText = "Error";
    }
}
