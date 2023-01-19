//Desafio
type ContaBancaria ={
    saldo:number,
    depositar:(valor: number) => number
}

type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}


let contaAna: ContaBancaria = {
    saldo: 3456,
    depositar(valor:number):number{
        return this.saldo += valor
    }
}


let Ana: Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaAna,
    contatos: ['34567890', '32222222']
}

Ana.contaBancaria.depositar(3000)
console.log(Ana)