let userInput = document.querySelector('input');

let previous = '';1
userInput.addEventListener('input', (e) => {
    let userInputValue = e.target.value;
    console.log(previous, userInputValue);
    if (userInputValue.length === 3) {
        userInput.value = `+(${userInputValue.substring(0, 3)}) - ${userInputValue[userInputValue.length - 1]}`;
    }
    previous = userInputValue
})
