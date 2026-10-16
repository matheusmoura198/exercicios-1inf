const prompt = require('prompt-sync')()

const meta = Number(prompt("Meta de caixas: "))
let caixas = 0

while(caixas < meta ){
    caixas++
    console.log(caixas)
}

console.log("Meta atingida!")

module.exports = caixas