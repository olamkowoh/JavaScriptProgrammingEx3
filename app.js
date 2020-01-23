/*
JavaScript Exercise 3

Dates
*/

let registration = new Date(2020, 0, 7, 8, 25);

console.log(registration);
console.log(`Year: ${registration.getFullYear()}`);
console.log(`Month: ${registration.getMonth()}`);
console.log(`Day of week: ${registration.getDay()}`);
console.log(`Date: ${registration.getDate()}`);
console.log(`Hours: ${registration.getHours()}`);
console.log(`Minutes: ${registration.getMinutes()}`);
console.log(`Seconds:  + ${registration.getSeconds()}`);

registration.setFullYear(1999);
console.log(` ${registration.toDateString()} ${registration.toTimeString()}`);

//Birthday exercise

let birthdate = new Date(1995, 05, 30, 2, 8)
console.log(birthdate);

console.log(`What is the date 1 billion seconds from my birthday and how old am I or will I be that year?`);

let seconds = 1000000000;

let days = (((seconds/60) / 60) / 24);

console.log(days);

let nextDate = date.getDate(birthdate) + days; nextDate.setDate(nextDate);
let newDate;



console.log(nextDate);
