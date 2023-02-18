// Module 3. Challenge - Random password generator

// --------- Game Info/Variables --------- //

// character options
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbericChars = "0123456789";
var specialChars = "!@#$%^&*()_+";
var allChars = "";
var typesArr = "";
var randomNumber = "";


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// generate password

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




// Prompts to confirm characters
var lowerChoice = window.confirm("Would you like any lowercase letters in your password?");
if (lowerChoice) {
  alert("You chose to include lower case letters in your password.");
  allChars += lowerChars;
}
else {
  alert("You chose not to have any lower case letters in your password.");
}

var upperChoice = window.confirm("Would you like uppercase letters in your password?");
if (upperChoice) {
  alert("You chose to include upper case letters in your password.");
  allChars = upperChars + allChars;
}
else {
  alert("You chose not to have any upper case letters in your password.");
}

var numberChoice = window.confirm("Would you like to use numbers in your password?");
if (numberChoice) {
  alert("You chose to include numbers in your password. I mean, this could be good, or it could be bad.");
  allChars += numberChars;
}
else {
  alert("You chose not to have any numbers in your password. This is probably the right choice.");
}

var specialChoice = window.confirm("Would you like to use special characters (such as '!, ?, &, /, etc.' in your password?");
if (specialChoice) {
  alert("You chose to include special characters in your password.");
  allChars += specialChars;
}
else {
  alert("You chose not to have any special characters in your password.");
}

if (allChars) {
  alert("Ok, let's spit out some stuff that looks like a password for you.");
}
else {
  alert("Hey, bonehead. Pick at least one of the choices (lowercase letters, uppercase letters, numbers, and/or special characters) to include in your password! Otherwise, I have nothing to work with. Help me out here. Try again.");
}

var temp = new Array();
  // randomized character to add to password
  for (let i = 0; i < passwordLength; i++) {
    randomNumber = Math.floor(Math.random() * allChars.length);
    numbArray = allChars[randomNumber];
    temp.push(numbArray);
  }

  // make code suitable for password
  password = temp.join( " " );
  return password; 
}










/*
// --------- Confirm Criteria --------- //

var confirmCriteria = function() {
  // ask if they'd like to add criteria.type
  var promptCriteria = window.prompt("Would you like to add " + criteria[i] + " ? Enter 'yes' or 'no' to choose.");
  
  // validate prompt answer
  if (promptCriteria === "" || promptCriteria === null) {
    window.alert("Please respond with 'yes' or 'no'.");
    return confirmCriteria();
  }    

  // convert to lower case so less options to check
  promptCriteria = promptCriteria.toLowerCase();  

  // returns true if user says yes
  if (promptCriteria === "yes") {
    console.log("yep");
    return true;
  }
  // returns false if user says no
  if (promptCriteria === "no") {
    console.log("nope");
    return false;
  }
  // any other response will re-run this function 
  else {
    console.log("respond again");
    return confirmCriteria();
  }
};

// ----- Run and Remember Criteria choices ----- //
var runCriteria = function () {
  for (var i = 0; i < criteria.length; i++) {
    var pickedCriteriaObj = criteria[i];
    console.log(pickedCriteriaObj);
    confirmCriteria(pickedCriteriaObj);    
    // console.log(criteria[i]);
  };
};


// --------- Generate Password --------- //
*/













// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
