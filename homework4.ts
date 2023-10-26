/*
4- Dado el siguiente arreglo:
let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];
Utilizando un ciclo FOR, barra todo el arreglo y determine ¿Cuál es el número mayor?
*/

export let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5 ]; 
let i = 0;
let bigger = 0;


for(let i = 0, len = numbers.length; i < len ; i ++) {

    if(bigger < numbers[i]) {

        bigger= numbers [i];

    }

}

    console.log ('El numero mayor es: ', bigger);

