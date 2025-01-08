/*Por fim, há uma coisa realmente útil que a notação de colchetes tem, mas que não está disponível na notação de ponto: Ela pode avaliar expressões.*/
var test = ['speed', 'altitude', 'color'];
var drone = {
    speed : 100,
    altitude : 200,
    color : "red"
}
for (var i = 0; i <test.length; i++) {
    console.log(drone[test[i]])
}