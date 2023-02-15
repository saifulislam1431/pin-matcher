document.getElementById('pin-generate-btn').addEventListener('click', function() {
    document.getElementById('pin-display').value = getPin();
})

document.getElementById('calculator').addEventListener('click', function(e) {
    const targetValue = e.target.innerText;
    const userInput = document.getElementById('user-input');
    const previousInput = userInput.value;
    if (isNaN(targetValue)) {


        if (targetValue === 'C') {
            userInput.value = '';
        } else if (targetValue === '<') {
            const digits = previousInput.split('');
            digits.pop();
            const remaining = digits.join('');
            userInput.value = remaining;
        }

    } else {

        const newInput = previousInput + targetValue;
        userInput.value = newInput;
    }
})

document.getElementById('submit').addEventListener('click', function() {
    checkPin();
})