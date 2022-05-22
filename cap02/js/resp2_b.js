function calcularValor() {
  const preco15min = document.querySelector('#preco15min').value
  const tempoUso = document.querySelector('#tempoUso').value
  const resp = document.querySelector('h3')
  const button = document.querySelector('#botao')

  const qtd15Min = Math.ceil(tempoUso / 15) 
  const precoTotal = qtd15Min * preco15min

  console.log(precoTotal)

  resp.innerHTML= `Valor a Pagar R$ ${precoTotal.toFixed(2)}`
  resp.style.marginTop = '0'
  botao.style.padding='15px'
  const imagem = new Image(466,310)
  imagem.src='https://st2.depositphotos.com/1006832/6429/i/600/depositphotos_64297401-stock-photo-people-playing-games-in-internet.jpg'
  resp.appendChild(imagem)
  imagem.style.display='block'
  imagem.style.marginTop='10px'

  onclick.preventDefault()
}