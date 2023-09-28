
const dolphinsScores = [96, 108, 89];
const koalasScores = [88, 91, 110];

const calculateAverage = (scores) => {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
};
const averageDolphins = calculateAverage(dolphinsScores);
const averageKoalas = calculateAverage(koalasScores);

if (averageDolphins > averageKoalas) {
  console.log(`Dolphins wygrywa trofeum z średnim wynikiem :  ${averageDolphins}`);
} else if (averageKoalas > averageDolphins) {
  console.log(`Koalas wygrywa trofeum z średnim wynikiem : ${averageKoalas}`);
} else {
  console.log(`Dwa teamy wygrywają ze średnią punktów ${averageDolphins}`);
}