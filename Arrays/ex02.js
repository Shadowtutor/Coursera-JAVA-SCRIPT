/*Posso atualizar a saída da maneira que quiser. Por exemplo, aqui estão meus itensarr com um número na frente de cada item:  */
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log (i, arr[i])
    }
}

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);