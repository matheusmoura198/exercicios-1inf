const prompt = require("prompt-sync")()

let nomeTurno = prompt("Nome turno:")
let meta = Number(prompt("Digite a meta:"))
let producaoInicial = Number(prompt("Produção inicial:"))
let pecasPorCaixa = Number(prompt("Peças por caixa:")) 

let producaoFinal = producaoInicial

while ( producaoFinal < meta ){
    producaoFinal++
}

let caixasNecessarias = 0

do{
    caixasNecessarias++
}  while (caixasNecessarias * pecasPorCaixa < producaoFinal)

let situacaoMeta = producaoFinal >= meta ? "Meta atingida" : "Meta não atingida"

const resumo = `
nomeTurno: ${nomeTurno}
meta: ${meta}
producaoInicial: ${producaoInicial}
pecasPorCaixa: ${pecasPorCaixa}
producaoFinal: ${producaoFinal}
caixasNecessarias: ${caixasNecessarias}
situacaoMeta: ${situacaoMeta}
`
console.log(resumo)

module.exports = {
    nomeTurno,
    meta,
    producaoInicial,
    pecasPorCaixa,
    producaoFinal,
    caixasNecessarias,
    situacaoMeta,
    resumo
}