function mostrarPromocao() {
  const produto = document.querySelector('#nomeProduto').value
  const preco = Number(document.querySelector('#precoProduto').value)
  const resp = document.querySelector('#resp')
  const volteSempre = document.querySelector('.img-volteSempre')

  const precoTotal = (preco * 2) + (preco * 0.50)

  resp.innerHTML = `<strong>${produto}</strong> - Promoção: Leve 3 por R$ <strong>${precoTotal.toFixed(2)}</strong>`
  resp.innerHTML += `<br> O terceiro produto custa apenas R$ ${(preco * 0.50).toFixed(2)}`

  
  const imagemDown = new Image(200,200)
  imagemDown.src='https://www.kindpng.com/picc/m/241-2414580_grocery-store-drawing-at-transparent-grocery-store-clip.png'
  volteSempre.appendChild(imagemDown)
  imagemDown.style.borderRadius='50%'


 onclick.preventDefault()
}