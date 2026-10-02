const cliente = "Vinícius Cunha"
const opcaoMenu = 1
const quantidade = 4
const formaPagamento = "cartao"
let statusPedido = "pendente"

let prato
let precoUnitario

switch (opcaoMenu) {
  case 1:
    prato = "X-Burger"
    break
  case 2:
    prato = "X-Bacon"
    break
  case 3:
    prato = "Batata Frita"
    break
  case 4:
    prato = "Refrigerante"
    break
  default:
    prato = "Opção inválida"
}

switch (opcaoMenu) {
  case 1:
    precoUnitario = 22
    break
  case 2:
    precoUnitario = 28
    break
  case 3:
    precoUnitario = 15
    break
  case 4:
    precoUnitario = 6
    break
  default:
    precoUnitario = 0
}

const subtotal = precoUnitario * quantidade

const frete = subtotal >= 40 ? 0 : 10
const freteStatus = subtotal >= 40 ? "Frete grátis" : "Frete pago"

let pagamentoMensagem

switch (formaPagamento) {
  case "pix":
    pagamentoMensagem = "Pagamento via PIX"
    break
  case "cartao":
    pagamentoMensagem = "Pagamento via cartão"
    break
  case "dinheiro":
    pagamentoMensagem = "Pagamento em dinheiro"
    break
  default:
    pagamentoMensagem = "Forma de pagamento inválida"
}

let descontoPercentual

switch (formaPagamento) {
  case "pix":
  case "dinheiro":
    descontoPercentual = 5
    break
  case "cartao":
    descontoPercentual = 0
    break
  default:
    descontoPercentual = 0
}

const desconto = subtotal * descontoPercentual / 100
const total = subtotal - desconto + frete

let statusMensagem

switch (statusPedido) {
  case "pendente":
    statusMensagem = "Aguardando pagamento"
    break
  case "aprovado":
    statusMensagem = "Pedido em preparo"
    break
  case "enviado":
    statusMensagem = "Pedido a caminho"
    break
  case "cancelado":
    statusMensagem = "Pedido cancelado"
    break
  default:
    statusMensagem = "Status desconhecido"
}

const resumo = `Cliente: ${cliente}
Item: ${prato}
Quantidade: ${quantidade}
Subtotal: R$ ${subtotal}
Frete: ${freteStatus}
Pagamento: ${pagamentoMensagem}
Desconto: R$ ${desconto}
Total: R$ ${total}
Situação: ${statusMensagem}`

console.log(resumo)

module.exports = {
  cliente,
  opcaoMenu,
  quantidade,
  formaPagamento,
  statusPedido,
  prato,
  precoUnitario,
  subtotal,
  freteStatus,
  frete,
  pagamentoMensagem,
  descontoPercentual,
  desconto,
  total,
  statusMensagem,
  resumo
}