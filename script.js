// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase ="abcdefghijklmnopqrstuvwxyz";
var uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num ="0123456789";
var special ="!@#$%^&*?+,.';:\|`~+=_-<>[]{}()";
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
      var length=prompt("How many characters do you want the password to have?");
      if(length <128 || length >7){
        alert("Password must contain no less that 8 characters and no more than 128 characters")
      }
      var answerLower=confirm("Do you want lowercase letters in the password?");
      var answerUpper=confirm("Do you want uppercase letters in the password?");
      var answerNumber=confirm("Do you want numbers in the password?");
      var answerSpecial=confirm("Do you want special characters in the password?");

      
      if(answerLower === true){
        var lowerChoice = lowercase[Math.floor(Math.random() * lowercase.length)];
      }
      else if(answerUpper === true){
        var upperChoice = uppercase[Math.floor(Math.random() * uppercase.length)];
      }
      else if(answerNumber === true){
        var numberChoice = num[Math.floor(Math.random() * num.length)];
      }
      else if(answerSpecial === true){
        var specialChoice = special[Math.floor(Math.random() * special.length)];
      }
      else {
        alert("Must Contain a character");
               }
      } 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
