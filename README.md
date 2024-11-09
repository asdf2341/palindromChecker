# 🚀 Palindrome Checker

A **Palindrome Checker** is a simple web application that checks if a given word or phrase is a palindrome. A palindrome is a sequence of characters that reads the same forwards and backwards, ignoring punctuation, case, and spaces. This project fulfills a set of user stories and allows users to easily check if their input is a palindrome.

## 📝 Table of Contents

- [Live Demo](#live-demo)
- [Features](#features)
- [User Stories](#user-stories)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [License](#license)

## 🌐 Live Demo

Check out the live demo of the app: [Palindrome Checker](https://your-live-demo-link.com)

## ✨ Features

- Validates if the user input is a palindrome.
- Handles phrases with punctuation, spaces, and mixed casing.
- Provides user-friendly alerts and feedback messages.
- Responsive design and simple user interface.

## ✅ User Stories

1. The app should have an input element with an ID of `text-input`.
2. There should be a button with an ID of `check-btn` that triggers the palindrome check.
3. The result should be displayed in an element with an ID of `result`.
4. If the input is empty, an alert should appear prompting the user to "Please input a value".
5. The app should correctly identify whether the input is a palindrome and display the result.

### Example Cases:

| Input Text                              | Expected Output                            |
|-----------------------------------------|--------------------------------------------|
| `A`                                     | "A is a palindrome"                        |
| `eye`                                   | "eye is a palindrome"                      |
| `_eye`                                  | "_eye is a palindrome"                     |
| `race car`                              | "race car is a palindrome"                 |
| `not a palindrome`                      | "not a palindrome is not a palindrome"     |
| `A man, a plan, a canal. Panama`        | "A man, a plan, a canal. Panama is a palindrome" |
| `never odd or even`                     | "never odd or even is a palindrome"        |
| `nope`                                  | "nope is not a palindrome"                 |
| `almostomla`                            | "almostomla is not a palindrome"           |
| `My age is 0, 0 si ega ym.`             | "My age is 0, 0 si ega ym. is a palindrome" |
| `1 eye for of 1 eye.`                   | "1 eye for of 1 eye. is not a palindrome"  |
| `0_0 (: /-\ :) 0-0`                     | "0_0 (: /-\ :) 0-0 is a palindrome"        |
| `five|\_/|four`                         | "five|\_/|four is not a palindrome"        |

## 💻 Technologies Used

- HTML
- CSS
- JavaScript

## 🚀 Getting Started

To run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/palindrome-checker.git
   ```
2. Navigate to the project folder:
   ```bash
   cd palindrome-checker
   ```
3. Open `index.html` in your browser to view the app.

## 📚 Usage

1. Enter a word or phrase into the input field.
2. Click the "Check" button.
3. The result will be displayed below the input field, indicating whether the input is a palindrome.

## 📁 Project Structure

```
palindrome-checker/
├── index.html       # Main HTML file
├── styles.css       # CSS for styling
├── script.js        # JavaScript logic
└── README.md        # Project documentation
```

### `index.html`

Contains the HTML structure, including input elements and buttons.

### `styles.css`

Contains the styling for a clean and responsive design.

### `script.js`

Contains the JavaScript logic for validating the palindrome input.

## 🛠️ Functionality Overview

The palindrome check uses the following logic:

1. Removes all non-alphanumeric characters from the input.
2. Converts the input to lowercase.
3. Compares the processed string with its reverse.
4. Displays the result based on the comparison.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize the app and make it your own! Contributions and feedback are welcome. Happy Coding! 🎉
