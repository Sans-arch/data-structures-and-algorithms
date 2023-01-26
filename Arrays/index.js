/**
 * Um Array é a estrutura de dados mais simples possível em memória.
 * JavaScript tem suporte nativo para arrays.
 */

// let daysOfWeek = new Array();
daysOfWeek = new Array(7); // Instânciando um Array de tamanho 7 (7 elementos)
daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

// A palavra `new` não é considerada uma boa prática para instanciar Arrays em JavaScript
// let daysOfWeek = [];
let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Saber a quantidade de elementos de um Array
console.log(daysOfWeek.length);

// Acessando as posições de um array, iterando sobre ele.
for (let i = 0; i < daysOfWeek.length; i++) {
  console.log(daysOfWeek[i]);
}
