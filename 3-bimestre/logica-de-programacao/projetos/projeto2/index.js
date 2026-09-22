const cliente = "Lucas Almeida"
const produto = "Notebook Gamer"
const preco = 4500
const quantidade = 2
const estoque = 10
const desconto = 10
const valorPago = 9000
const subtotal = preco * quantidade
const estoqueDisponivel = estoque - quantidade
const descontoPercentual = subtotal * desconto / 100
const valorDesconto = subtotal - descontoPercentual
const valorFinal = valorPago - valorDesconto
 
let statusPedido = "aguardando"
let pagamentoStatus = "aguardando"

if ( estoque >= quantidade ){
    statusPedido = "Pedido disponível para finalização"
 }else{
    statusPedido = "Pedido não pode ser finalizado por falta de estoque"
}

let troco = valorPago - valorFinal 

if( valorPago >= valorFinal ){
    troco = "tem troco"
    console.log("troco de 900")}else{
    troco = 0
    console.log("não ha troco")
}

if ( valorPago >= valorFinal){
    pagamentoStatus = "Pagamento aprovado"
 } else {
    pagamentoStatus = "Pagamento insuficiente"
 }

const resumo=`
=====================================
   SISTEMA DE ANÁLISE DE PEDIDOS
=====================================
    cliente: ${cliente}
    preco: R$ ${preco}
    quantidade: R$ ${quantidade}
    estoque: ${estoque}
    valorpago: R$ ${valorPago}
    subtotal: R$ ${subtotal}
    estoqueDisponivel: ${estoqueDisponivel}
    descontoPercentual: ${descontoPercentual}%
    valorDesconto: ${valorDesconto}
    valorFinal: ${valorFinal}
    pagamentoStatus: ${pagamentoStatus}
    troco: ${troco}
    statusPedido: ${statusPedido}
`
console.log(resumo)

module.exports = {
    cliente,
    produto,
    preco,
    quantidade,
    estoque,
    valorPago,
    subtotal,
    estoqueDisponivel,
    descontoPercentual,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    troco,
    statusPedido,
    resumo
}
