let display = document.getElementById('display');
let expression = '';

function clearDisplay() {
    expression = '';
    updateDisplay();
}

function deleteLast() {
    expression = expression.slice(0, -1);
    updateDisplay();
}

function appendNumber(number) {
    expression += number;
    updateDisplay();
}

function appendOperator(operator) {
    expression += operator;
    updateDisplay();
}

function calculateResult() {
    try {
        expression = eval(expression).toString();
        updateDisplay();
    } catch (error) {
        display.textContent = 'Error';
    }
}

function updateDisplay() {
    display.textContent = expression;
}
