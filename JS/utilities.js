function generatePin() {
    const randomNumber = Math.round(Math.random() * 10000);
    return randomNumber;

}

function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    } else {
        getPin();
    }

}

function checkPin() {
    const userInput = document.getElementById('user-input');
    const input = userInput.value;

    const pinDisplay = document.getElementById('pin-display');
    const pin = pinDisplay.value;
    const wrong = document.getElementById('wrong');
    const right = document.getElementById('right');
    const action = document.getElementById('action-left');

    if (input == pin) {
        action.style.display = 'none'
        right.style.display = 'block';
        wrong.style.display = 'none';
    } else {
        action.style.display = 'block'
        right.style.display = 'none';
        wrong.style.display = 'block';
    }
}