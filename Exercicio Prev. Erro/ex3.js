function addTwoNums (a,b) {
    if (a<0 || b<0 )
        throw new ReferenceError('A ou B não podem ser negativos');
    const result = a+b; //soma dentro da função
    return result; //retorna o resultado
} 
try {
    const result = addTwoNums(5,3)
    //addTwoNums(5,3)
    console.log(result); /* soma dentro do bloco try*/
} catch (error) {
    console.log ('Erro', error.message); /*captura e exibe o erro*/
    console.log ('Verifique a linha', error.stack)
}
//addTwoNums (5,3); // exibe 8
addTwoNums (-5,3); //Lança um erro
