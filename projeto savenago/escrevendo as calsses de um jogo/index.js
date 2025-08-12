class hero{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
    atacar(){
        console.log(this.nome+" atacou")
    }
}

class mago extends hero{
    constructor(nome, idade){
        super(nome, idade)
        this.tipo = "mago"
        this.ataque = "magia"
    }
    atacar(){
        console.log(`${this.tipo} atacou usando ${this.ataque}`)
    }
}
class guerreiro extends hero{
    constructor(nome, idade){
        super(nome, idade)
        this.tipo = "guerreiro"
        this.ataque = "espada"
    }
    atacar(){
        console.log(`${this.tipo} atacou usando ${this.ataque}`)
    }
}

class monge extends hero{
    constructor(nome, idade){
        super(nome, idade)
        this.tipo = "monge"
        this.ataque = "artes marciais"
    }
    atacar(){
        console.log(`${this.tipo} atacou usando ${this.ataque}`)
    }
}

class ninja extends hero{
    constructor(nome, idade){
        super(nome, idade)
        this.tipo = "ninja"
        this.ataque = "shuriken"
    }
    atacar(){
        console.log(`${this.tipo} atacou usando ${this.ataque}`)
    }
}

let maguin = new mago("maguin", 20)
let guerreirin = new guerreiro("guerrerin", 21)
let mongin = new monge("mongin", 22)
let ninjin = new ninja("ninjin", 23)

maguin.atacar()
guerreirin.atacar()
mongin.atacar()
ninjin.atacar()
