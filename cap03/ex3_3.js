/*Elaborar um programa para uma empresa que leia o salário e o tempo que um funcionário trabalha em uma empresa. Sabendo que a cada 4 anos(quadriênio) o funcionário recebe um acréscimo de 1% no salário, calcule e informe o número de quadriênios a que o funcionário tem direito e o salário final. */

const prompt= require("prompt-sync")()
const salario = Number(prompt("Salário: "))
const anosTrabalho= Number(prompt("Anos trabalhados na empresa: "))
const quadrienio = Math.floor(anosTrabalho / 4) 
const aumentoPorQuadrienio = (salario *0.01) * quadrienio
const salarioFinal = salario + aumentoPorQuadrienio
console.log(`Número de quadriênios: ${quadrienio}`)
console.log(`Salário final: R$ ${salarioFinal.toFixed(2)}`)