function calcularPreço(){
  const precoKilo = document.querySelector('#precoQuilo').value
  const consumoCliente = document.querySelector('#consumoCliente').value
  const resp = document.querySelector('h3')
  const VolteSempre= document.querySelector('h4')

  const valorTotal = (consumoCliente/1000) * precoKilo

  resp.innerHTML = `Valor a pagar R$ ${valorTotal.toFixed(2)}`
  resp.style.fontSize = '30px'
  resp.style.textAlign='center'
  
  const imagem = new Image(600,200)
  imagem.src='https://www.fredburguergrill.com.br/wp-content/uploads/2018/04/restaurante-por-quilo-800x321.jpg'
  resp.appendChild(imagem)
  imagem.style.display = 'block'
  imagem.style.marginTop='40px'

  VolteSempre.innerHTML='<strong>Volte Sempre!</strong>'
  VolteSempre.style.fontSize = '30px'
  VolteSempre.style.marginTop = '0'

 
 



}