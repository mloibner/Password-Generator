// the button in HTML is identified here by generateBtn
const generateBtn = document.querySelector('#generate');
let passwordText = document.querySelector('#password')

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

  let lcase = confirm('Would you like lowercase letters? (y/n')
  let uCase = confirm ('Would you like uppercase letters? (y/n)');
  let num = confirm ('Would you like numerals? (y/n)');
  let specChar = confirm ('Would you like special characters? (y/n)');
  let pwLength = prompt ("Choose password length between 8 and 128");
  
  const length =  +pwLength;
  const hasLower = lcase;
  const hasUpper = uCase;
  const hasNumbers = num;
  const hasSymbols = specChar;

  const password = generatePassword(length, hasNumbers, hasSymbols, hasUpper, hasLower);
  passwordText.innerHTML = password
 
});

function generatePassword(length, hasLower, hasNumbers, hasSymbols, hasUpper){

  let charCodes = lowerCase
  if(hasLower) charCodes = charCodes.concat(lowerCase)
  if(hasUpper) charCodes = charCodes.concat(upperCase)
  if(hasNumbers) charCodes = charCodes.concat(numberCase)
  if(hasSymbols) charCodes = charCodes.concat(symbolCase)

  const passwordCharacters = []
  for(let i = 0; i < length; i ++){
    const character = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(character))
  }
  return passwordCharacters.join('')
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















  
   









