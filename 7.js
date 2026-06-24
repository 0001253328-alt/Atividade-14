let matriz = [];
let soma = 0;

for (let i = 0; i < 3; i++) {
    matriz[i] = [];

    for (let j = 0; j < 3; j++) {
        matriz[i][j] = parseInt(
            prompt(`Digite o valor da posição [${i}][${j}]:`)
        );
    }
}

console.log("Elementos da Diagonal Principal:");

for (let i = 0; i < 3; i++) {
    console.log(matriz[i][i]);
    soma += matriz[i][i];
}

console.log("Soma da Diagonal Principal: " + soma);
alert("Soma da Diagonal Principal: " + soma);