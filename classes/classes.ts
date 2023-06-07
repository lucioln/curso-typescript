class Data {
    dia: number
    public mes: number
    ano: number

    constructor(dia: number, mes: number, ano: number) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const Aniversario = new Data(28, 11, 1998)

// console.log(Aniversario)

class DataEsperta {

    constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970) {

    }
}

const AniversarioEsperto = new DataEsperta(28, 11, 1998)

const DataPadrao = new DataEsperta

// console.log(AniversarioEsperto)

class Produto {
    constructor(public nome: string, public preco: number, public desconto: number = 0) {
    }

    private getPrecoComDesconto(): number {
        const precoComDesconto: number = this.preco - ((this.desconto / 100) * this.preco);
        return parseFloat(precoComDesconto.toFixed(2));
    }

    public resumo() {
        return 'O ' + this.nome + ' custa: ' + this.getPrecoComDesconto();
    }

    public setDesconto(desconto: number) {
        if (desconto < 99 && desconto > 0) {
            this.desconto = desconto;
            return;
        } else {
            return 'o Desconto não deve possuir um valor entre 0 e 99';
        }
    }
}

const cocaCola = new Produto("Coca-Cola 2L", 9.99)
const guaranaAntartica = new Produto("Guaraná-Antártica 2L", 6.99)
const guaranaJesus = new Produto("Guaraná-Jesus 2L", 8.99, 10)

// console.log(cocaCola)
// console.log(guaranaAntartica)
// console.log(guaranaJesus.resumo())

class Carro {
    private velocidadeAtual: number = 0

    constructor(public marca: string, public modelo: string, private velocidadeMaxima: number = 200) {
        this.modelo = modelo;
        this.marca = marca;
        this.velocidadeMaxima = velocidadeMaxima;
    }

    protected alteraVelocidade(delta: number): number {
        const novaVelocidade: number = this.velocidadeAtual + delta;

        if (this.velocidadeValida(novaVelocidade)) {
            this.velocidadeAtual = novaVelocidade;
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }

    private velocidadeValida(velocidade: number): boolean {
        if (velocidade >= 0 && velocidade <= this.velocidadeMaxima) {
            return true
        } else {
            return false
        }
    }

    public acelerar(): number {
        return this.alteraVelocidade(5);
    }

    public frear(): number {
        return this.alteraVelocidade(-5);
    }
}


const carro1 = new Carro('Fiat', 'Mobi', 190);



//Herança 

class Ferrari extends Carro {
    constructor(modelo: string, velocidadeMaxima: number) {
        super('Ferrari', modelo, velocidadeMaxima);
    }

    public acelerar(): number {
        return this.alteraVelocidade(20);
    }

    public frear(): number {
        return this.alteraVelocidade(-15);
    }
}

const f40 = new Ferrari('F40', 324);


//Somente Leitura
class Aviao {
    public readonly modelo: string

    constructor(modelo: string,
        public readonly prefixo: string) {
        this.modelo = modelo
    }

    //métodos estáticos
    public voar():string{
        return 'estou voando';
    }

}

const turboHelice = new Aviao('TU-114', 'PT-134');
// turboHelice.modelo = 'Nao recebe pois é readonly  =  ERROR';
console.log(turboHelice);