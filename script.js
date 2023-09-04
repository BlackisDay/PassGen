// Assignment code here
var options = document.querySelectorAll(".options")
const characters = { //object and letters
  Lowercase:"abcdefghijklmnopqrstuvwxyz",
  Uppercase:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  Numbers:"123456789",
  Special:"@#$%&!_&"
}
let password;
const generatepassword = () => {
  password = " ";
  options.forEach(div =>{
  if(document.querySelector("input").checked ){
    password += characters[div.id]
  }
}
)
console.log(password)
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// Add event listener to generate button
generateBtn.addEventListener("click",generatepassword);