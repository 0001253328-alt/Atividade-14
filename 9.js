
let desempenho = [];

for (let i = 0; i < 3; i++) {
    desempenho[i] = [];

    for (let j = 0; j < 4; j++) {
    desempenho[i][j] = parseInt(
    prompt(`Digite a pontuação da Equipe ${i + 1} no Trimestre ${j + 1}:`)
    );
    }
}

for (let i = 0; i < 3; i++) {
    let maior = desempenho[i][0];

    for (let j = 1; j < 4; j++) {
    if (desempenho[i][j] > maior) {
    maior = desempenho[i][j];
    }
    }

    console.log(`Equipe ${i + 1}: maior pontuação = ${maior}`);
}