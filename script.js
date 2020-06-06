// the button in HTML is identified here by generateBtn
const generateBtn = document.querySelector('#generate');


let lcase = confirm ('Would you like lowercase letters? (y/n)');
console.log(lcase);
let uCase = confirm ('Would you like uppercase letters? (y/n)');
console.log(uCase);
let num = confirm ('Would you like numerals? (y/n)');
console.log(num);
let specChar = confirm ('Would you like special characters? (y/n)');
console.log(specChar);
let pwLength = prompt ('Please select character length of your password between 8 to 128.');
console.log(pwLength); 




//This writes the password to the #password input in HTML
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

//Event Listeners - Password Criteria
generateBtn.addEventListener('click', (lcase, uCase, num, specChar, pwLength) => {
  const length = + pwLength.value;
  const hasLower = lcase.checked;
  const hasUpper = uCase.checked;
  const hasNumbers = num.checked;
  const hasSymbols = specChar.checked;

  generatePassword(length, hasLower, hasNumbers, hasSymbols, hasUpper)
})


//Generate Password function
function generatePassword(lower, upper, number, symbol, length) {

let generatedPassword = '';

const typesCount = lower + upper + number + symbol;

console.log("typesCount: ", typesCount);

const typesArr = [{lower}, {upper}, {number}, {symbol}].filter
(item => Object.values(item)[0]
);

console.log("typesArr: ", typesArr);

if(typesCount === 0) {
  return '';

}

for(let i=0; i < length; i += typesCount) {
  typesArr.forEach(type=> {
    const funcName = Object.keys(type)[0];

    generatedPassword += randomFunc [funcName]();
  })
}
const finalPassword = generatedPassword.slice (0, length);

return finalPassword;
}


//Generator functions

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);    
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*_~`/?><'
  return symbols [Math.floor(Math.random() * symbols.length)];      
}












  
   









