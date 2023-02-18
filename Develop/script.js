// Module 3. Challenge - Random password generator

// --------- Game Info/Variables --------- //

// character options
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()_+";
var chosenChars = "";
var numArray = "";
var randomNumber = "";


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Generate password

function generatePassword() {
  // window prompt so user can decide password length
  var passwordLength = window.prompt("Please choose your password length (between 8 - 128 characters).");
  console.log(passwordLength);
  if (passwordLength>7 && passwordLength <128) {
    window.alert("Okay, let's generate a password with " + passwordLength + " characters");
  }
  else {
    window.alert("Please pick a number between 8 and 128");
    generatePassword();
  }
 
    // prompts to select character types
    var upperChoice = window.confirm("Would you like uppercase letters in your password?");
    if (upperChoice) {
      window.alert("adding uppercase letters to your password");
      chosenChars = chosenChars + upperChars;
      console.log(chosenChars);
    }
    var lowerChoice = window.confirm("Would you like lowercase letters in your password?");
    if (lowerChoice) {
      window.alert("adding lowercase letters to your password");
      chosenChars = chosenChars + lowerChars;
      console.log(chosenChars);
    }
    var numericChoice = window.confirm("Would you like numbers in your password?");
    if (numericChoice) {
      window.alert("adding number to your password");
      chosenChars = chosenChars + numericChars;
      console.log(chosenChars);
    }
    var specialChoice = window.confirm("Would you like special characters in your password?");
    if (specialChoice) {
      window.alert("adding special characters to your password");
      chosenChars = chosenChars + specialChars;
      console.log(chosenChars);
    }
    if (chosenChars) {
      window.alert("okay, let's generate a password...");
    }
    else {
      window.alert("please add SOMETHING... ANYTHING!");
    }

    var temp = new Array();
    for (var i = 0; i < passwordLength; i++) {
    randomNumber = Math.floor(Math.random() * chosenChars.length);
    numArray = chosenChars[randomNumber];
    temp.push(numArray);
    }
    password = temp.join("");
    return password;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
