var entrada = require("readline-sync");
var saldo = 1000;
var teste = false;
function opc1() {
    var saque = parseFloat(entrada.question("Digite o valor de saque: "));
    if (saque <= saldo) {
        var senha = entrada.question("Digite sua senha:  ");
        if (senha == 42532971886)
            saldo = saldo - saque;
        else
            console.log("Senha incorreta");
    }
    else
        console.log("Valor Indisponivel");
}
function opc2() {
    //let opc2 = parseFloat(entrada.question("Retornar a tela principal(1) ou Sair (2): "));
    var deposito = parseFloat(entrada.question("Digite o valor de deposito: "));
    if (deposito > 0) {
        var senha = entrada.question("Digite sua senha: ");
        if (senha == 42532971886) {
            saldo = saldo + deposito;
        }
        else
            console.log("Senha incorreta");
    }
}
function opc3() {
    //let opc2 = parseFloat(entrada.question("Retornar a tela principal(1) ou Sair (2): "));
    var sair = entrada.question("Sair digite 3: ");
    var inicio = entrada.question('Voltar para inicio digite 4: ');
}
for (var i = 0; i < 3; i++) {
    var login = entrada.question("Digite seu usuario: ");
    var senha = entrada.question("Digite sua senha: ");
    if (login == "luany" && senha == 42532971886) {
        teste = true;
        i = 3;
    }
}
while (teste) {
    console.log("Seu saldo atual: " + saldo);
    console.log("Saque opcao 1");
    console.log("Deposito opcao 2");
    console.log("Sair opcao 3");
    var opcao = parseFloat(entrada.question(""));
    switch (opcao) {
        case 1:
            opc1();
            break;
        case 2:
            opc2();
            break;
        case 3:
            teste = false;
            break;
        default:
            teste = true;
            break;
    }
}
