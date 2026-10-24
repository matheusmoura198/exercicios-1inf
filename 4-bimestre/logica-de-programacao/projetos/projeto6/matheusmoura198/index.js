const prompt = require('prompt-sync')() 

const quantidadeDeDias = Number(prompt("Quantidade de dias?:")) 

const metaDiaria = Number(prompt("Meta diaria:"))

const metaSemanal = Number(prompt("Meta semanal:")) 

let totalVendido = 0  
let diasAcimaDaMeta = 0 
let melhorDia = 0 

for (let i = 1; i <= quantidadeDeDias; i++) { 
  const venda = Number(prompt(`Venda do dia ${i}:`)) 

totalVendido = totalVendido + venda 

if (venda >= metaDiaria) { 
  diasAcimaDaMeta++ } 
                                             
if (venda > melhorDia) { 
  melhorDia = venda } 
} 

const mediaVendas = totalVendido / quantidadeDeDias

const situacaoSemana = totalVendido >= metaSemanal ? "Meta semanal atingida" : "Meta semanal não atingida" 

const resumo = ` 
totalVendido: ${totalVendido}
mediaVendas: ${mediaVendas} 
diasAcimaDaMeta: ${diasAcimaDaMeta} 
melhorDia: ${melhorDia} 
situacaoSemana: ${situacaoSemana} 
`

console.log(resumo)

module.exports = {
    quantidadeDeDias,
    metaDiaria,
    metaSemanal,
    totalVendido,
    mediaVendas,
    diasAcimaDaMeta,
    melhorDia,
    situacaoSemana,
    resumo
}
