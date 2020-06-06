const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numerals = "1234567890"
const specialChar = "/*-+!@#$%^&*_`~"

// the button in HTML is identified here by generateBtn
let generateBtn = document.querySelector('#generate');

//This writes the password to the #password input in HTML
//function writePassword() {
  //let password = generatePassword();
  //let passwordText = document.querySelector('#password');

  //passwordText.value = password;
}

// Add event listener to generate button
//generateBtn.addEventListener('click', writePassword);

//when button clicked - send alert to intro 
let start = generateBtn.addEventListener('click', alert('You are about to select the criteria for your password.'))
//prompt user for password criteria
if (start) {
   let lCase = alert ('Would you like lowercase letters?');
   console.log(lcase);
   let uCase = alert ('Would you like uppercase letters?');
   console.log(uCase);
   let num = alert ('Would you like numerals?');
   console.log(num);
   let specChar = alert ('Would you like special characters?');
   console.log(specChar);
   let pwLength = prompt ('Please select character length of your password between 8 to 128.');
   console.log(pwLength);
}








