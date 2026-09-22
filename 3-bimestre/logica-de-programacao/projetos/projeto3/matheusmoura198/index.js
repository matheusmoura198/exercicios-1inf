const nome = "Matheus Moura"
const idade = 18
const categoria = "comum"
const possuiInscricao = true
const suspenso = false
const valorInscricao = 50
const valorPago = 50
const idadeStatus = "Idade permitida"
const nivelAcesso = "organizador"


if( idade >= 18 ){
    console.log("Idade permitida")
}else{
    console.log("Idade não permitida")
}

if( nivelAcesso === "organizador" || "arbitro" ){
    console.log("Acesso administrativo liberado")
}else{
    console.log("Acesso comum")
}

if ( idade >= 18  && possuiInscricao === true && suspenso != false ){
    console.log("Credenciamento liberado")
}else{
    console.log("Credenciamento negado")
}

if( valorPago >= valorInscricao ){
    console.log("Pagamento aprovado")
}else{
    console.log("Pagamento insuficiente")
}

let troco = valorPago - valorInscricao

if( valorPago >= valorInscricao ){
    troco = "tem troco"
}else{
    troco = 0
}

if( Credenciamentoliberado && Pagamentoaprovado ){
    console.log("Participação confirmada")
}else{
    console.log("Participação não confirmada")
}

const resumo = `
    nome: ${nome}
    idade: ${idade}
    categoria: ${categoria}
    possuiInscricao: ${possuiInscricao}
    suspenso: ${suspenso}
    valorInscricao: ${valorInscricao}
    valorPago: ${valorPago}
    idadeStatus: ${idadeStatus}
    nivelAcesso: ${nivelAcesso}
    acessoStatus: ${acessoStatus}
    pagamentoStatus: ${pagamentoStatus}
    troco: ${troco}
    statusCompeticao: ${statusCompeticao}
`
console.log(resumo)

module.exports = {
    nome,
    idade,
    categoria,
    possuiInscricao,
    suspenso,
    valorInscricao,
    valorPago,
    idadeStatus,
    nivelAcesso,
    acessoStatus,
    pagamentoStatus,
    troco,
    statusCompeticao,
    resumo
}
