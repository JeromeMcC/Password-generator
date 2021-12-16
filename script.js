// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseArray = ["a","b","c","d"];
var numberArray = ["1","2","3","4"];
var uppercaseArray = ["A","B","C","D"];
var symbolArray =["!","@","#","$"]
var allDigits = [...lowercaseArray, ...numberArray, ...uppercaseArray, ...symbolArray]

function generatePassword() 
{
  var CharNum= window.prompt("How many characters do you want?")
  var uppercase = window.prompt("Do you want Uppercase?");
  var lowercase = window.prompt("Do you want Lowercase?");
  var numbers = window.prompt("Do you want Numbers?");
  var symbols = window.prompt("Do you want Symbols?");


  if (uppercase === "yes" && lowercase === "yes" && numbers === "yes" && symbols === "yes"){ console.log (allDigits)
  } else { console.log (numberArray)}
}
  //for(var i=0; i <= CharNum; i++){}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
