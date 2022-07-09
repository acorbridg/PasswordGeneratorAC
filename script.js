// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength;  
var lowercaseChar = String.fromCharCode(...Array(128).keys()).slice(97,123);
  console.log(lowercaseChar);
  //https://gist.github.com/bendc/1e6af8f2d8027f2965da?permalink_comment_id=3792470#gistcomment-3792470

var uppercaseChar = String.fromCharCode(...Array(128).keys()).slice(65,91);
  console.log(uppercaseChar);

var numericChar = String.fromCharCode(...Array(128).keys()).slice(48,58);
console.log(numericChar);

var specialChar1 = String.fromCharCode(...Array(128).keys()).slice(32,48);
var specialChar2 = String.fromCharCode(...Array(128).keys()).slice(58,65);
var specialChar3 = String.fromCharCode(...Array(128).keys()).slice(91,97);
var specialChar4 = String.fromCharCode(...Array(128).keys()).slice(123,127);
var specialChar = specialChar1 + specialChar2 + specialChar3 + specialChar4;

console.log(specialChar);

function lengthCheck() {
  passwordLength = prompt("How many characters would you like your password to be?");
  if (passwordLength < 8) {
    alert("Not enough characters. Minimum 8 characters");
    return lengthCheck();
  } else if (passwordLength > 128) {
    alert("Too many characters. Maximum 128 characters");
    return lengthCheck();
  } else if (isNaN(passwordLength)) {
    alert("Must be a number");
    return lengthCheck();
  }
  // console.log(passwordLength)
  return passwordLength;
}

function lowercaseCheck() {
  hasLowercase = prompt("Would you like to include lowercase? (yes or no)");
  if (hasLowercase === "yes" || hasLowercase === "y" ) {
    return true;
  } else if (hasLowercase === "no" || hasLowercase === "n" ) {
    return false;
  } else {
    return lowercaseCheck();
  }
};

function uppercaseCheck() {
  hasUppercase = prompt("Would you like to include UPPERCASE?!?!? (yes or no)");
  if (hasUppercase === "yes" || hasUppercase === "y" ) {
    return true;
  } else if (hasUppercase === "no" || hasUppercase === "n" ) {
    return false;
  } else {
    return uppercaseCheck();
  }
};

function numericCheck() {
  hasNumeric = prompt("Would you like to include numbers? (yes or no)");
  if (hasNumeric === "yes" || hasNumeric === "y" ) {
    return true;
  } else if (hasNumeric === "no" || hasNumeric === "n" ) {
    return false;
  } else {
    return numericCheck();
  }
};

function specialCheck() {
  hasSpecial = prompt("Would you like to include special? (yes or no)");
  if (hasSpecial === "yes" || hasSpecial === "y" ) {
    return true;
  } else if (hasSpecial === "no" || hasSpecial === "n" ) {
    return false;
  } else {
    return specialCheck();
  }
};

function generatePassword() {
  var pwdlength = lengthCheck();
  var pwdlower = lowercaseCheck();
  var pwdupper = uppercaseCheck();
  var pwdnumeric = numericCheck();
  var pwdspecial = specialCheck();
  
  if (!pwdlower && !pwdupper && !pwdnumeric && !pwdspecial) {
    alert("At least one option must be selected.")
    return generatePassword();
  }
  var pwd = "";
  var allowed = "";
  if (pwdlower) {
    allowed += lowercaseChar;
  }
  if (pwdupper) {
    allowed += uppercaseChar;
  }
  if (pwdnumeric) {
    allowed += numericChar;
  }
  if (pwdspecial) {
    allowed += specialChar;
  }
 
  for (let i = 0; i < passwordLength; i++) {
    pwd += allowed.charAt(Math.floor(Math.random() * allowed.length));
  }

  if (pwdlower) {
    pwd = pwd.substring(0,1) + lowercaseChar.charAt(Math.floor(Math.random() * lowercaseChar.length)) + pwd.substring(2);
  }
  if (pwdupper) {
    pwd = pwd.substring(0,2) + uppercaseChar.charAt(Math.floor(Math.random() * uppercaseChar.length)) + pwd.substring(3);
  }
  if (pwdnumeric) {
    pwd = pwd.substring(0,3) + numericChar.charAt(Math.floor(Math.random() * numericChar.length)) + pwd.substring(4);
  }
  if (pwdspecial) {
    pwd = pwd.substring(0,4) + specialChar.charAt(Math.floor(Math.random() * specialChar.length)) + pwd.substring(5);
  }
  return pwd;
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
