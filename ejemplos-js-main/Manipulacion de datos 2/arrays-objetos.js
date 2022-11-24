// let numbers = [1,2,11,3,4,5,6,7,8,9];

//length -> devuelve la longitud (número de elementos) del array
// console.log(numbers.length);

// push() -> añade un elemento al final del array (elemento a añadir)
// numbers.push(10);
// console.log(numbers);

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

// sort() -> ordena los elementos del array (por números) donde a es el primer elemento y b el segundo
// console.log(numbers.sort((a,b) => a - b));

// join() -> convierte un array en un string (separador)
// console.log(numbers.join(" - "));

// split() -> convierte un string en un array (separador)
// let string = "Tomate frito, 200 gramos";
// console.log(string.split(","));

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
//     return number > 0;
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

// toLocateString() -> devuelve el número con el formato de la localización (idioma, moneda, etc)

// let number = 123456789.12345;

// console.log(number.toLocaleString("es-ES", {style: "currency", currency: "EUR"}));

// Usa la moneda de inglaterra

// console.log(number.toLocaleString("en-GB", {style: "currency", currency: "GBP"}));

// Los style que se puede usar con toLocaleString son: currency, percent, decimal
// Por ejemplo, si queremos que nos devuelva el número con el símbolo de porcentaje

// flat() -> devuelve un array con los elementos de un array anidado

// let array = [1,2,3, [4,5,6, [7,8,9]]];
// console.log(array.flat(2));

// Acceso a los valores e iteración de un objeto con foreach

// let colors = ['red', 'green', 'blue', 'orange']
// console.log(colors[0]);

// colors.forEach( (color, index) => {
//     console.log("soy el color " + color + " y mi posición en el array es la "  + index);
// });

// Acceso a los valores e iteración de un objeto con entries()
//Podemos usar destructuring para acceder a los valores del array
// let user = {
//     name: "Juan",
//     lastname: "Perez",
//     age: "25",
//     email: "juanperez@gmail.com",
// };
// console.log(user.name);

// Object.entries(user).forEach(([key, value]) => {
//     console.log(`${key}: ${value}`);
// });

// Filtración de datos 

// let users = [
//     {
//         name: "Juan",
//         age: 23,
//         city: "Madrid",
//         cart: [
//             {
//                 product: "Ordenador",
//                 price: 1000
//             }
//         ]
//     },
//     {
//         name: "Juan",
//         age: 34,
//         city: "Barcelona",
//         cart: [
//             {
//                 product: "Libro",
//                 price: 10
//             },
//             {
//                 product: "Ordenador",
//                 price: 1000
//             }
//         ]
//     },
//     {
//         name: "Laura",
//         age: 18,
//         city: "Madrid",
//         cart: [
//             {
//                 product: "Libro",
//                 price: 10
//             },
//             {   
//                 product: "Pantalla",
//                 price: 200
//             },
//             {
//                 product: "Ordenador",
//                 price: 1000
//             }
//         ]
//     }
// ];

// Busca los usuarios que hayan comprado un ordenador
// let usersWithComputer = users.filter(user => {
//     return user.cart.some(product => {
//         return product.product === "Ordenador";
//     });
// });
// console.log(usersWithComputer);

// Busca los usuarios que hayan comprado un ordenador y que vivan en Madrid
// let usersWithComputer = users.filter(user => {
//     return user.cart.some(product => {
//         return product.product === "Ordenador";
//     }) && user.city === "Madrid";
// });
// console.log(usersWithComputer);

// Busca los usuarios que hayan comprado un ordenador y que vivan en Madrid y que tengan más de 30 años
// let usersWithComputer = users.filter(user => {
//     return user.cart.some(product => {
//         return product.product === "Ordenador";
//     }) && user.city === "Madrid" && user.age > 30;
// });
// console.log(usersWithComputer);

// Ordena los usuarios por edad
// a es el primer elemento y b el segundo
// Si la resta es positiva, a es mayor que b
// Si la resta es negativa, b es mayor que a
// Si la resta es 0, son iguales
// let usersSortedByAge = users.sort((a, b) => {
//     return a.age - b.age;
// });
// console.log(usersSortedByAge);

// Ordena los usuarios por edad de forma descendente
// let usersSortedByAge = users.sort((a, b) => {
//     return b.age - a.age;
// });
// console.log(usersSortedByAge);

// Ordena los usuarios por nombre
// a equivale al primer elemento y b al segundo que se está comparando
// Si a.name es mayor que b.name, devuelve un número positivo
// Si a.name es menor que b.name, devuelve un número negativo
// Si a.name es igual que b.name, devuelve 0

// let usersSortedByName = users.sort((a, b) => {
//     if(a.name > b.name){
//         return 1;
//     } else if(a.name < b.name){
//         return -1;
//     } else {
//         return 0;
//     }
// });
// console.log(usersSortedByName);









