const cliente = "Lucas Almeida"
const produto = "Notebook Gamer"
const preco = 4500
const quantidade = 2
const estoque = 10
const valorPago = 9000
const subtotal = preco * Quantidade

//valores que podem mudar dependendo do caso//
let descontoPercentual = "nenhum"
let statusPedido ="aguardando"
let pagamentoStatus = "aguardo"
let estoqueDisponivel = "aguardando"

//casos diferentes//
if( Estoque >= Quantidade ){
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
if( Quantidade <= Estoque ){
    console.log("estoque disponivel")
}else{
    console.log("estoque indisponivel")
}

//desconto aplicado //
const desconto = 10
const valorDesconto = subtotal * (desconto / 100)
const Valorfinal = subtotal - valorDesconto

//verificação do pagamento //
if( Valorpago >= Valorfinal ){
    pagamentoStatus = "aprovado"
    console.log("pagamento aprovado")
}else{
    pagamentoStatus = "reprovado"
    console.log("pagamento insuficiente")
}

//troco//
let troco = 0

if( Valorpago >= Valorfinal ){
    troco = Valorpago - Valorfinal
    console.log("tem troco")
}else{
    troco = 0
    console.log("0")
}

if( Estoque >= Quantidade ){
    console.log("Pedido disponível para finalização.")
}else{
    console.log("Pedido não pode ser finalizado por falta de estoque.")
}

const resumo = `${Cliente} realizou a compra de um ${Produto} pagando R$ ${Preço} e obtendo R$ ${troco} de troco`

console.log(`
    Cliente: ${Cliente}
    Produto: ${Produto}
    Preço: ${Preço}
    Quantidade: ${Quantidade}
    subtotal: ${subtotal}
    desconto: ${desconto}
    valorDesconto: ${valorDesconto}
    Valorfinal: ${Valorfinal}
    estoqueDisponivel: ${estoqueDisponivel}
    Valorpago: ${Valorpago}
    pagamentoStatus: ${pagamentoStatus}
    troco: ${troco}`)

    console.log(resumo)


module.exports = {
    Cliente,
    Produto,
    Preço,
    Quantidade,
    Estoque,
    Valorpago,
    subtotal,
    estoqueDisponivel,
    descontoPercentual,
    valorDesconto,
    Valorfinal,
    pagamentoStatus,
    troco,
    statusPedido,
    resumo
            }
