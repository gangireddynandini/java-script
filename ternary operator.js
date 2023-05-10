const age = 9;
ht = age >= 18 ? "you r eligible to vote" : "not eligible"
console.log(ht)

//another way
let aged = 76;
ht = aged >= 23 ? console.log('eligible for vote') : console.log('not eligible')

//using conditionals
let drink;
if (age >= 18) {
    drink = 'wine';
} else {
    drink = "water";
}
console.log(drink)

//another method
// console.log('i like to drink' ${ age>= 18 ? 'wine' : 'water'});