const inputSlider = document.getElementById("inputSlider");
const sliderValue = document.getElementById("sliderValue");
const inputValue = document.getElementById("inputValue");
const passBox = document.getElementById("passBox");
const lowerCaseEl = document.getElementById("lowercase");
const upperCaseEl = document.getElementById("uppercase");
const numberEl = document.getElementById("numbers");
const symbolEl = document.getElementById("symbols");
const generateBtn = document.getElementById("getBtn");
const copyicon = document.getElementById("copyicon");

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+{};:><[]';.,/\\=-?";

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", () => {
    sliderValue.textContent = inputSlider.value;
});

generateBtn.addEventListener("click", () => {
    passBox.value = generatePassword();
});

function generatePassword() {
    const length = inputSlider.value;
    let characters = "";
    let password = "";

    if (lowerCaseEl.checked) characters += lowercaseLetters;
    if (upperCaseEl.checked) characters += uppercaseLetters;
    if (numberEl.checked) characters += numbers;
    if (symbolEl.checked) characters += symbols;

    if (characters.length === 0) {
        alert("Please select at least one character type!");
        return "";
    }

    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}

copyicon.addEventListener("click", () => {
    if (passBox.value !== "") {
        navigator.clipboard.writeText(passBox.value);
        copyicon.innerText = "check";
        setTimeout(() => {
            copyicon.innerHTML = "content_copy";
        }, 3000);
    }
});

