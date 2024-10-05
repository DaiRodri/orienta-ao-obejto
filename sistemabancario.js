class ContaBancaria {
    constructor (titular,saldoInicial){
        this.titular = titular
        this.saldo = saldoInicial
    }

    versaldo(){
        console.log(`saldo atual de ${this.titular}: R$ ${this_saldo.toFixed(2)}`)
    }
    depositar (valor){
        if(valor <=0){
            console.log(`o valor do deposito deve ser positivo`)
            return
        }
        this.saldo += valor
        console.log(`deposito de R$ ${valor.toFixed(2)} realizado com sucesso`)
    }
    sacar(valor){
        if(valor<=0){
            console.log(`o valor do saque deve ser positivo`)
            return
        }
        if(valor > this.saldo){
            console.log(`saldo insuficiente para saque`)
            return
        }
        this_saldo = valor
        console.log(`saldo atualizado : ${this_saldo.toFixed(2)}`)
    }
}
let minhaConta = new ContaBancaria("stefani",3000)
minhaConta.versaldo()
minhaConta.depositar(500)
minhaConta.versaldo()
minhaConta.sacar(200)