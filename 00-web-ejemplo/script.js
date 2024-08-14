console.info('Hola Mundo')

let nombre = 'Sergio' // variable
const edad = 16 // constante
var is_developer = true // [!] obsoleta

// Diferencias : 'let' permite reasignación de valores ; 'const' no ; 'var' si es reasignable

// 'let' vs 'var' : 'var' aunque esté declarada dentro de un método, puede ser accedida desde cualquier lugar ; 'let' solo es accesible en
// el _scope_ en el que se declara

// ------------------------------------------------------------------------------------------------------------------------- //

// javascript, a diferencia de typescript, es de tipado debil. Es decir que a la variable 'nombre' {string} puedo reasignarle un {number}
nombre = 10

// en javascript no puedes asignarle un tipo a una variable
// let tipo: string = 'esto no es typescript'

// ------------------------------------------------------------------------------------------------------------------------- //

nombre.toUpperCase() // esto no funciona, los strings no son mutables por lo que no se puede modificar su valor (al ser un tipo primitivo)
const nombre_upper_case = nombre.toUpperCase() // lo que hacemos entonces es directamente crear un nuevo string (con el valor de 'nombre')

console.info(nombre_upper_case)

// ------------------------------------------------------------------------------------------------------------------------- //

const list = [] // arrays, objetos, funciones -> mutables
list.push(1) // añadir elemento
list.shift()