let alunos = [];

for (let i = 0; i < 6; i++) {
    alunos[i] = prompt(`Digite o nome do aluno ${i + 1}:`);
}

console.log("Lista de alunos em ordem inversa:");

for (let i = 5; i >= 0; i--) {
    console.log(alunos[i]);
}