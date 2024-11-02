// // Task 1
const task1 = prompt("something") + prompt("something");
if (task1) {
  alert("Both fields are filled");
} else {
  alert("Not all fields are filled");
}
// // Task 2
const task2 = Number(prompt("something")) + Number(prompt("something"));
if (task2 > 10) {
  alert("The sum is greater than 10");
} else {
  alert("The sum is less than or equal to 10");
}
// // Task 3
const input = prompt("Enter the text");
if (input.includes("JavaScript")) {
  alert("The text contains a word JavaScript");
} else {
    alert("The text does not contain the word JavaScript");
}
// // Task 4
const task4 = Number(prompt("Enter the number"));
if (task4 > 10 && task4 < 20) {
  alert("The number enters the range of 10 to 20");
} else {
  alert("The number does not enter the range of 10 to 20");
}
// Task 5
const yourName = prompt("Enter your name");
console.log(yourName);
const mail = prompt("Enter your mail");
console.log(mail);
const password = prompt("Enter your password");
console.log(password);
if (yourName.length >= 3) {
  alert("You are redirected to another page!");
} else if (mail.includes("@gmail.com", "@ukr.het", "@hotmail.com")) {
  alert("You are redirected to another page!");
} else if (password.length >= 6) {
  alert("You are redirected to another page!");
} else {
  alert("Error!")
}