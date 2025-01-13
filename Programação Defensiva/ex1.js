function letterFinder(word, match) {
        /*abaixo, verificação se 'word' é string e
        tem pelo menos 2 caracteres*/
        var condition1 = typeof(word) === 'string' && word.length >=2;
        /*abaixo, verificação se 'match' é string e
        tem exatamente 1 caractere*/
        var condition2 = typeof(match) === 'string' && match.length ===1;
        /*Abaixo as condicionais verdadeiras*/
        if (condition1 && condition2) {
            for(var i = 0; i < word.length; i++) {
                if(word[i] === match) {
                    console.log('Found the', match, 'at', i)
                } else {
            console.log('---No match found at', i)
        }
    }
} else {
    /*Caso as condições não sejam atendidas*/
    console.log("Please pass correct arguments to the function.");
    }
}
/*vamos testar a falha:*/
letterFinder(123,45);
/*vamos testar o sucesso*/
letterFinder('cat','c');