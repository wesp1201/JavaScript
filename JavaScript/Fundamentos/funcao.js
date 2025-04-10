/**
 * estudo das funçoes
 */

function hello() {
    console.log('hello function')
}

//para excutar uma funçao basta escrever o nome da funçao junto com parenteses

hello()

//funçoes atribuidas
const hello2 = function() {
    console.log('hello function atribuida')
}

hello2()

//funçao atribuida simplificada (arrow function)
const hello3 = () => {
    console.log('hello arrow function')
}

hello3()

console.log(typeof(hello3
    ))