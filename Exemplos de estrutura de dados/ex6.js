/*Trabalho com conjuntos em JavaScript
Um conjunto é uma coleção de valores exclusivos.

Para criar um novo conjunto, o senhor pode usar o construtorSet:*/

new Set();
/*O construtorSet pode, por exemplo, aceitar uma matriz.

Isso significa que podemos usá-lo para filtrar rapidamente uma matriz em busca de membros exclusivos.*/
const repetitiveFruits = ['apple','pear', 'apple', 'pear', 'plum', 'apple'];
const uniqueFruits = new Set (repetitiveFruits);
console.log(uniqueFruits);