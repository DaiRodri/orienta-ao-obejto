function CarroUngido (marca,modelo,ano,cor){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    this.ligar = function(){
        console.log("o carro esta ligado");
    };
}
let meuCarro = new CarroUngido ("volkswagen","gol",2016,"preto")

console.log(meuCarro.marca);
meuCarro.ligar();
console.log(meuCarro);
