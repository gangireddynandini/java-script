// bill = 200
// if ((bill > 50) && (bill < 300)) {
//     tip = 0.15 * (bill)
//     console.log(tip)
// } else {
//     tip = 0.2 * (bill)
//     console.log("tip is ", tip)

// }
// total = tip + bill
// console.log('bill is ', bill)
// console.log("total amount  u have to paid is ", total);
//using ternary operator
bill = 200;
tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
console.log("bill is ", bill)
console.log('tip is ', tip)
console.log("total amt is ", tip + bill)
console.log(`bill is ${bill},tip was ${tip},total amt ${bill + tip}`);//string interpolation