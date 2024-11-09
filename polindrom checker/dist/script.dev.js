"use strict";

function checkPalindrome() {
  var textInput = document.getElementById("text-input").value.trim();
  var resultMessage = document.getElementById("result");

  if (textInput === "") {
    alert("Please input a value");
    return;
  }

  var cleanedInput = textInput.toLowerCase().replace(/[^a-z0-9]/g, '');
  var reversedInput = cleanedInput.split('').reverse().join('');

  if (cleanedInput === reversedInput) {
    resultMessage.innerHTML = "<strong>".concat(textInput, "</strong> is a palindrome.");
  } else {
    resultMessage.innerHTML = "<strong>".concat(textInput, "</strong> is not a palindrome.");
  }

  resultMessage.classList.remove("hidden");
}
//# sourceMappingURL=script.dev.js.map
