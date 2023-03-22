let numeros = []; // Array para guardar os números inseridos pelo usuario

numeros[0] = primeiroNumero();
numeros[1] = segundoNumero();

divisao(numeros) // Função que realiza a divisão dos numeros e tem como parametro o array numeros

function primeiroNumero() {
    let numero1 = prompt('Digite um numero')
    
    if(numero1 < 0 || !numero1) {
        alert('Digite um numero inteiro e positivo')
        return primeiroNumero()
    } else {
        return numero1
    }
    
}

function segundoNumero() {
    let numero2 = prompt('Digite um numero')
    
    if(numero2 < 0 || !numero2) {
        alert('Digite um numero inteiro e positivo')
        return segundoNumero()
    } else {
        return numero2
    }

}

function divisao(numeros) {
    let resultado = 0;
    
    resultado = numeros[0] / numeros[1];
    return alert(`O resultado da divisão de ${numeros[0]} / ${numeros[1]} = ${resultado}`)
}
