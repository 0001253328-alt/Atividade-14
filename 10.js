
let A = [];
let B = [];
let C = [];

for (let i = 0; i < 2; i++) {
    A[i] = [];

    for (let j = 0; j < 3; j++) {
    A[i][j] = parseInt(
    prompt(`Digite o valor de A[${i}][${j}]:`)
    );
    }
}

for (let i = 0; i < 2; i++) {
    B[i] = [];

    for (let j = 0; j < 3; j++) {
    B[i][j] = parseInt(
    prompt(`Digite o valor de B[${i}][${j}]:`)
    );
    }
}

for (let i = 0; i < 2; i++) {
    C[i] = [];

    for (let j = 0; j < 3; j++) {
        C[i][j] = A[i][j] + B[i][j];
    }
}

console.log("Matriz C (A + B):");

for (let i = 0; i < 2; i++) {
    let linha = "";

    for (let j = 0; j < 3; j++) {
    linha += C[i][j] + "\t";
    }

    console.log(linha);
}