/*Atualização de Propriedades de Objetos mesclando notações"*/
var car = {};
car.color = "red";
car["color"] = 'green';
car["speed"] = 200;
car.speed = 100;
console.log("CAR", car);