
function addTwoNums(a, b) {
    if (typeof a !== 'number')
        throw new ReferenceError('O primeiro argumento não é numeral');
    else if (typeof b !== 'number')
        throw new ReferenceError('O segundo argumento não é numeral');
    
    const result = a + b; // Soma dentro da função
    return result; // Retorna o resultado
} 

try {
    const result = addTwoNums(5, 3); // Soma dentro do bloco try
    console.log(result); // Exibe a soma
} catch (error) {
    console.log('Erro encontrado:', error.message); // Captura e exibe o erro com mensagem personalizada
}
addTwoNums(5, 3); // Exibe 8
//addTwoNums('5', 3); // Lança um erro do primeiro argumento
//addTwoNums(5, '3'); // Lança um erro do segundo argumento
addTwoNums('isso está funcionando')