function dividir (a,b){
    try {
        if (b === 0){
            throw new Error (" dividão por zero não permitida")
        }
        return a / b
    } catch (erro){
        console.log("erro:" + erro.message)

    }finally {
        console.log ("operação finalizada")
    }
}
console.log (dividir(10,2))
console.log (dividir(10,0))