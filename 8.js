let matriz = [];

for (let i = 0; i < 4; i++) {
    matriz[i] = [];

    for (let j = 0; j < 4; j++) {
        if (i === j) {
            matriz[i][j] = 1;
        } else {
            matriz[i][j] = 0;
        }
    }
}

console.log("Matriz Identidade 4x4:");

for (let i = 0; i < 4; i++) {
    let linha = "";

    for (let j = 0; j < 4; j++) {
        linha += matriz[i][j] + "\t";
    }

    console.log(linha);
}