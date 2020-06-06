// the button in HTML is identified here by generateBtn
const generateBtn = document.querySelector('#generate');

//This writes the password to the #password input in HTML
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

//Generator functions

function getRandomLower() {


}

console.log(string.fromCharCode(97))


















let values = ["abcdefghijklmnopqrstuvwxyz","ABCDEFGHIJKLMNOPQRSTUVWXYZ","1234567890","/*-+!@#$%^&*_`~"]

function generatePassword(){
  let userselection = '';
  for(var i = 0; i <= userselection; i++) {
    userselection = userselection + values.charAt(Math.floor(Math.random() * Math.floor(value.pwLength-1)));
  }
}


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);



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
})
//prompt user for password criteria


  
   









