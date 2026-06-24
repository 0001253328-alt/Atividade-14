let notas = [];
let soma = 0;
let acimaMedia = 0;

for (let i = 0; i < 5; i++) {
    notas[i] = parseFloat(prompt(`Digite a nota do aluno ${i + 1}:`));
    soma += notas[i];
}

let media = soma / 5;

for (let i = 0; i < 5; i++) {
    if (notas[i] > media) {
        acimaMedia++;
    }
}

console.log(`Média da turma: ${media.toFixed(2)}`);
console.log(`Quantidade de alunos acima da média: ${acimaMedia}`);

alert(
    `Média da turma: ${media.toFixed(2)}\n` +
    `Quantidade de alunos acima da média: ${acimaMedia}`
);