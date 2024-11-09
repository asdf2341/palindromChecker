function checkPalindrome() {
    const textInput = document.getElementById("text-input").value.trim(); 
    const resultMessage = document.getElementById("result");

    if (textInput === "") {
        alert("Please input a value");
        return; 
    }

    const cleanedInput = textInput.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedInput = cleanedInput.split('').reverse().join('');

    if (cleanedInput === reversedInput) {
        resultMessage.innerHTML = `<strong>${textInput}</strong> is a palindrome.`;
    } else {
        resultMessage.innerHTML = `<strong>${textInput}</strong> is not a palindrome.`;
    }

    resultMessage.classList.remove("hidden");
}