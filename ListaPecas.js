const listaDePecas = ['Lanterna','Ro','Parabrisa']

console.log("------------------")

console.log("Inicio do cadastro")

console.log("------------------")


console.log("Verificação do peso da peça")

console.log("------------------")

let pesoPeca = 200
if (pesoPeca > 100) {console.log("peso ok, pode cadastrar a peça")}
else {console.log("peça recusada")}

console.log("------------------")


console.log("Verificação da quantidade da peça")

console.log("------------------")

let qtdePeca = 99
if (qtdePeca > 10) {console.log("ultrapassou o limite da caixa")}
else {console.log("caixa ok")}

console.log("------------------")


console.log("Verificação do nome da peça")

console.log("------------------")

for (let index = 0; index < listaDePecas.length; index++) {
        const nomePeca = listaDePecas[index];
            if (nomePeca.length < 3) {console.log("erro no nome da peça")}
            else {console.log("nome da peça ok")}
    
}
console.log("------------------")

console.log("fim do processamento")

console.log("------------------")