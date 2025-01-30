/*Trabalhando com objetos em JavaScript
Muitas das informações sobre como trabalhar com objetos em JavaScript já foram abordadas neste curso.

O exemplo abaixo demonstra como usar a estrutura de dados de objeto para concluir 
uma tarefa específica. Essa tarefa consiste em converter um objeto em uma matriz:*/
const result = [];
const drone  = {
    speed:100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach (function(key) {
    result.push(key,drone[key])
})
console.log(result)
/*Embora isso seja possível e funcione, ter de fazer algo assim pode significar que 
o senhor não escolheu a estrutura de dados correta para trabalhar em seu código.

Por outro lado, às vezes o senhor não pode escolher a estrutura de dados com a qual 
está trabalhando. Talvez esses dados venham de um provedor de dados de terceiros 
e tudo o que o senhor pode fazer é codificar seu programa para que ele os consuma. 
O senhor saberá mais sobre o intercâmbio de dados na Web quando aprender sobre JSON 
(JavaScript Object Notation).*/
