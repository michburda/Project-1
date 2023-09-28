
const massMark = 78; 
const heightMark = 1.69; 
const massJohn = 92; 
const heightJohn = 1.95; 

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

let message;

if (BMIMark > BMIJohn) {
  message = `Mark's BMI (${BMIMark.toFixed(1)}) is higher than John's (${BMIJohn.toFixed(1)})!`;
} else if (BMIMark < BMIJohn) {
  message = `John's BMI (${BMIJohn.toFixed(1)}) is higher than Mark's (${BMIMark.toFixed(1)})!`;
} else {
  message = "Mark and John have the same BMI!";
}

console.log(message);
