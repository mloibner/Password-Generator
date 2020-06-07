// the button in HTML is identified here by generateBtn
const generateBtn = document.querySelector('#generate');

const lowerCase = arrayFromLowToHigh(65, 90)
const upperCase = arrayFromLowToHigh(97, 122)
const numberCase = arrayFromLowToHigh(48, 57)
const symbolCase = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64).concat(
    arrayFromLowToHigh(91, 96).concat(
      arrayFromLowToHigh(123, 126)
    )
  )
)



generateBtn.addEventListener('click', e => {
  e.preventDefault()

  let lcase = confirm ('Would you like lowercase letters? (y/n)');
  console.log(lcase);
  let uCase = confirm ('Would you like uppercase letters? (y/n)');
  console.log(uCase);
  let num = confirm ('Would you like numerals? (y/n)');
  console.log(num);
  let specChar = confirm ('Would you like special characters? (y/n)');
  console.log(specChar);
  let pwLength = prompt ("Choose password length between 8 and 128");
  console.log(pwLength);

  const length =  +pwLength;
  const hasLower = lcase;
  const hasUpper = uCase;
  const hasNumbers = num;
  const hasSymbols = specChar;

  // const randomFunc = {
  //   lower: getRandomLower(),
  //   upper: getRandomUpper(),
  //   number: getRandomNumber(),
  //   symbol: getRandomSymbol()
  // };

  const password = generatePassword(length, hasLower, hasNumbers, hasSymbols, hasUpper);
 
});

function generatePassword(length, hasLower, hasNumbers, hasSymbols, hasUpper){
  
}

function arrayFromLowToHigh(low, high) {
  const array = []
  for(let i = low; i<= high; i++) {
    array.push(i)
  }
  return array
}

function setCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}



// Add event listener to generate button
//generateBtn.addEventListener('click', writePassword);



//Generate Password function
// function generatePassword(lower, upper, number, symbol, length) {

// let generatedPassword = '';

// const typesCount = lower + upper + number + symbol;

// console.log("typesCount: ", typesCount);

// const typesArr = [{lower}, {upper}, {number}, {symbol}].filter
// (item => Object.values(item)[0]
// );

// console.log("typesArr: ", typesArr);

// if(typesCount === 0) {
//   return '';

// }

// for(let i=0; i < length; i += typesCount) {
//   typesArr.forEach(type=> {
//     const funcName = Object.keys(type)[0];

//     generatedPassword += randomFunc [funcName]();
//   })
// }
// const finalPassword = generatedPassword.slice (0, length);

// return finalPassword;
// }

// //This writes the password to the #password input in HTML
//  function writePassword() {
//   let password = generatePassword();
//   let passwordText = document.querySelector('#password');
//   passwordText.value = password;

// }


// //Generator functions

// function getRandomLower() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function getRandomUpper() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

// function getRandomNumber() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);    
// }

// function getRandomSymbol() {
//   const symbols = '!@#$%^&*_~`/?><'
//   return symbols [Math.floor(Math.random() * symbols.length)];      
// }












  
   









