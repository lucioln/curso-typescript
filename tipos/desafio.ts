//Desafio
/*
    Criar um objeto funcionario com:
        Array de strings com o nome dos supervisores;
        Funcao bater ponto que recebe hora (numero) e retorna uma string
            ->ponto normal (<=8)
            ->ponto fora do horario (>8)
*/

// Alias
type Funcionario = {
    supervisores: string [],
    baterPonto:(hora:number) => string
}

let funcionario: Funcionario = {
    supervisores : ['Noletas', 'Samanthos'],
    
    baterPonto: function(hora:number): string {
        if(hora<=8){
            return 'Ponto normal'
        }else{
            return 'Fora do horario'
        }
    }
}

console.log(funcionario.baterPonto(5))
console.log(funcionario.supervisores)