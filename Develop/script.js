// Module 3. Challenge


window.alert("Please select what characters you'd like to include in your password"); //check window working

// loop through list of criteria

// function to check which criteria user wants to add
var confirmCriteria = function() {
  // ask if they'd like xyz
  var promptCriteria = window.prompt("Would you like to add xyz? Enter 'yes' or 'no' to choose.");
  
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
  if (promptCriteria === "no") {
    console.log("nope");
    return false;
  }
  else {
    console.log("respond");
    return confirmCriteria();
  }
};
confirmCriteria();






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
