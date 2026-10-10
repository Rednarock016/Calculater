const display = document.getElementById('display');

// Append numbers and operators to the screen
function appendValue(value) {
    display.value += value;
}

// Clear the entire display
function clearDisplay() {
    display.value = '';
}

// Delete the last entered character
function deleteChar() {
    display.value = display.value.slice(0, -1);
}

// Evaluate the mathematical expression
function calculateResult() {
    try {
        // Evaluate expression safely using Function (alternative to eval)
        display.value = Function('"use strict";return (' + display.value + ')')();
    } catch (error) {
        display.value = 'Error';
        setTimeout(clearDisplay, 1500);
    }
}