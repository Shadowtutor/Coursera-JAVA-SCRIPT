/*Exercício 1

Neste exercício, o senhor criará o código para um for loop, usando a variável de contador chamada i a partir de 1.

Para fazer com que o contador seja incrementado em 1 em cada loop, o senhor usará i++.

A condição de saída do loop for deve corresponder à saída fornecida abaixo. 

Dentro do loop, escreva uma instrução if-else, que verificará as seguintes condições:

Primeiro, ele verificará se o valor de i é  1. Se for, seu código registrará no console a string "Gold medal" (Medalha de ouro).

Em seguida, verificará se o valor de i é 2. Se for, seu código registrará no console a string "Silver medal" (Medalha de prata).

Em seguida, seu código verificará se o valor de i é 3. Se for, ele registrará no console a string "Bronze medal".

Para todos os valores restantes de i, o código registrará no console apenas o valor de i.

Observação: o log de console esperado de todo o código deve ser o seguinte
Medalha de ouro
Medalha de prata
Medalha de bronze
4
5
6
7
8
9
10*/
for (var i = 1; i<11; i++) {
    if (i==1){ 
        console.log("Gold Medal")
    }
    else if (i==2) {
        console.log("Silver Medal")
    }
    else if (i==3) {
        console.log("Bronze Medal")
    }
    else {
        console.log(i, "º Colocado")
    }

    }