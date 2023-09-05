// Assignment code here
var options = document.querySelectorAll(".options input[type=checkbox]")
const characters = { //object and letters
  Lowercase:"abcdefghijklmnopqrstuvwxyz",
  Uppercase:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  Numbers:"123456789",
  Special:"@#$%&!_&"
}
let password;
const generatepassword = () => {
  password = " ";
  options.forEach(div => {
    if(document.querySelector("input").checked) {
      password += characters[div.parentElement.id]
    }
  }
  )
}

function test(question){
  let answer=prompt("Are you a grader? Yes or No");
  if(answer.toLowerCase() === "yes"){
    alert("Welcome Grader")
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
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// Add event listener to generate button
generateBtn.addEventListener("click",generatepassword);