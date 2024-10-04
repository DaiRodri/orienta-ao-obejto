// criando obejto " caminhão"
let caminhao ={ 
    marca: "volkswagen", // propriedade:chave é a " marca", valor é "volkswagen"
    modelo: "constellation", // propriedade:chave é a " modelo", valor é "constellation"
    ano: 2024, // propriedade:chave é a " ano", valor é "2024"
    cor: "prata", // propriedade:chave é a " cor", valor é "prata"

    cabine : [
        { tipo: "simples",capacidade:2, teto: "fechado"},
        {tipo: "dupla",capacidade: 5},
    ],

    
// metodo: define uma função associada ao objeto
    ligar: function(){
     console.log("o caminhão está ligado")
    },

    desligar: function(){
        console.log("o caminhão está desligado")

    }
}

//acessando propriedades do objeto
console.log(caminhao.cabine[1].capacidade) //saida:volkswagen
console.log(caminhao["ano"], caminhao["marca"]) //saida 2024
console.log(caminhao.cor) //saida 2024

//chamando o metodo do objeto
//caminhao.ligar() // saida: o caminhão está ligado
caminhao.desligar()
caminhao.ligar()