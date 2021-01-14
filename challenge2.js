// challenge 1

const caclAverage = (a,b,c) => (a + b + c) / 3;
// console.log(caclAverage(3, 4, 5));

var dolphinsScore = caclAverage(85, 54, 41);
var koalasScore = caclAverage(23, 34, 27);
// console.log(dolphinsScore, koalasScore);
   
const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2){
        console.log(`Dolphins are the Winner ${avgDolphins} vs. ${avgKoalas}`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas are the Winner! ${avgKoalas} vs. ${avgDolphins}`);
    } else {
        console.log("there is no winner");
    }
}

console.log(checkWinner(dolphinsScore, koalasScore));

// console.log(checkWinner(789, 123));


