"use strict";
// function saudarComOla(pessoa:{nome:string}){
//     console.log('Olá ' + pessoa.nome)
// }
function saudarComOla(pessoa) {
    console.log('Olá ' + pessoa.nome);
}
function mudarNome(pessoa, novoNome) {
    pessoa.nome = novoNome;
}
const pessoa = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome) {
        console.log('Meu nome é ' + this.nome + ' ' + sobrenome);
    }
};
mudarNome(pessoa, 'Lucio');
// pessoa.saudar('Noleto')
//Utilizando Classes com Interfaces
class Cliente {
    constructor() {
        this.nome = '';
    }
    saudar(sobrenome) {
        console.log('Meu nome é ' + this.nome + ' ' + sobrenome);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = 'Han';
meuCliente.saudar('Solo');
let potencia;
potencia = function (base, exp) {
    return Math.pow(base, exp);
};
console.log(potencia(2, 3));
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
class AbstrataABD {
    a() { }
    b() { }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 2;
const y = 3;
const z = 4;
x.log();
y.log();
z.log();
const cli = {
    nome: 'Samantha',
    toString() {
        return this.nome;
    }
};
cli.log();
//# sourceMappingURL=interfaces.js.map