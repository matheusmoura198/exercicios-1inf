const prompt = require("prompt-sync")()

const precoUnitario = Number(prompt("Preço unitário: "))
const quantidade = Number(prompt("Quantidade: "))
const formaPagamento = prompt("Forma de pagamento: ")

const calcularSubtotal = ( preco , quantidade ) => {
    return preco * quantidade
}

function calcularFrete( subtotal ){
    if ( subtotal >= 100 ) {
        return 0
    } else {
        return 10
    }
}

function calcularDesconto(subtotal, formaPagamento) {
    let percentual = 0

switch (formaPagamento){
    case "pix":
        percentual = 5
        break
    case "dinheiro":
        percentual = 5
        break
    case "cartao":
        percentual = 0
               break
}
    return subtotal * percentual / 100           
}

function calcularTotal ( preco ,  quantidade , formaPagamento ){
    const subtotal = calcularSubtotal(preco, quantidade)
    const frete = calcularFrete(subtotal)
    const desconto = calcularDesconto(subtotal, formaPagamento)

    return subtotal - desconto + frete 
}

const subtotal = calcularSubtotal(precoUnitario, quantidade)
const frete = calcularFrete(subtotal)
const desconto = calcularDesconto(subtotal, formaPagamento)
const total = calcularTotal(precoUnitario, quantidade, formaPagamento)


const resumo = `
==============================================================

           CALCULADORA DE PEDIDOS DE PASTELARIAS      

==============================================================
Subtotal: R$ ${subtotal}
Frete: R$ ${frete}
Desconto: R$ ${desconto}
Total: R$ ${total}
==============================================================
`
console.log(resumo)

module.exports = {
    precoUnitario,
    quantidade,
    formaPagamento,
    calcularSubtotal,
    calcularFrete,
    calcularDesconto,
    calcularTotal,
    subtotal,
    frete,
    desconto,
    total,
    resumo
}