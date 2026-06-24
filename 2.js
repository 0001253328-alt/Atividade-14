let temperaturas = [];
let maiorTemp;
let indiceMaior;

for (let i = 0; i < 10; i++) {
    temperaturas[i] = parseFloat(prompt(`Digite a temperatura do dia ${i + 1}:`));
}

maiorTemp = temperaturas[0];
indiceMaior = 0;

for (let i = 1; i < 10; i++) {
    if (temperaturas[i] > maiorTemp) {
    maiorTemp = temperaturas[i];
    indiceMaior = i;
    }
}

console.log(`Maior temperatura: ${maiorTemp}°C`);
console.log(`Encontrada na posição (índice): ${indiceMaior}`);

alert(`Maior temperatura: ${maiorTemp}°C\nEncontrada na posição (índice): ${indiceMaior}`);