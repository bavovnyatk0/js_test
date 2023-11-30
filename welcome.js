
// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText

let welcomeEl = document.getElementById("welcome-el")
let myName = "Mariana"
let greeting = "My name is "
welcomeEl.innerText = greeting + myName 
 
// Add an emoji to the end! 👋
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1

welcomeEl.innerText += " 👋"  //welcomeEl.innerText = welcomeEl.innerText + " 👋"
