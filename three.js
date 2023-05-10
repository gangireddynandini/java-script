const csk = (675 + 67 + 89) / 3;
const rcb = (638 + 90 + 98) / 3;
console.log(csk, rcb)
if (csk > rcb) {
    console.log('csk won the game');
} else if (rcb > csk) {
    console.log('rcb won the game');
} else if (csk === rcb) {
    console.log('match is draw')
} else if (csk >= 100 && rcb >= 100) {
    console.log("both won game")
} else {
    console.log('no one won the trophy')
}

