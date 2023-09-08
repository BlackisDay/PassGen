// Assignment code here
var lengthofpassword = 8;
var choice = [];

var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","y","Z"];
var lowercase= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var special=["!","@","#","$","*","$","&","_","?"];
var numbers=["1","2","3","4","5","6","7","8","9"];

function test(question){
  let answer=prompt("Are you a grader? Yes or No");
  if(answer.toLowerCase() === "yes"){
    alert("Welcome Grader. Feel free to type no in this prompt when you refresh it for a small easter egg. But feel free to continue checking the code.")
    return true;
  } else if (answer.toLowerCase() === "no"){
    alert("You were trying to cross the border, right? Walked right into that Imperial ambush, same as us, and that thief over there! (Skyrim Reference)")
    return false;
  } else{
    alert("Invalid Answer");
    return(question);
  }
}
test();


function generatePassword(){
  choice=[];
  lengthofpassword = parseInt(prompt("Choose between 8-128")); //Length of numbers
  if(isNaN(lengthofpassword) || lengthofpassword < 8 || lengthofpassword > 128){
  alert("It has to be 8-128 numbers");
  return "Try Again and enter 8-128";
}
if(confirm("Lowercase in password?")){
  choice = choice.concat(lowercase);
}
if(confirm("Uppercase in password?")){
  choice = choice.concat(uppercase);
}
if(confirm("Special in password?")){
  choice = choice.concat(special);
}
if(confirm("Numbers in password?")){
  choice = choice.concat(numbers);
}

let password = " ";
 if(choice.length>0){ 
  for(let i =0;i<lengthofpassword;i++){
    var random = Math.floor(Math.random() * choice.length);
   //  console.log(random)
   //  console.log(choice[random])
    password +=choice[random];
}
 } else {
  password = "You have generated no password. You chose no options.";
 }
// console.log(password)
 return password;
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
