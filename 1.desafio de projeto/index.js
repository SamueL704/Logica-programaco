let nome = "samuel"
let exp = 0
let patente = ""



for (let contador=0; contador<=10; contador++){
    
    if (exp <= 1000){
    patente = "Ferro"
    }
    else if(exp >= 1001 && exp <= 2000){
        patente = "Bronze"
    }
    else if(exp >= 2001 && exp <= 5000){
        patente = "Prata"
    }
    else if(exp >= 5001 && exp <= 7000){
        patente = "Ouro"
    }
    else if(exp >= 7001 && exp <= 8000){
        patente = "Platina"
    }
    else if(exp >= 8001 && exp <= 9000){
        patente = "Ascendente"
    }
    else if(exp >= 9001 && exp <= 10000){
        patente = "Imortal"
    }
    else if(exp >= 10001){
        patente = "Radiante"
    }
    
    console.log("XP "+ exp)
    console.log("Patente "+patente)
    exp += 1000
    console.log("você conseguiu + 1000 XP")
    
    
}

console.log("nome do herói "+nome)
console.log("XP "+exp)
console.log("patente "+patente)

