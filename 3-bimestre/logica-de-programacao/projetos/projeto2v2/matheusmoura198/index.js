const aluno = "Sabrina Lopes"
const turma = "Turma Intensiva"
const valorMensalidade = 450
const taxaMaterial = 80
const frequencia = 60
const notaNivelamento = 6
const valorPago = 530
const valorBase = valorMensalidade + taxaMaterial
const valorDesconto = 50
const percentualFrequencia = 60
const frequenciaStatus = "Frequência insuficiente"
const descontoStatus = "não a desconto "
const pagamentoStatus = "Matrícula quitada"
const statusMatricula = "Matrícula não pode ser confirmada frequência insuficiente"

if( frequencia >= 75 ){
    console.log("Frequência regular")
}else{
    console.log("Frequência insuficiente")
}

if( notaNivelamento >= 9 ){
    console.log("50% de desconto na mensalidade")
}else{
    console.log("não a desconto")
}

const valorFinal = valorBase - valorDesconto

if( valorPago >= valorFinal ){
    console.log("Matrícula quitada")
}else{
    console.log("Matrícula com saldo pendente")
}

const troco = valorPago - valorFinal

if( frequencia >= 75 ){
  if ( valorPago >= valorFinal )
    console.log("Matrícula confirmada")
}else{
    console.log("Matrícula não pode ser confirmada frequência insuficiente")
}

const resumo = `
============================================
SISTEMA DE MATRÍCULA EM CURSO PRÉ-VESTIBULAR
============================================
aluno: ${aluno}
valorMensalidade: ${valorMensalidade}
taxaMaterial: ${taxaMaterial}
frequencia: ${frequencia}
notaNivelamento: ${notaNivelamento}
valorPago: ${valorPago}
valorBase: ${valorBase}
valorDesconto: ${valorDesconto}
percentualFrequencia: ${percentualFrequencia}
frequenciaStatus: ${frequenciaStatus}
descontoStatus: ${descontoStatus}
pagamentoStatus: ${pagamentoStatus}
statusMatricula: ${statusMatricula}
`
console.log(resumo)

module.exports = {
aluno,
turma,
valorMensalidade,
taxaMaterial,
percentualFrequencia,
notaNivelamento,
valorPago,
valorBase,
frequenciaStatus,
descontoStatus,
valorDesconto,
valorFinal,
pagamentoStatus,
troco,
statusMatricula,
resumo
        }
