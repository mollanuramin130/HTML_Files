let screen = document.getElementById('screen');
let currentInput = '';

function appendToScreen(value) {
    currentInput += value;
    screen.textContent = currentInput;
}

function calculateResult() {
    try {
        let result = eval(currentInput);
        currentInput = result.toString();
        screen.textContent = currentInput;
    } catch (error) {
        currentInput = 'Error';
        screen.textContent = currentInput;
    }
}

function clearScreen() {
    currentInput = '';
    screen.textContent = '0';
}
