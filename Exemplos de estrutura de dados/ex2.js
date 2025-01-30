/* Filter metodo
Outro método muito útil na matriz é o métodofilter(). Ele filtra as matrizescom base em um 
teste específico. Os itens da matriz que passam no teste são retornados.

Veja um exemplo:*/
const nums = [0,10,20,30,40,50];
nums.filter(function(num) {
    return num > 20;
})
console.log(nums.filter(function(num){
    return num > 20;
}));
/*Semelhante ao métodoforEach(), o métodofilter() também aceita uma função e essa função 
executa algum trabalho em cada um dos itens da matriz.*/
