/*Para iniciar a contagem a partir de um em vez de zero, posso atualizar a declaração da função da seguinte forma:  */
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log (i+1, arr[i])
    }
}

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);