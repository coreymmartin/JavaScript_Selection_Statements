console.log("Hello World!\n==========\n");
console.log("Follow the steps in the README.md file to complete the exercises:\n==========\n");

var favNumber = Math.floor(Math.random() * 100);
var userGuess; 
var message;
while (userGuess != favNumber) {
    userGuess = window.prompt("guess my fav numba between 0 & 100");
    if (userGuess < 0){
        window.alert("if we didnt quit when the going got tough, we wouldnt have anything to regret for the rest of our lives");
        break;
    }
    if (userGuess < favNumber) {
        message = "too low!"
    }
    else if (userGuess > favNumber) {
        message = "too high!"
    }
    else if (userGuess == favNumber) {
        message = "great jorb!"
    }
    window.alert(message);
}

var userInput2 = window.prompt("ay buddy, en averege how meny labstas da ya eet pe yeeur?");
var lobsterScore;
switch (userInput2){
    case "0":
        lobsterScore = "shame shame shame!";
        break;
    case "1":
        lobsterScore = "you have work to do!";
        break;
    case "2":
        lobsterScore = "no complaints";
        break;
    case "3":
        lobsterScore = "ay lob ya";
        break;
    default:
        lobsterScore = "you are a great guy!"
}
let lobsterMessage = `based en ya cansomptshun of ${userInput2} lobsta pe yeeur you git a lobstascor af "${lobsterScore}"`;
window.alert(lobsterMessage);
