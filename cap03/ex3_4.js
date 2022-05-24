/*Elaborar um programa para uma veterinária, que leia o peso de uma ração em kg e o quanto um gato consome por dia da ração, em gramas. Informe quantos dias irá durar a ração e o quanto sobra da ração(em gramas)  */

const prompt= require("prompt-sync")()
const pesokg = Number(prompt("Peso da ração em kg: "))
const consumoDiarioGato = Number(prompt("Consumo diário de um gato (gramas): "))
const dias = Math.floor((pesokg * 1000) / consumoDiarioGato)
const sobraRacao = (pesokg*1000) - (consumoDiarioGato * dias)
console.log(`Duração ${dias} dias`)
console.log(`Sobra ${sobraRacao} gramas`)