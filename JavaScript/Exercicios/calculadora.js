/**
 * estudo das funçoes
 * calculadoras
 */

const read = require ('readline-sync')

console.clear()
console.log('calculadora\n')
console.log('1- Somar')
console.log('2- subtrair')
console.log('3- multiplicar')
console.log('4- dividir')
console.log('5- porcentagem')
let opcao = Number (read.question('Digite a opcao desejada: ').replace(',','.'))

console.clear()
let num1 = Number (read.question('Digite o primeiro valor: ').replace(',','.'))

let num2 = Number (read.question('Digite o segundo valor: ').replace(',','.'))



switch (opcao) {
    case 1:
        somar(num1, num2)
        break 
    case 2:
        subtrair(num1, num2)
        break
    case 3:
        multiplicacao(num1, num2)
        break
    case 4:
        divisao(num1, num2)        
        break 
    case 5:
        porcentagem(num1, num2)
        break           
}


function somar  (num1 , num2) {
    return console.log(`a soma de ${num1} + ${num2} = ${num1 + num2}`)
}

function subtrair  (num1 , num2) {
    return console.log(`a subtracao de ${num1} - ${num2} = ${num1 - num2}`)
}

function multiplicacao  (num1 , num2) {
    return console.log(`a multiplicacao de ${num1} x ${num2} = ${num1 * num2}`)
}

function divisao  (num1 , num2) {
    if(num2 === 0) {
        console.log('impossivel efetuar o calculo')
    } else{
        return console.log(`a divisao de ${num1} / ${num2} = ${num1 / num2}`)
    }
}

function porcentagem  (num1 , num2) {
    return console.log(`a porcentagem de ${num1} % ${num2} = ${num1 / 100 * num2}`)
    
}


