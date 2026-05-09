
var nome = prompt("Digite seu nome:");

var renda = parseFloat(prompt("Digite sua renda mensal:"));

while (isNaN(renda)) {
    renda = parseFloat(prompt("Digite uma renda válida:"));
}

var quantidade = parseInt(prompt("Quantas despesas deseja informar? (1 até 5)"));

while (isNaN(quantidade)) {
    quantidade = parseInt(prompt("Digite um número válido:"));
}

if (quantidade < 1) {
    quantidade = 1;
}

if (quantidade > 5) {
    quantidade = 5;
}

var totalDespesas = 0;

for (var i = 1; i <= quantidade; i++) {

    var despesa = parseFloat(prompt("Digite o valor da despesa " + i + ":"));

    while (isNaN(despesa)) {
        despesa = parseFloat(prompt("Digite um valor válido para a despesa " + i + ":"));
    }

    totalDespesas = totalDespesas + despesa;
}

var sobra = renda - totalDespesas;

var mensagem = "";

if (totalDespesas > renda) {

    mensagem = "⚠️ Você gastou mais do que ganhou.";

} else {

    if (sobra >= renda * 0.3) {

        mensagem = "✅ Boa margem de sobra.";

    } else {

        mensagem = "🙂 Dá para melhorar a sobra.";

    }

}

alert(
    "Nome: " + nome +
    "\nRenda: R$ " + renda.toFixed(2) +
    "\nDespesas: R$ " + totalDespesas.toFixed(2) +
    "\nSobra: R$ " + sobra.toFixed(2) +
    "\n\n" + mensagem
);

console.log("===== RESULTADO =====");
console.log("Nome: " + nome);
console.log("Renda: R$ " + renda.toFixed(2));
console.log("Despesas: R$ " + totalDespesas.toFixed(2));
console.log("Sobra: R$ " + sobra.toFixed(2));
console.log("Mensagem: " + mensagem);