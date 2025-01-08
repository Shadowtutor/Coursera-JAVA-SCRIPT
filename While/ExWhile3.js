//2. Soma de números de 1 a 100
//Crie um loop while que some os números de 1 até 100 e exiba o resultado final.
let soma = 0 //variavel soma declarada e atribuido valor 0 a ela
let i = 1 //variavel i declarada e atribuido valor 1 a ela
while (i <= 100) { //le-se enquanto 1 for menor ou igual a 100 faça
    soma=soma+i //variavel soma vai receber a soma dela mesma com i
    i = i+1 // variavel i vai sempre receber uma casa apos a contagem, exemplo, 1 vem i+i=1, depois i+i=2
}
console.log(soma) //o resultado será mostrado no final onde a soma que antes era 0 agora tera o valor de i somado.