// Assignment code here
var lengthofpassword = 8;
var choice = [];

var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","y","Z"];
var lowercase= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var special=["!","@","#","$","*","$","&","_","?"];
var numbers=["1","2","3","4","5","6","7","8","9"];
function generatePassword() {
  console.log("test");

  return "Working";
}

function generatePassword(){

}


function popup(){
  lengthofpassword.length = parseInt(prompt("Choose between 8-25")); //Length of numbers
  if(isNaN(lengthofpassword) || lengthofpassword < 8 || lengthofpassword > 25){
  alert("It has to be 8-25 numbers");
  return false;
}

if(confirm("Lowercase in password")){
  choice = choice.concat(lowercase);
}
if(confirm("Uppercase in password")){
  choice = choice.concat(uppercase);
}
if(confirm("Special in password")){
  choice = choice.concat(special);
}
if(confirm("Numbers in password")){
  choice = choice.concat(numbers);
}

return true;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); //Reference

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
