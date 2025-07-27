// AND (&&)
let idade = 18
let vistoVerificado = false
let resultado = (idade >=18) || (vistoVerificado == true)
console.log("pode entrar? "+resultado)

// OR ( || ) 
idade = 17
let amigoDoDono = true
resultado = (idade >=18) || (amigoDoDono == true)
console.log("pode entrar? "+resultado)

//NOT ( ! ) - nega uma afirmação
let tempo = "chuva"
resultado = tempo !== "chuva"

console.log(resultado)