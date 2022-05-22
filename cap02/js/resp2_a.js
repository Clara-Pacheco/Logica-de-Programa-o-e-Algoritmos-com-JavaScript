function mostrarPromocao() {
  const medicamento = document.querySelector('#medication').value
  const preco = document.querySelector('#preco').value
  const resp = document.querySelector('h3')
  const divImage = document.querySelector('#divimg')
  

  const precoDoisMedicamentos = 2 * preco
  const precoSemCentavos = Math.floor(precoDoisMedicamentos)
  
  resp.innerHTML = `Promoção de <strong>${medicamento}<strong>`
  resp.innerHTML += `<br><br> Leve 2 por apenas R$ ${precoSemCentavos.toFixed(2)}`

  const imagem = document.createElement('img')
  imagem.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOGpqbh0AYtlzY43ZpDXcc_7UjswpYUUiZpw&usqp=CAU"
  divImage.appendChild(imagem)
  imagem.style.marginTop='80%'
  
  
}