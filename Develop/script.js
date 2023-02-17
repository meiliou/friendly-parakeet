// Module 3. Challenge

var generatePassword = function() {
  var lowerCase = window.prompt("In your password, would you like lower case characters?");
  console.log(lowerCase);
};





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
