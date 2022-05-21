function mostrarPromocao() {
  
  const modelo = document.querySelector('#txtModeloCarro').value
  const valor = document.querySelector('#precoCarro').value
  const resp = document.querySelector('h3')
  const divImage = document.querySelector('.promocao')

  const valorEntrada = valor * 0.50
  const saldo12X = (valor - valorEntrada) / 12 

  resp.style.fontSize = '30px'
  resp.innerHTML = `Promoção: ${modelo}`
  resp.innerHTML += `<br> Entrada de R$ ${valorEntrada.toFixed(2)}`
  resp.innerHTML += `<br> + 12 X de R$ R$ ${saldo12X.toFixed(2)}`

  const imagem = new Image(130,130)
  imagem.src='https://img.freepik.com/vetores-gratis/ilustracao-em-preto-e-branco-do-carro_85054-91.jpg'
  imagem.style.borderRadius='50%'
  imagem.style.marginLeft='50%'
  imagem.style.transform='translate(-50px)'
  divImage.appendChild(imagem)
  
}