// CRIE SUA SOLUÇÃO ABAIXO ================
const cliente= "Mariana Silva"
const cidade= "Fortaleza"
const produto= "Notebook Pro"
const categoria= "Notebook"
const preco= 3500
const quantidade= 2
const descontoPercentual= 10
const valorPago= 7000
const subtotal= preco * quantidade
const valorDesconto= subtotal * descontoPercentual / 100
const valorFinal= subtotal - valorDesconto
const troco= valorPago - valorFinal
const resumo = `${cliente} fez o pedido de um ${produto} e recebeu R$ ${troco} de troco tendo R$ ${valorFinal} de valor final`

console.log(`==================================================
TECHSTORE SISTEMAS
RESUMO DO PEDIDO
==================================================
cliente:${cliente}
cidade:${cidade}
produto:${produto}
categoria:${categoria}
preco:${preco}
quantidade:${quantidade}
descontoPercentual:${descontoPercentual}
valorPago:${valorPago}
subtotal:${subtotal}
valorDesconto:${valorDesconto}
valorFinal:${valorFinal}
troco:${troco}`)

console.log(resumo)
 
// === FIM DO CÓDIGO =======================
// === NÃO FAZER NADA ABAIXO DESSA LINHA ===
module.exports = {
  cliente,
  cidade,
  produto,
  categoria,
  preco,
  quantidade,
  descontoPercentual,
  valorPago,
  subtotal,
  valorDesconto,
  valorFinal,
  troco,
  resumo
}