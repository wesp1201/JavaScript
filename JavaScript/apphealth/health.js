/**
 * APP HEALTH
 * @author Weslley Moreira
 */

//IMC - Indice de massa corporal
//FCM - Frequencia cardiaca maxima
//TMC - Taxa de metabolismo basal
let peso, altura, imc, idade, fcm, tmb

function calcular(){
    idade = frmIMC.txtIdade.value
    peso = frmIMC.txtPeso.value
    altura = frmIMC.txtAltura.value
    //validaçao do formulario
    if (frmIMC.txtIdade.value === '') {
        alert('preencha a idade')
        frmIMC.txtIdade.focus()
    }else if(frmIMC.txtPeso.value === ''){
        alert('preencha o peso')
        frmIMC.txtPeso.focus()
    }else if(frmIMC.txtAltura.value === ''){
        alert('preencha a altura')
        frmIMC.txtAltura.focus()
    }else if(document.getElementById('m').checked === false && document.getElementById('f').checked === false){
        alert('selecione o sexo')
    }else if(frmIMC.nivel.value === ''){
        alert('selecione o nivel de atividade')
        frmIMC.nivel.focus()  
    } else {
        imc = peso / (altura * altura)
        document.getElementById('imc').innerHTML=(`imc: ${imc.toFixed(2)}`)
        if (imc < 18.5){
            document.getElementById('imc').innerHTML='Abaixo do peso'
            document.getElementById('grafico').src='icons/baixo.png'
        } else if (imc < 25) {
            document.getElementById('imc').innerHTML='Peso normal'
            document.getElementById('grafico').src='icons/normal.png'
        } else if (imc < 30){
            document.getElementById('imc').innerHTML='Sobrepeso'
            document.getElementById('grafico').src='icons/sobrepeso.png'
        } else if (imc < 35) {
            document.getElementById('imc').innerHTML='Obesidade grau 1'
            document.getElementById('grafico').src='icons/obesidade1.png'
        } else if (imc < 40) {
            document.getElementById('imc').innerHTML='Obesidade grau 2'
            document.getElementById('grafico').src='icons/obesidade2.png'
        } else{
            document.getElementById('imc').innerHTML='Obesidade Morbida'
            document.getElementById('grafico').src='icons/obesidade2.png'
        }
        //FCM - Formula de tanaka
        fcm = 208 - (0.7 * idade)
        document.getElementById('freq').innerHTML=`FCM: ${fcm}` 

        //TMB - Formula de Harris Benedict
        //variaveis locais para capturar o conteudo da lista (vetor)
        let select = document.getElementById('atividade')
        let opcaoValor = Number(select.options[select.selectedIndex].value)
        if (document.getElementById('m').checked === true) {
            tmb = (66 + (13.7 * peso) + (5 * (altura * 100) - (6.8 * idade))) * opcaoValor
        }
        if (document.getElementById('f').checked === true) {
            tmb = (655 + (9.6 * peso) + (1.8 * (altura * 100) - (4.7 * idade))) * opcaoValor
        }

        document.getElementById('calorias').innerHTML = tmb.toFixed(2)
    }
}

function limpar(){
    document.getElementById('imc').innerHTML=''
    document.getElementById('status').innerHTML=''
    document.getElementById('freq').innerHTML=''
    document.getElementById('grafico').src='icons/reset.png'

}