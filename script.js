// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var num =["0","1","2","3","4","5","6","7","8","9"];
var special =["!","@","#","$","%","^","&","*","?","+",".","'",";",":","|","`","~","+","=","_","-","<",">","[","]","{","}","(",")"];
// Write password to the #password input
var password = "";
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
      var ofConfirms=0;
      var length=parseInt(prompt("How many characters do you want the password to have?"));
      console.log(length);
      if(length >128 || length <8){
        alert("Password must contain no less that 8 characters and no more than 128 characters");
        return;
      }
      var answerLower=confirm("Do you want lowercase letters in the password?");
      if(answerLower ===true){
        ofConfirms++;
      }
      var answerUpper=confirm("Do you want uppercase letters in the password?");
      if(answerUpper===true){
        ofConfirms++;
      }
      var answerNumber=confirm("Do you want numbers in the password?");
      if(answerNumber===true){
        ofConfirms++;
      }
      var answerSpecial=confirm("Do you want special characters in the password?");
      if(answerSpecial===true){
        ofConfirms++;
      }
      if(answerLower === false &&
        answerUpper === false &&
        answerNumber === false &&
        answerSpecial === false) {
        alert("Must Contain a character");
        return
        }
      for ( var i=0; i<(length/ofConfirms); i++){
        console.log(i);
      if(answerLower === true){
        var lowerChoice = lowercase[Math.floor(Math.random() * lowercase.length)];
        console.log(lowerChoice);
      }
      else{
        lowerChoice ="" ;
      }
      if(answerUpper === true){
        var upperChoice = uppercase[Math.floor(Math.random() * uppercase.length)];
        console.log(upperChoice);
      }
      else{
        upperChoice ="" ;
      }
      if(answerNumber === true){
        var numberChoice = num[Math.floor(Math.random() * num.length)];
        console.log(numberChoice);
      }
      else{
        numberChoice="" ;
      }
      if(answerSpecial === true){
        var specialChoice = special[Math.floor(Math.random() * special.length)];
        console.log(specialChoice);
      }
      else{
        specialChoice ="" ;
      }
        password = password.concat(lowerChoice, upperChoice, numberChoice, specialChoice);
        console.log(password)
      }
      password = password.substr(0,length);
      password = password.split("");
      console.log(password);
      password = password.sort((a,b) => 0.5 - Math.random());
      console.log(password);
      password = password.join("");
      console.log(password);
      return password
      } 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
