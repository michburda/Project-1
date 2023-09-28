//Dane wejściowe
const massMark = 78; 
const heightMark = 1.69;
const massJohn = 92; 
const heightJohn = 1.95; 

// Licze BMI
const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(`Mark's BMI is ${BMIMark}`);
console.log(`John's BMI is ${BMIJohn}`);

const markHigherBMI = BMIMark > BMIJohn;
console.log(`Is Mark's BMI higher than John's? ${markHigherBMI}`);
