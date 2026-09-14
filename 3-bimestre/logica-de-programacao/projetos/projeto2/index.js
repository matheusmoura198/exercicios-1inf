const cliente = "Lucas Almeida"
const produto = "Notebook Gamer"
const preco = 4500
const quantidade = 2
const estoque = 10
const valorPago = 9000
const subtotal = preco * quantidade

//valores que podem mudar dependendo do caso//
let descontoPercentual = "nenhum"
let statusPedido ="aguardando"
let pagamentoStatus = "aguardo"
let estoqueDisponivel = "aguardando"

//casos diferentes//
if( estoque >= quantidade ){
    estoqueDisponivel = "sim"
    pagamentoStatus = "Pagamento aprovado"
    statusPedido = "pedido disponivel"
    descontoPercentual = "10"
    console.log("estoque disponivel")
}else{
    estoqueDisponivel = "não"
    pagamentoStatus = "reprovado"
    statusPedido = "pedido indisponivel"
    descontoPercentual = "0"
    console.log("estoque indisponivel")
}

//verificação do estoque//
if( quantidade <= estoque ){
    console.log("estoque disponivel")
}else{
    console.log("estoque indisponivel")
}

//desconto aplicado //
const desconto = 10
const valorDesconto = subtotal * (desconto / 100)
const valorFinal = subtotal - valorDesconto

//verificação do pagamento //
if( valorPago >= valorFinal ){
    pagamentoStatus = "aprovado"
    console.log("pagamento aprovado")
}else{
    pagamentoStatus = "reprovado"
    console.log("pagamento insuficiente")
}

//troco//
let troco = 0

if( valorPago >= valorFinal ){
    troco = valorPago - valorFinal
    console.log("tem troco")
}else{
    troco = 0
    console.log("0")
}

if( estoque >= quantidade ){
    console.log("Pedido disponível para finalização.")
}else{
    console.log("Pedido não pode ser finalizado por falta de estoque.")
}

const resumo = `${cliente} realizou a compra de um ${produto} pagando R$ ${valorPago} e obtendo R$ ${troco} de troco`

console.log(`
    cliente: ${cliente}
    produto: ${produto}
    preco: ${preco}
    quantidade: ${quantidade}
    subtotal: ${subtotal}
    desconto: ${desconto}
    valorDesconto: ${valorDesconto}
    valorFinal: ${valorFinal}
    estoqueDisponivel: ${estoqueDisponivel}
    valorPago: ${valorPago}
    pagamentoStatus: ${pagamentoStatus}
    troco: ${troco}`)

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
