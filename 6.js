let matriz = [];

for (let i = 0; i < 3; i++) {
    matriz[i] = [];

    for (let j = 0; j < 3; j++) {
    matriz[i][j] = parseInt(
    prompt(`Digite o valor para a posição [${i}][${j}]:`)
);
    }
}

// Exibição da matriz
console.log("Matriz 3x3:");

for (let i = 0; i < 3; i++) {
    let linha = "";

    for (let j = 0; j < 3; j++) {
        linha += matriz[i][j] + "\t";
    }

    console.log(linha);
}