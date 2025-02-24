let display = document.getElementById('display');
let expression = '';

function appendToDisplay(value) {
    expression += value;
    display.textContent = expression;
}

function clearDisplay() {
    expression = '';
    display.textContent = '0';
}

function deleteLastChar() {
    expression = expression.slice(0, -1);
    display.textContent = expression === '' ? '0' : expression;
}

function calculate() {
    try {
        let result = eval(expression);
        display.textContent = result;
        expression = '';
    } catch (error) {
        display.textContent = 'Error';
        expression = '';
    }
}

function changeSign() {
    if (expression.startsWith('-')) {
        expression = expression.substring(1);
    } else {
        expression = '-' + expression;
    }
    display.textContent = expression;
}
