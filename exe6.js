class veiculo {
    constructor(marca,modelo,portas){
        super(marca,modelo)
        this.portas = portas
    }
}
info(){
    return `${super.info()} | Portas: ${this.portas}`

}
velocidadeMaxima(){
    return `velocidade maxima: ${super.velocidadeMaxima()} km/h`
}
    }

    const meuCarro = new Carro ("toyota","corola",4)
    console.log(meuCarro.info())