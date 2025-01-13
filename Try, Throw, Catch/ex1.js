/* Em js existem instruçoes embutidas para ajudar seu
codigo a continuar sendo executado mesmo que ocorra um erro.
Eles também usam palavras chave como throw e catch
No entanto eles tentarão encontrar o erro, em vez da bola.*/

try {
    console.log(c+d)
} catch (err) {
    console.log(err)
}
console.log ("This line now runs")