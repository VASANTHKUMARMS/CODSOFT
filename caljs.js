let display = document.getElementById('display');
let input = '';

function appendToDisplay(value) {
    input += value;
    display.innerText = input;
}

function clearDisplay() {
    input = '';
    display.innerText = '0';
}

function calculate() {
    try {
        input = eval(input).toString();
        display.innerText = input;
    } catch (error) {
        display.innerText = 'Error';
    }
}
