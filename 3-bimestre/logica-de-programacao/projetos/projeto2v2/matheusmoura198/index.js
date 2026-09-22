const aluno = "Sabrina Lopes"
const turma = "Turma Intensiva"
const valorMensalidade = 450
const taxaMatricula = 80
const percentualFrequencia = 60
const notaNivelamento = 6
const valorPago = 530
const valorBase = valorMensalidade + taxaMatricula
const frequenciaStatus = "Frequencia não atendida"
const descontoStatus = "Sem desconto pro estudante"
const pagamentoStatus = "Matricula quitada"
const statusMatricula = "Matricula do estudante confirmada"

if( percentualFrequencia >= 75 ){
    console.log("Frequência regular")
}else{
    console.log("Frequência insuficiente")
}

let valorDesconto = "verificando"

if( notaNivelamento >= 9 ){
    valorDesconto = 50
    console.log("Ha desconto")
}else{
    valorDesconto = 0
    console.log("Não ha desconto")
}

const valorFinal = valorBase - valorDesconto

if( valorPago >= valorFinal){
    console.log("Matricula quitada")
}else{
    console.log("Matrícula com saldo pendente")
}

let troco = valorPago - valorFinal 

if( valorPago > valorFinal ){
    troco = "tem troco"
}else{
    troco = 0
}

if ( percentualFrequencia >= 75 ) {
    if (valorPago >= valorFinal) {
        console.log("Matrícula confirmada")
}else {
        console.log("Matrícula confirmada com saldo pendente")
    }
}else {
    console.log("Matrícula não pode ser confirmada: frequência insuficiente")
}

const resumo = `
================================================
  SISTEMA DE MATRÍCULA EM CURSO PRÉ-VESTIBULAR
================================================
aluno: ${aluno}
turma: ${turma}
valorMensalidade: ${valorMensalidade}
taxaMatricula: ${taxaMatricula}
percentualFrequencia: ${percentualFrequencia}
notaNivelamento: ${notaNivelamento}
valorPago: ${valorPago}
valorBase: ${valorBase}
frequenciaStatus: ${frequenciaStatus}
descontoStatus: ${descontoStatus}
valorDesconto: ${valorDesconto}
valorFinal: ${valorFinal}
pagamentoStatus: ${pagamentoStatus}
troco: ${troco}
statusMatricula: ${statusMatricula}
`
console.log(resumo)

module.exports = {
    aluno,
    turma,
    valorMensalidade,
    taxaMatricula,
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
