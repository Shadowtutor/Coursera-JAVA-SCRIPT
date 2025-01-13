function example() {
    console.log('linha um');
    console.log('linha doi');
    console.log('linha tres');
    example ();
    /*colocar a função dentro da propria função
    gerará um loop infinito.*/
}
example ();