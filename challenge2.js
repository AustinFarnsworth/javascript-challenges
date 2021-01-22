// // challenge 1

// const caclAverage = (a,b,c) => (a + b + c) / 3;
// // console.log(caclAverage(3, 4, 5));

// var dolphinsScore = caclAverage(85, 54, 41);
// var koalasScore = caclAverage(23, 34, 27);
// // console.log(dolphinsScore, koalasScore);
   
// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2){
//         console.log(`Dolphins are the Winner ${avgDolphins} vs. ${avgKoalas}`);
//     } else if (avgKoalas >= avgDolphins * 2) {
//         console.log(`Koalas are the Winner! ${avgKoalas} vs. ${avgDolphins}`);
//     } else {
//         console.log("there is no winner");
//     }
// }

// console.log(checkWinner(dolphinsScore, koalasScore));

// console.log(checkWinner(789, 123));

// Challenge 2


// const bill = "100";


// // const calcTip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
// const calcTip = function (bill) {
//     return bill >= 50 && bill >= 300 ? bill * .15 : bill * .2;
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
 

// console.log(bills, tips, totals);

// Challenge 3 

const markMiller = {
    firstName: 'Mark',
    lastName: 'Miller',
    weight: 78,
    height: 1.69,

    calcBMI: function() {
        this.bmi = this.weight / this.height ** 2
        return this.bmi; 
    }

};
// console.log(markMiller.calcBMI());

const johnSmith = {
    firstName: 'John',
    lastName: 'Smith',
    weight: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.weight / this.height ** 2
        return this.bmi; 
    }

}
// console.log(johnSmith.calcBMI());

// markMiller.calcBMI();
// johnSmith.calcBMI();
// console.log(markMiller.bmi, johnSmith.bmi);

// if (markMiller.bmi > johnSmith.bmi) {
//     console.log(`Marks BMI ${markMiller.bmi} is higher than Johns BMI ${johnSmith.bmi}`);
// } else if (johnSmith.bmi > markMiller.bmi) {
//     console.log(`Johns BMI ${johnSmith.bmi} is higher than Marks BMI ${markMiller.bmi}`);
// } else {
//     console.log('They have the same BMi');
// }

// challenge 4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []

const calcTip = function (bills) {
  return bills >= 50 && bills <= 300 ? bills * .15 : bills * .2;
}


for (i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);

}


console.log(bills, tips, totals);