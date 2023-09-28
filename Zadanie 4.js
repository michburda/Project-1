
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const total = bill + tip;
console.log(`Rachunek wyniósł ${bill}, napiwek wyniósł ${tip}, a całkowita wartość to ${total}.`);
