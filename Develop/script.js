// Module 3. Challenge - Random password generator

// --------- Game Info/Variables --------- //

// character options
/*var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbericChars = "0123456789";
var specialChars = "!@#$%^&*()_+";*/
var chosenChars = "";
var typesArr = "";
var randomNumber = "";

var passwordOptions = [ 
  {
    name: "lowercase letters", 
    characters: "abcdefghijklmnopqrstuvwxyz"
  },
  {
    name: "uppercase letters", 
    characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  },
  {
    name: "numbers", 
    characters: "0123456789"
  },
  {
    name: "special characters", 
    characters: "!@#$%^&*()_+"
  }
];


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
 
  var chooseOptions = function () {
    // prompts to select character types
    var choice = window.confirm("Would you like any " + passwordOptions.name[i] +  " in your password?");
    if (choice) {
      window.alert("adding " + passwordOptions.name[i]+ " to your password");
      chosenChars = chosenChars + lowerChars;
      console.log(chosenChars);
    }
    // aaaargh
    for (var i = 0; i < passwordOptions.length; i++) {
    var pickedOption = passwordOptions[i];
    chooseOptions(pickedOption.name[i]);
    console.log(pickedOption.name[i]);
    }
  }
  chooseOptions();

}

/*
// --------- Confirm Criteria --------- //

var confirmCriteria = function() {
  // ask if they'd like to add criteria.type
  var promptCriteria = window.prompt("Would you like to add " + criteria[i] + " ? Enter 'yes' or 'no' to choose.");


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
