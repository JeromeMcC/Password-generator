// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numberArray = ["0","1","2","3","4","5","6","7","8","9"];
var uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var symbolArray =["!","@","#","$","%","^","&","*","+","-"];

function generatePassword() 
{
  var CharNum= parseInt(window.prompt("How many characters do you want? enter a number between 8 and 128"));
if (Number.isNaN(CharNum)){
  alert("enter valid number")
  return null 
}
if ( CharNum <8 || CharNum > 128){ 
alert ("enter a number between 8 - 128")
return null
}

  var uppercase = window.confirm("Do you want Uppercase?");
  var lowercase = window.confirm("Do you want Lowercase?");
  var numbers = window.confirm("Do you want Numbers?");
  var symbols = window.confirm("Do you want Symbols?");


  if (uppercase === false && lowercase === false && numbers === false && symbols === false){ 
  alert("must select criteria")
return null
} 
var finalPassword =[]
var potentialChar = []
var guaranteedChar = []
 
if (uppercase){
  potentialChar = potentialChar.concat(uppercaseArray);
  guaranteedChar.push(getrandomindex(uppercaseArray))
  
}
if (lowercase){
  potentialChar = potentialChar.concat(lowercaseArray);
 guaranteedChar.push(getrandomindex(lowercaseArray))
}
if (numbers){
 potentialChar = potentialChar.concat(numberArray);
guaranteedChar.push(getrandomindex(numberArray))
}
if (symbols){
 potentialChar = potentialChar.concat(symbolArray);
guaranteedChar.push(getrandomindex(symbolArray))
}
for(var i=0; i <= CharNum; i++){
  var possibleChar =getrandomindex(potentialChar)
  finalPassword.push(possibleChar)
}
for(i=0; i< guaranteedChar.length; i++){
  finalPassword[i]=guaranteedChar[i]
}
return finalPassword.join("")
}

function getrandomindex(arr){
 var random = Math.floor(Math.random() * arr.length)
var randomEl = arr[random]
return randomEl
}
 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
