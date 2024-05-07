// Chap # 26 to 30
// Q # 1
// function usernumber() {
//     let number = prompt("Please enter a positive integer:");
//     return number;
// }

// function displaynumber() {
//     const number = usernumber();
//     const roundOffValue = Math.round(number);
//     const floorValue = Math.floor(number);
//     const ceilValue = Math.ceil(number);

//     alert(`
//         Number: ${number}
//         Round Off Value: ${roundOffValue}
//         Floor Value: ${floorValue}
//         Ceil Value: ${ceilValue}
//     `);
// }

// displaynumber();

// Q # 2
// function value(number) {
//     var absolute = Math.abs(number);
//     console.log("The absolute value of " + number + " is " + absolute);
// }
// value(-4);
// value(5); 

// Q # 3

// function dice() {
//     var value = Math.floor(Math.random() * 6) + 1;

//     alert("You rolled a " + value);
// }

// dice();

// Q # 4
// function tosscoin() {
//     var number = Math.random();
//     var coin = number < 0.5 ? "Heads" : "Tails";

//     alert("Random Coin Value: " + coin);
// }

// tosscoin();

// Q # 5

// function randomnumber() {
//     var number = Math.floor(Math.random() * 100) + 1;

//     alert("Random Number between 1 to 100: " + number);
// }

// randomnumber();

// Q # 6

// function getUserWeight() {
//     var userweight = prompt("Please enter your weight in kilograms");
//     var weight;
//     if (userweight.includes("kgs") || userweight.includes("kilograms")) {
//         weight = parseFloat(userweight.replace("kgs", "").replace("kilograms", ""));
//     } else {
//         weight = parseFloat(userweight);
//     }

//     alert("Your weight is: " + weight + " kilograms.");
// }

// getUserWeight();

// Q # 7

// function Number() {
//     return Math.floor(Math.random() * 10) + 1;
// }

// function checkUser() {
//     var secret = Number();
//     var userInput = parseInt(prompt("Enter a number between 1 and 10."));

//     if (userInput === secret) {
//         alert("Congratulations! You guessed the correct number.");
//     } else {
//         alert("Sorry, Please try again.");
//     }
// }

// checkUser();

// Chap # 31 to 34
// Q # 1
// var de = new Date();
// console.log(de.toString());

// Q # 2
// var now = new Date();
// var currentMonth = now.getMonth();
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// alert(months[currentMonth]);

// Q # 3
// var now = new Date();
// var currentDay = now.getDay();
// var weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// alert(weekdays[currentDay]);

// Q # 4
// var now = new Date();
// var currentDay = now.getDay();
// var funDays = [6, 0];
// if (funDays.includes(currentDay)) {
//     alert("It's Fun day");
// }

// Q # 5
// var now = new Date();
// var currentDay = now.getDate();
// if (currentDay < 16) {
//     alert("First fifteen days of the month");
// } else {
//     alert("Last days of the month");
// }

// Q # 6
// var now = new Date();
// var time = now.getTime();
// var minut = time / (1000 * 60);
// var uni = minut;
// console.log("Minutes since midnight, January 1, 1970: " + uni);

// Q # 7
// var now = new Date();
// var hour = now.getHours();
// if (hour < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }

// Q # 8
// var currentDate = new Date();
// var currentYear = currentDate.getFullYear();
// var lastYear = currentYear - 1;
// var lastMonth = 11;
// var laterDate = new Date(lastYear, lastMonth, 0);
// console.log("Last day of the last month of 2023: " + laterDate.toDateString());

// Q # 9
// var ramadanStart = new Date(2015, 5, 18);
// var currentDate = new Date();
// var Millisec = currentDate.getTime() - ramadanStart.getTime();
// var InDays = Millisec / (1000 * 60 * 60 * 24);
// alert("Number of days past since 1st Ramadan: " + Math.round(InDays));

// Q # 10
// var curren = new Date();
// var hour = curren.getHours();
// curren.setHours(hour + 1);
// alert(curren.toLocaleString());

// Q # 11
// var currentDate = new Date();
// currentDate.setFullYear(currentDate.getFullYear() - 100);
// alert(currentDate.toLocaleString());

// Q # 12
// var userAge = parseInt(prompt("Please enter your age:"));
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - userAge;
// alert("Your birth year is " + birthYear);

// Q # 13
// var customerName = "Your Name";
// var currentMonth = "January";
// var units = 1234.56;
// var chargesPerUnit = 5.23;
// var netAmountPayable = 1234.56;
// var latePaymentSurcharge = 234.56;
// var grossAmountPayable = 1468.78;
// units = units.toFixed(2);
// chargesPerUnit = chargesPerUnit.toFixed(2);
// netAmountPayable = netAmountPayable.toFixed(2);
// latePaymentSurcharge = latePaymentSurcharge.toFixed(2);
// grossAmountPayable = grossAmountPayable.toFixed(2);
// alert("K-Electric Bill\n\nCustomer Name: " + customerName + "\nCurrent Month: " + currentMonth + "\n\nNumber of Units: " + units + "\nCharges per Unit: " + chargesPerUnit + "\n\nNet Amount Payable (within Due Date): " + netAmountPayable + "\nLate Payment Surcharge: " + latePaymentSurcharge + "\n\nGross Amount Payable (after Due Date): " + grossAmountPayable);
