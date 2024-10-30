let isScientific = false;

// Function to append a value to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to calculate the result
function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value.replace(/Math./g, 'Math.'));
    } catch {
        display.value = 'Error';
    }
}

// Toggle between basic and scientific modes
document.getElementById('toggleMode').addEventListener('click', () => {
    const scientificButtons = document.getElementById('scientific');
    isScientific = !isScientific;

    if (isScientific) {
        scientificButtons.classList.add('active');
        document.getElementById('toggleMode').textContent = 'Switch to Basic';
    } else {
        scientificButtons.classList.remove('active');
        document.getElementById('toggleMode').textContent = 'Switch to Scientific';
    }
});

// Toggle dark and light modes
document.getElementById('toggleTheme').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    document.getElementById('toggleTheme').textContent = isDarkMode ? '🌞' : '🌙';
});
