function numLetra(Sucesso, letra) {
    for (let i=0; i<Sucesso.length; i++) {
        if (Sucesso[i]===letra) {
            console.log("Encontrei o caractere",letra,'na',i,"º Posição.")
        } else {
            console.log('Caractere não encontrado.')
        } 
    }
}
numLetra('Paralelepipedo', 'e')