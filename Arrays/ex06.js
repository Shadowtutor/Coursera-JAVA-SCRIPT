function contLetra ( amor,letra) {
    for (let i=0; i<amor.length; i++) {
        if (amor[i]===letra) {
            console.log('Encontrei a letra', letra, 'na', i,'º posição');
        } else {
            console.log('Não encontrei a letra.')
        }
                    
    }
}

contLetra('abacaxi','a')