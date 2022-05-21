/*Elaborar um programa para um Cinema, que leia o título e a duração de um filme em minutos. Exiba o título do filme e converta a duração para horas e minutos. */

function exibir() {
  const titulo = document.querySelector('#txtNomeFilme').value
  const duracao = document.querySelector('#txtDuracaoFilme').value
  const resp = document.querySelector('h3')

  const horas = Math.floor(duracao / 60)
  const minutos = duracao % 60

  resp.style.fontSize = '30pt'
  resp.style.color='red'
  resp.innerHTML = titulo
  resp.innerHTML += `<br>Duração de ${horas} horas(s) e ${minutos} minutos`
  const imagem = new Image(200,200)
  imagem.src='https://media.istockphoto.com/vectors/popcorn-box-in-flat-style-vector-id1224576073?k=20&m=1224576073&s=612x612&w=0&h=tp9Job2VPvpjV0YRTcbAQ2CQ5RvZky9cO2N3P0yYSkM='
  imagem.style.borderRadius ='50%'
  imagem.style.display='flex'
  imagem.style.marginLeft='50%'
  imagem.style.transform='translate(-50%)'
  imagem.style.marginTop='30px'
  imagem.style.marginBottom='20px'
 
  
  
  resp.appendChild(imagem)
  resp.innerHTML += 'Bom filme!'

  exibir.preventDefault()


}
