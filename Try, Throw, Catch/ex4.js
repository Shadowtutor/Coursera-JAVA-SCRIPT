/* Aqui vamos analizar um exemplo de codigo que apesar
de conter erro, não para de funcionar.

Primeiro declaramos a chave 'try', espaço, abre chaves,
enter, console.log (a+b), fecha chaves. 
Repare que o erro é de referencia, pois a e b ainda 
nao foram declaradas.*/
try {
    console.log(a+b)
/*O proximo bloco é o 'Catch' que dectará o erro
produzido no bloco 'try'. 
*/

} catch(err) {
    //console.log(err) /*nessa linha o js mostrara textão de erro*/
    console.log('There was an error')
    console.log('The error was saved in the error log')

}
console.log('My program does not stop') /* esta linha 
mostrará no console que mesmo com erro essa frase foi executada.*/