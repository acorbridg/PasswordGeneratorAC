// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength;  
var lowercaseChar = String.fromCharCode(...Array(123).keys()).slice(97);
  console.log(lowercaseChar);
  //https://gist.github.com/bendc/1e6af8f2d8027f2965da?permalink_comment_id=3792470#gistcomment-3792470

var uppercaseChar = String.fromCharCode(...Array(123).keys()).slice(65,91);
  console.log(uppercaseChar);

var numericChar = String.fromCharCode(...Array(123).keys()).slice(48,58);
console.log(numericChar);

var specialChar = String.fromCharCode(...Array(123).keys()).slice(33-48).concat(String.fromCharCode(...Array(123).keys()).slice(59-65));
console.log(lowercaseChar);

function lengthCheck() {
  passwordLength = prompt("How many characters would you like your password to be?");
    if (passwordLength < 8) {
      alert("Not enough characters. Minimum 8 characters");
      lengthCheck();
   } else if (passwordLength > 128) {
    alert("Too many characters. Maximum 128 characters");
    lengthCheck();
   } else if (isNaN(passwordLength)) {
    alert("Must be a number dumbass");
    lengthCheck();
   }
   console.log(passwordLength)
   return passwordLength;
  };

function lowercaseCheck() {
  lowercaseCheck = prompt("Would you like to include lowercase?");
    if (lowercaseCheck === null || lowercaseCheck === "") {
      alert("yes or no?!");
      lowercaseCheck();
   } else if (lowercaseCheck === "yes" || lowercaseCheck === "y" ) {
       lowercaseCheck();
   } else if (lowercaseCheck === "no" || lowercaseCheck === "n" ) {
    lowercaseCheck();
   } else {
    alert("No input, type y or n for yes or no.");
    lowercaseCheck();
  }
  return lowercaseCheck;
  };

function uppercaseCheck() {
  uppercaseCheck = prompt("Would you like to include Uppercase?");
    if (uppercaseCheck === null || uppercaseCheck === "") {
      alert("yes or no?!");
      uppercaseCheck();
   } else if (uppercaseCheck === "yes" || uppercaseCheck === "y" ) {
       uppercaseCheck();
   } else if (uppercaseCheck === "no" || uppercaseCheck === "n" ) {
    uppercaseCheck();
   } else {
    alert("No input, type y or n for yes or no.");
    uppercaseCheck();
  }
  return uppercaseCheck;
  };

function numericCheck() {
  numericCheck = prompt("Would you like to include numbers?");
    if (numericCheck === null || numericCheck === "") {
      alert("yes or no?!");
      numericCheck();
   } else if (numericCheck === "yes" || numericCheck === "y" ) {
       numericCheck();
   } else if (numericCheck === "no" || numericCheck === "n" ) {
    numericCheck();
   } else {
    alert("No input, type y or n for yes or no.");
    numericCheck();
  }
  return numericCheck;
  };

  function specialCheck() {
    specialCheck = prompt("Would you like to include special characters?");
      if (specialCheck === null || specialCheck === "") {
        alert("yes or no?!");
        specialCheck();
     } else if (specialCheck === "yes" || specialCheck === "y" ) {
         specialCheck();
     } else if (specialCheck === "no" || specialCheck === "n" ) {
      specialCheck();
     } else {
      alert("No input, type y or n for yes or no.");
      specialCheck();
    }
    return specialCheck;
    };
  
























// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
