let car = {
    marca : " toyota",
    modelo : "corolla",
    year : 2020,
    color: "blue",

    displayInfo: function(){
        console.log(`car: ${this.make} ${this.model} year:${this.year} color${this.color}`)


    },
    pintarCarro: function(newColor){
        this.color = newColor
    }

}
    console.log(car.make)

    car.displayInfo()