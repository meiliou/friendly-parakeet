// *********************************************** //
// Module 3. Challenge - Random password generator //
// *********************************************** //

// ********************************************* //
// ---------------- Variables ------------------ //
// ********************************************* //

var chosenChars = "";
var numArray = "";
var randomNumber = "";

var charInfo = [
  {
    type: "upper case letters",
    characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  },
  {
    type: "lower case letters",
    characters: "abcdefghijklmnopqrstuvwxyz"
  },
  {
    type: "numbers",
    characters: "0123456789"
  },
  {
    type: "special characters",
    characters: "!@#$%^&*()_+"
  }
];

// ********************************************* //
// ---------- Pass-through functions ----------- //
// ********************************************* //

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// ********************************************* //
// ------------- Generate Password ------------- //
// ********************************************* //

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

  // loops through various prompts to select character types
  for (var i = 0; i < charInfo.length; i++) {
    // create new variable to loop through window.prompts
    var charType = charInfo[i].type;
    console.log(charType);
    var choice = window.confirm("Would you like " + charType +  " in your password?");
    if (choice) {
      // alert to let user know that specific character set has been added
      window.alert("adding " + charType + " to your password");
      // adds each additional set of characters to the chosen characters list
      var characters = charInfo[i].characters;
      chosenChars = chosenChars + characters;
      console.log(chosenChars);
    }
  }
  // if the set is not empty, alert to say password is generating
  if (chosenChars) {
    window.alert("Okay, let's generate a password...");
  }
  // otherwise ask user to please choose something to add to the list, reruns whole function

  else {
    window.alert("please add SOMETHING... ANYTHING!");
    generatePassword();
  }

  // Loop this multiple times to generate array of random characters
  var temp = new Array();
  for (var i = 0; i < passwordLength; i++) {
    randomNumber = Math.floor(Math.random() * 74);
    numArray = chosenChars[randomNumber];
    temp.push(numArray);
  }
  // Returns the array into a string
  password = temp.join("");
  return password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);