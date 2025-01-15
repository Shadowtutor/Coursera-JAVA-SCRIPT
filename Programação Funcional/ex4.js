/*FUNÇÕES DE 1ª CLASSE*/

function addTwoNums (a,b) {
    console.log(a+b)
}

function randomNum() {
    return Math.floor((Math.random() * 10)+1);

}
function specificNum() {return 42};
var useRandom = true;
//var useRandom = false; /*fara com que specificNum seja usada.*/
var getNumber;
if (useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}
addTwoNums (getNumber(), getNumber())