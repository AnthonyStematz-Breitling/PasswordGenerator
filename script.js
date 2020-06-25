// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var num =["0","1","2","3","4","5","6","7","8","9"];
var special =["!","@","#","$","%","^","&","*","?","+",".","'",";",":","|","`","~","+","=","_","-","<",">","[","]","{","}","(",")"];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  password=[lowerChoice, numberChoice, specialChoice, upperChoice]

}
function generatePassword() {
      var divide=0;
      var length=parseInt(prompt("How many characters do you want the password to have?"));
      console.log(length);
      if(length >128 || length <8){
        alert("Password must contain no less that 8 characters and no more than 128 characters")
        return
      }
      var answerLower=confirm("Do you want lowercase letters in the password?");
      if(answerLower ===true){
        divide++
      }
      var answerUpper=confirm("Do you want uppercase letters in the password?");
      if(answerUpper===true){
        divide++
      }
      var answerNumber=confirm("Do you want numbers in the password?");
      if(answerNumber===true){
        divide++
      }
      var answerSpecial=confirm("Do you want special characters in the password?");
      if(answerSpecial===true){
        divide++
      }
      for ( var i=0; i<(length/divide); i++){
        console.log(i)
      if(answerLower === true){
        var lowerChoice = lowercase[Math.floor(Math.random() * lowercase.length)];
        console.log(lowerChoice);
      }
      if(answerUpper === true){
        var upperChoice = uppercase[Math.floor(Math.random() * uppercase.length)];
        console.log(upperChoice);
      }
      if(answerNumber === true){
        var numberChoice = num[Math.floor(Math.random() * num.length)];
        console.log(numberChoice);
      }
      if(answerSpecial === true){
        var specialChoice = special[Math.floor(Math.random() * special.length)];
        console.log(specialChoice);
      }
      if(answerLower === false &&
        answerUpper === false &&
        answerNumber === false &&
        answerSpecial === false) {
        alert("Must Contain a character");
      }
      }
      }
  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
