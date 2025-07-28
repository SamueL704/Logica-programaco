let vitorias = 200 
let derrotas = 50
let patente = calculoPatente(vitorias, derrotas)
let saldo = calculo(vitorias, derrotas)

console.log("O Herói tem de saldo de "+saldo+" \ne está no nível de "+patente)

function calculo(vitorias, derrotas){
    let saldo = vitorias - derrotas
    return saldo
}

function calculoPatente(vitorias, derrotas){
    let saldo = calculo(vitorias, derrotas)
    let patente

    if (saldo <= 10){
        patente = "ferro"
    }
    else if(saldo>=11 && saldo<=20){
        patente = "bronze"
    }
    else if(saldo>=21 && saldo<=50){
        patente = "Prata"
    }
    else if(saldo>=51 && saldo<=80){
        patente = "Ouro"
    }
    else if(saldo>=81 && saldo<=90){
        patente = "Diamante"
    }
    else if(saldo>=91 && saldo<=100){
        patente = "Lendário"
    }
    else if(saldo>=101){
        patente = "Imortal"
    }

    return patente
}