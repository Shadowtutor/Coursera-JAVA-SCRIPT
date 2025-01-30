/* MAP metodo
Por fim, há um métodomap muito útil. 

Esse método é usado para mapear cada item da matriz para outro item da matriz, 
com base em qualquer trabalho realizado dentro da função que é passada para o mapa como parâmetro. 

Por exemplo:*/
[0,10,20,30,40,50].map(function(num) {
    return num / 10
});

/*buscando meios para o resultado ser mostrado no console.*/
const resultado = [0,10,20,30,40,50].map(function(num) {
    return num / 10
});
console.log(resultado)