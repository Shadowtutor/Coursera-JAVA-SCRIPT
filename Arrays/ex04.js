/*Posso até adicionar uma ou mais condições, como, por exemplo:  */
function listArrayItems (arr) {
    for (var i = 0; i<arr.length; i++) {
        if (arr[i] == 'red') {
            console.log(i*100, "tomato!")
        } else {
            console.log(i*100, arr[i])
        }
    }
}

var color = ['red', 'orange', 'yellow', 'green', 'blue', 'purple','pink'];
listArrayItems(color)