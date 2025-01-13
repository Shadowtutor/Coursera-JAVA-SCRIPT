var moedaOne = 100;
var moedaDois = 0;
var trocaRate = 1.2;
function conversorMoedas (amount, rate) {
    return amount * rate ;

}
moedaDois = conversorMoedas(moedaOne,trocaRate);
console.log(moedaDois);
