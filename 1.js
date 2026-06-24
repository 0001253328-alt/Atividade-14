let estoque = [];
let soma = 0;

for (let i = 0; i < 8; i++) {
    estoque[i] = parseInt(prompt(`Digite a quantidade de caixas do produto ${i + 1}:`));
}

for (let i = 0; i < 8; i++) {
    soma += estoque[i];
}
console.log("Quantidade total de caixas no estoque: " + soma);
alert("Quantidade total de caixas no estoque: " + soma);