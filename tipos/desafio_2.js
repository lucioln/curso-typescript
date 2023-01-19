"use strict";
let contaAna = {
    saldo: 3456,
    depositar(valor) {
        return this.saldo += valor;
    }
};
let Ana = {
    nome: 'Ana Silva',
    contaBancaria: contaAna,
    contatos: ['34567890', '32222222']
};
Ana.contaBancaria.depositar(3000);
console.log(Ana);
