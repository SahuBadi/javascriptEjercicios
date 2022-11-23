let numbers = [1,2,3,4,5,6,7,8,9];

// push() -> añade un elemento al final del array (elemento a añadir)
//numbers.push(10);
//console.log(numbers);

// pop() -> elimina el último elemento del array
// numbers.pop();
// console.log(numbers);

// shift() -> elimina el primer elemento del array
// numbers.shift();
// console.log(numbers);

// unshift() -> añade un elemento al principio del array (elemento a añadir)
// numbers.unshift(0);
// console.log(numbers);

// splice() -> elimina un elemento del array (donde empieza, cuantos elementos)
// numbers.splice(2,1);
// console.log(numbers);

// splice() -> añade un elemento en una posición del array (donde empieza, cuantos elementos, elemento)
// numbers.splice(2,0,3.5);
// console.log(numbers);

// splice() -> sustituye un elemento en una posición del array (donde empieza, cuantos elementos, elemento)
// numbers.splice(2,1,3.5);
// console.log(numbers);

// slice() -> crea un nuevo array a partir de otro array (donde empieza, donde termina)
// let newNumbers = numbers.slice(2,5);
// console.log(newNumbers);

// indexOf() -> devuelve la posición de un elemento en el array (elemento a buscar)
// console.log(numbers.indexOf(5));

// includes() -> devuelve true si el elemento está en el array (elemento a buscar)
// console.log(numbers.includes(5));

// reverse() -> invierte el orden de los elementos del array 
// console.log(numbers.reverse());

// sort() -> ordena los elementos del array (si no decimos nada, alfabéticamente)
// console.log(numbers.sort());

// sort() -> ordena los elementos del array (por números)
// console.log(numbers.sort((a,b) => a - b));

// join() -> convierte un array en un string (separador)
// console.log(numbers.join(" - "));

// split() -> convierte un string en un array (separador)
// let string = "Hola, soy un string";
// console.log(string.split(" "));

// map() -> crea un nuevo array a partir de otro array 
// let newNumbers = numbers.map(number => {
//     return number * 2;
// });
// console.log(newNumbers);

// filter() -> crea un nuevo array a partir de otro array (la diferencia es que filter devuelve un array con los elementos que cumplen la condición)
// let newNumbers = numbers.filter(number => {
//     return number > 5;
// });
// console.log(newNumbers);

// find() -> devuelve el primer elemento que cumple una condición
// let newNumbers = numbers.find(number => {
//     return number > 5;
// });
// console.log(newNumbers);

// findIndex() -> devuelve la posición del primer elemento que cumple una condición
// let newNumbers = numbers.findIndex(number => {
//     return number > 5;
// });
// console.log(newNumbers);

// reduce() -> devuelve un valor a partir de un array (acumulador, elemento)
// let newNumbers = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// });

// console.log(newNumbers);

// every() -> devuelve true si todos los elementos cumplen una condición
// let newNumbers = numbers.every(number => {
//     return number > 2;
// });
// console.log(newNumbers);

// some() -> devuelve true si al menos un elemento cumple una condición
// let newNumbers = numbers.some(number => {
//     return number > 5;
// });
// console.log(newNumbers);

// forEach() -> recorre un array
// numbers.forEach(number => {
//     console.log(number);
// });

// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }

// for(let number of numbers){
//     console.log(number);
// }

// let newNumbers = [];

// for(let i = 0; i < numbers.length; i++){
//     newNumbers.push(numbers[i] * 2);
// }

// console.log(newNumbers);

// let newNumbers = [];

// for(let number of numbers){
//     newNumbers.push(number * 2);
// }

// console.log(newNumbers);

// let newNumbers = [];

// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] > 5){
//         newNumbers.push(numbers[i]);
//     }
// }