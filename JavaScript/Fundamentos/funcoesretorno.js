/**
 * funçoes com parametros e retornos
 */

//sintaxe comum

function somar(num1, num2) {
    return (console.log(num1 + num2))
}

//para executar a funçao, devemos passar 2 valores
somar(2,5)

//funçao atribuida
let somarA = function (num1, num2) {
    return (console.log(num1 + num2))
}

somarA(5,5)

//arrow function
let somarAF = (num1, num2) => {
    return (console.log(num1 + num2))
}

somarAF(2,2)