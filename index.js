// let count = 2+5
// console.log(count)

// 1. Create a variable, myAge, and set its value to your age
// 2. Log the myAge variable to the console
// let myAge = 31
// console.log(myAge)
  

// 1. Create two variables, myAge and humanDogRatio
// 2. Multiply the two together and store the result in myDogAge 
// 3. Log myDogAge to the console

// let myAge = 31
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)


// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step

// let bonusPoints = 50
// bonusPoints = bonusPoints * 2
// console.log(bonusPoints)
// bonusPoints = bonusPoints / 4
// console.log(bonusPoints)
// bonusPoints = bonusPoints * 3 - 5
// console.log(bonusPoints)


// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// function increment() {
//     console.log("The button was clicked")


// Create a function (you decide the name) that logs out the number 42 to the console
// Call/invoke the function

// function myNumber() {
//     console.log(42)
// }
// myNumber()


// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// // Create a function that logs out the sum of all the lap times

// function logLapTime() {
//     let totalTime = lap1 + lap2 + lap3
//     console.log(totalTime)
// }

// logLapTime()
 

//let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// Run it three times

// function incrementLap() {
//     lapsCompleted = lapsCompleted + 1
// }

// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapsCompleted)


// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

console.log(countEl)
console.log(saveEl)

let count = 0

function increment() {
    count += 1    //count = count + 1
    console.log(count)
    countEl.textContent = count //countEl.innerText = count
}


// // 1. Create a function, save(), which logs out the count when it's called

function save() {
    let countStr = count + " - " 
    saveEl.textContent += countStr  //saveEl.innerText += countStr
    countEl.textContent = 0
    count = 0
    console.log(count)
}
// 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
// 3. Render the variable in the saveEl using innerText
// NB: Make sure to not delete the existing content of the paragraph


// // Create a variable, message, that stores the string: "You have tree new notifications"

// let username = "per"
// let message = "you have three new notifications"

// console.log(message + ", " + username + "!")

// // Create a variable, messageToUser, that contains the message we have logged

// let messageToUser = message + ", " + username + "!"
// console.log(messageToUser)


// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console

// let myName = "Mariana"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + myName
















