// the button in HTML is identified here by generateBtn
const generateBtn = document.querySelector('#generate');

//This writes the password to the #password input in HTML
//function writePassword() {
  //let password = generatePassword();
  //let passwordText = document.querySelector('#password');

  //passwordText.value = password;
//}

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

//when button clicked - send alert to intro 
generateBtn.addEventListener('click', function(){
  alert('You are about to select the criteria for your password.')
  let lcase = prompt ('Would you like lowercase letters? (y/n)');
  console.log(lcase);
  let uCase = prompt ('Would you like uppercase letters? (y/n)');
  console.log(uCase);
  let num = prompt ('Would you like numerals? (y/n)');
  console.log(num);
  let specChar = prompt ('Would you like special characters? (y/n)');
  console.log(specChar);
  let pwLength = prompt ('Please select character length of your password between 8 to 128.');
  console.log(pwLength);  
});

//This takes the above perameters and converts to the random password
generateBtn.addEventListener('click', () => {
  const length = (Number(pwLength.value));

  console.log(length)
})



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





// Add event listener to generate button
//generateBtn.addEventListener('click', writePassword);






  
   









