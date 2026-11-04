
const prompt = require("prompt-sync")()

const catalogo = []

const limiteEstoqueBaixo = Number(prompt("Digite o limite de estoque baixo: "))

const quantidadeProdutos = Number(prompt("Digite a quantidade de produtos: "))

for (let i = 0; i < quantidadeProdutos; i++) {
    const nome = prompt(`Digite o nome do produto ${i + 1}: `)
    const preco = Number(prompt(`Digite o preço do produto ${i + 1}: `))
    const estoque = Number(prompt(`Digite o estoque do produto ${i + 1}: `))

    catalogo.push({
        nome: nome,
        preco: preco,
        estoque: estoque
    })
}

let produtoMaisCaro = catalogo[0].nome
let maiorPreco = catalogo[0].preco

for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].preco > maiorPreco) {
        maiorPreco = catalogo[i].preco
        produtoMaisCaro = catalogo[i].nome
    }
}

let estoqueTotal = 0

for (let i = 0; i < catalogo.length; i++) {
    estoqueTotal += catalogo[i].estoque
}

let produtosComEstoqueBaixo = 0

for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].estoque <= limiteEstoqueBaixo) {
        produtosComEstoqueBaixo++
    }
}

const nomeReajuste = prompt("Digite o nome do produto para reajustar: ")
const aumento = Number(prompt("Digite o valor do aumento: "))

let precoAntes = 0 
let precoDepois = 0

for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].nome === nomeReajuste) {
        precoAntes = catalogo[i].preco
        catalogo[i].preco += aumento
        precoDepois = catalogo[i].preco
    }
}

const resumo = `Produto mais caro: ${produtoMaisCaro}
Estoque total: ${estoqueTotal}
Produtos com estoque baixo: ${produtosComEstoqueBaixo}`

console.log("\nCatálogo:")

for (let i = 0; i < catalogo.length; i++) {
    console.log(`${i + 1}. ${catalogo[i].nome} - preço ${catalogo[i].preco} - estoque ${catalogo[i].estoque}`)
}

console.log("\nLimite de estoque baixo:", limiteEstoqueBaixo)
console.log("\nPreço antes:", precoAntes)
console.log("Preço depois:", precoDepois)
console.log("\n" + resumo)

module.exports = {
    catalogo,
    limiteEstoqueBaixo,
    produtoMaisCaro,
    estoqueTotal,
    produtosComEstoqueBaixo,
    resumo
}
