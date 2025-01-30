/*Trabalho com mapas em JavaScript
Para criar um novo mapa, o senhor pode usar o construtorMap:*/
new Map();
/*Um mapa pode parecer muito semelhante a um objeto em JS.

Entretanto, ele não tem herança. Não há protótipos! Isso o torna útil como armazenamento de dados.

Por exemplo:*/
let bestBoxers = new Map();
bestBoxers.set(1,'The champion');
bestBoxers.set(2, 'The Runner-Up');
bestBoxers.set(3,'The third place');
console.log(bestBoxers);

/*Para obter um valor específico, o senhor precisa usar o métodoget(). Por exemplo: */

console.log(bestBoxers.get(1))