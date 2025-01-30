//metodo forEach()
/*As matrizes em JavaScript vêm com um método útil que permite que o senhor faça um loop em 
cada um de seus membros. 

Aqui está a sintaxe básica:*/
const fruits = ['kiwi', 'mango', 'apple','pear'];
function appendIndex(fruit,index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);
/*Para explicar a sintaxe, o métodoforEach() aceitauma função que funcionará em cada item do array. 
O primeiro parâmetro dessa função é o próprio item atual do array e o segundo parâmetro (opcional) é o índice.

Muitas vezes, a função que o métodoforEach() precisa usar é passada diretamente para a chamada do método, 
como esta:*/
const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach (function(veggie,index) {
    console.log(`${index}.${veggie}`);
});

/*Isso torna o código mais compacto, mas talvez um pouco mais difícil de ler. Para aumentar a legibilidade, 
às vezes são usadas funções de seta. O senhor pode saber mais sobre as funções de seta na leitura adicional.*/
