// Assignment Code
var generateBtn = document.querySelector("#generate");

var pwdRequirments = {
  pwLength: 0,
  pwSpecialChar: ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"],
  pwNumbers: [1,2,3,4,5,6,7,8,9,0],
  pwUpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  pwLowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

}


function generatePassword(){
  var result = "";
  var charChoice = window.prompt("How many characters would you like? (8-128)");
  var specialChar = confirm("Click ok to include special characters.");
  var numbers1 = confirm("Click ok to include numbers.");
  var upperCase1 = confirm("Click ok to include uppercase letters.");
  var lowerCase1 = confirm("Click ok to include lowercase letters.");
  

while(pwdRequirments.pwLength < charChoice){
  if(specialChar==true && pwdRequirments.pwLength < charChoice)
  {
    var char1 = pwdRequirments.pwSpecialChar[Math.floor(Math.random() * 32)]
    result +=char1;
    pwdRequirments.pwLength++;
  }

  if(numbers1==true && pwdRequirments.pwLength < charChoice){
    var num1 = pwdRequirments.pwNumbers[Math.floor(Math.random() * 10)]
    result +=num1;
    pwdRequirments.pwLength++;
  }
  if(upperCase1==true && pwdRequirments.pwLength < charChoice){
    var up2 = pwdRequirments.pwUpperCase[Math.floor(Math.random() * 26)]
    result +=up2;
    pwdRequirments.pwLength++;
  }
  if(lowerCase1==true && pwdRequirments.pwLength < charChoice)
  {
    var low2 = pwdRequirments.pwLowerCase[Math.floor(Math.random() * 26)]
    result +=low2;
    pwdRequirments.pwLength++;
  }
 }
 return result; 

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






//1.prompt the user
//  a.) user has to choose between 8-128 characters.
// 
//2.select what criteria to include or not include
//