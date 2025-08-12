let productStok = 5
//entrada do usuário
let choice = gets(1);
let quantity = gets(3);

if (choice === 1){
    console.log("quanto você quer adicionar?")

    productStok += quantity
    console.log(`quantidade do estoque: ${productStok}`)
}
else if (choice === 2){
    console.log("quanto você quer retirar?")

    if (quantity > productStok){
        console.log("Estoque insuficiente")
    }else{
        productStok -= quantity
    }
    console.log(`quantidade do estoque: ${productStok}`)
    
}
else{
    console.log("escolha uma opção valida (1 ou 2)")
}