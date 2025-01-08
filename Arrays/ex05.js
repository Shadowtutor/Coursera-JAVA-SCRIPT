/*Sua tarefa neste exercício é codificar uma função que será capaz de pegar uma palavra e localizar a posição de uma letra escolhida nessa palavra.  

Tarefa 1:
Escreva uma função chamada letterFinder que aceite dois parâmetros: palavra e correspondência.
Tarefa 2: Criar o loop for
Dentro da função, criamos um loop para percorrer a palavra (word). O loop começa do índice 0 e vai até o comprimento da palavra.
Tarefa 3: Adicionar a instrução if para verificar as letras
Dentro do loop, acessamos cada letra usando word[i] e comparamos com o valor de match. Se forem iguais, fazemos algo; caso contrário, passamos para a próxima etapa.
Tarefa 4: Mostrar a mensagem se encontrar a letra
Se a letra na posição atual for igual ao match, mostramos a mensagem:
Tarefa 5: Adicionar a condição else
Se a letra atual não for igual ao match, mostramos:
Tarefa 6: Chamar a função
Depois de criar a função, chamamos ela com os argumentos pedidos: "test" e "t". Assim:
*/

function letterFinder (word,match) {
    for (let i  = 0; i< word.length; i++) {
        if(word[i] === match) {
            console.log("Found the", match, "at", i);
        } else{
            console.log("---No match found at",i);
        }
    }
}
letterFinder('test', 't');