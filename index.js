// Basic Calculator
function appendValue(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    let current = document.getElementById('display').value;
    document.getElementById('display').value = current.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch {
        alert('Invalid expression');
    }
}

// Tabs
function showTab(tab) {
    document.getElementById('calc').classList.add('hidden');
    document.getElementById('convert').classList.add('hidden');
    document.getElementById(tab).classList.remove('hidden');
}

// Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle('dark');
}

// Unit Conversions
function convertLength(type) {
    let meters = document.getElementById('meters');
    let feet = document.getElementById('feet');
    if (type === 'm') {
        feet.value = (meters.value * 3.28084).toFixed(2);
    } else {
        meters.value = (feet.value / 3.28084).toFixed(2);
    }
}

function convertWeight(type) {
    let kg = document.getElementById('kg');
    let lb = document.getElementById('lb');
    if (type === 'kg') {
        lb.value = (kg.value * 2.20462).toFixed(2);
    } else {
        kg.value = (lb.value / 2.20462).toFixed(2);
    }
}

function convertTemp(type) {
    let c = document.getElementById('celsius');
    let f = document.getElementById('fahrenheit');
    if (type === 'c') {
        f.value = ((c.value * 9 / 5) + 32).toFixed(2);
    } else {
        c.value = ((f.value - 32) * 5 / 9).toFixed(2);
    }
}

// Keyboard support
document.addEventListener('keydown', (e) => {
    const keys = "0123456789+-*/().";
    if (keys.includes(e.key)) {
        appendValue(e.key);
    } else if (e.key === "Enter") {
        calculate();
    } else if (e.key === "Backspace") {
        backspace();
    }
});