function letterFinder(word, match) {
    // Verifica se 'word' é string e tem pelo menos 2 caracteres
    var condition1 = typeof(word) === 'string' && word.length >= 2;
    // Verifica se 'match' é string e tem exatamente 1 caractere
    var condition2 = typeof(match) === 'string' && match.length === 1;

    // Se as condições forem verdadeiras
    if (condition1 && condition2) {
        for (var i = 0; i < word.length; i++) {
            if (word[i] === match) { // Comparação estrita
                console.log('Found the', match, 'at', i);
            } else {
                console.log('---No match found at', i);
            }
        }
    } else {
        // Caso as condições não sejam atendidas
        console.log("Please pass correct arguments to the function.");
    }
}

// Teste de falha
letterFinder(123, 45);

// Teste de sucesso
letterFinder('cat', 'c');