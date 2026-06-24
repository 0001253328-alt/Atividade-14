let codigos = [];
let encontrado = false;

for (let i = 0; i < 10; i++) {
    codigos[i] = parseInt(prompt(`Digite o código ${i + 1}:`));
}

let codigoBusca = parseInt(prompt("Qual código você deseja rastrear?"));

for (let i = 0; i < 10; i++) {
    if (codigos[i] === codigoBusca) {
    console.log(`Código encontrado no índice ${i}`);
    alert(`Código encontrado no índice ${i}`);
    encontrado = true;
    break;
    }
}

if (!encontrado) {
    console.log("Código não cadastrado");
    alert("Código não cadastrado");
}