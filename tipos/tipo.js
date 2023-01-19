"use strict";
//String 
let nome = 'João';
console.log(nome);
//nome = 28
//Numbers 
let idade = 27;
//idade = 'Ana'
idade = 27.5;
console.log(idade);
// boolean 
let possuiHobbies = false;
//possuiHobbies = 1 
console.log(possuiHobbies);
//tipos explicitos 
let minhaIdade; // == let minhaIdade:any
minhaIdade = 27;
console.log(typeof minhaIdade);
minhaIdade = '27 anos';
console.log(typeof minhaIdade);
let minhaIdadeExplicita;
//minhaIdadeExplicita = '27'
minhaIdadeExplicita = 24;
// Array 
let hobbies = ['cozinhar', 'Praticar Esportes'];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100];
//hobbies = 100
// Tuplas -> define a ordem e os tipos dentro de um array
let endereco = ['Av Principal', 99, 'Sao Luis'];
console.log(endereco);
//endereco = [99, 'Av Principal']
// Enums  ->
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 9] = "Azul";
    Cor[Cor["Laranja"] = 10] = "Laranja";
    Cor[Cor["Amarelo"] = 11] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Verde, Cor.Vermelho);
console.log(Cor.Azul, Cor.Laranja);
// Any
let carro = 'BMW';
console.log(typeof carro);
carro = { marca: 'BMW', ano: 2022, modelo: "320i" };
console.log(typeof carro);
//funcoes 
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('Oi');
    //return nome 
}
function multiplicar(numA, numB) {
    return numA * numB;
}
multiplicar(5, 5);
//funcao como tipo 
let calculo;
function somar(a, b) {
    return a + b;
}
calculo = somar;
console.log(calculo(5, 5));
calculo = multiplicar;
console.log(calculo(5, 5));
//Objeto
let usuario = {
    nome: 'Joao',
    idade: 27
};
usuario = {
    nome: "lucio",
    idade: 23
};
//Unior Types
let nota = 10;
console.log(`Minha nota é ${nota}!`);
nota = '10';
console.log(`Minha nota é ${nota}!`);
// Checando tipos
let valor = 30;
if (typeof valor === "number") {
    console.log('È um number');
}
else {
    console.log(typeof valor);
}
// Tipo never -> quando vc quer dizer que a funcao nunca vai retornar
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'Sabão',
    preco: 4,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (!this.preco || this.preco <= 0) {
            falha('Preço inválido ou não existente');
        }
    }
};
produto.validarProduto();
//null 
let altura = 12;
//altura = null
let alturaOpicional = 12;
alturaOpicional = null;
