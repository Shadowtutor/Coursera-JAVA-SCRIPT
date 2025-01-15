/*FUNÇÕES DE ORDEM SUPERIOR*/

function addTwoNums(getNumber1, getNumber2) {
    console.log(getNumber1() + getNumber2());
}

function getNumber1() {
    return 10;
}
function getNumber2() {
    return 20;
}

addTwoNums(getNumber1, getNumber2);