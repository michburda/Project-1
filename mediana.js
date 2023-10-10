function calculate() {
    const input = document.querySelector("#numbersInput").value;
    const numbersArray = input.split(',').map(num => parseFloat(num)).filter(num => !isNaN(num));

    const average = numbersArray.reduce((sum, number) => sum + number, 0) / numbersArray.length;

    let median;
    numbersArray.sort((a, b) => a - b);
    const mid = Math.floor(numbersArray.length / 2);

    if (numbersArray.length % 2 === 0) {
        median = (numbersArray[mid - 1] + numbersArray[mid]) / 2;
    } else {
        median = numbersArray[mid];
    }

    document.querySelector("#average").textContent = average.toFixed(2);
    document.querySelector("#median").textContent = median.toFixed(2);
