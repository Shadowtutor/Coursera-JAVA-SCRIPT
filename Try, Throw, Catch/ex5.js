try {
    throw new ReferenceError('Erro de referencia');
    
} catch(err) {
    //console.log(err)
    console.log('There was a reference Error');
    console.log('Mensagem de Erro', err.message);
    console.log('Erro na linha', err.stack);
}
console.log('My program does not stop')

/*O catch não conserta o erro, mas evita que ele pare o programa. 
Ele me permite capturar o erro, entender onde aconteceu 
(como a linha e o arquivo) e decidir como tratar ou ignorar o problema.*/