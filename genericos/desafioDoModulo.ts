// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()

type ChaveValor<k,v> = {chave:k , valor:v}

class Mapa <key, value>{
    itens: Array<ChaveValor<key,value>> = new Array<ChaveValor<key,value>>()    

    obter(chave:key): ChaveValor<key,value> | null{
        const resultado = this.itens.filter(i => i.chave === chave) 
        return resultado ? resultado[0] : null
    }
    
    colocar(item:ChaveValor<key,value>){
        const encontrado = this.obter(item.chave)
        if(encontrado){
            encontrado.valor  = item.valor
        }else{
            this.itens.push(item)
        }
    }

    limpar(){
        this.itens = []
    }

    imprimir(){
        console.log(this.itens)
    }
}

 
const mapa = new Mapa<number, string>()
mapa.colocar({ chave: 1, valor: 'Pedro' })
mapa.colocar({ chave: 2, valor: 'Rebeca' })
mapa.colocar({ chave: 3, valor: 'Maria' })
mapa.colocar({ chave: 1, valor: 'Gustavo' })
 
console.log(mapa.obter(2))
mapa.imprimir()
mapa.limpar()
mapa.imprimir()