var Oscar21 = ["https://m.media-amazon.com/images/M/MV5BZGJhNWRiOWQtMjI4OS00ZjcxLTgwMTAtMzQ2ODkxY2JkOTVlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BOTYwNWNmM2UtNDhlOC00ZGQzLWI1MTMtMmZlMTFjM2Y1N2ZhXkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BZTllMjI0ZGYtM2FmZC00ZmY4LTlkNTYtZThlOWQ1OGQyZTA3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNWEzOTNjNDgtZDhhYS00ODAxLWIzNGMtYjU3OGZhYmI3ZDU4XkEyXkFqcGdeQXVyMTAzNjk5MDI4._V1_UY268_CR1,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMDRiZWUxNmItNDU5Yy00ODNmLTk0M2ItZjQzZTA5OTJkZjkyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BZDViMzBiNGMtZTIyNS00NzI4LWE3NDMtNmM1NDk0NzBlMWRlXkEyXkFqcGdeQXVyMTA2MDU0NjM5._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNjcyYjg0M2ItMzMyZS00NmM1LTlhZDMtN2MxN2RhNWY4YTkwXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BYjYzOGE1MjUtODgyMy00ZDAxLTljYTgtNzk0Njg2YWQwMTZhXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"]

var nomeFilmes = ["Meu pai", "Judas e o Messias Negro", "Mank", "Minari", "Nomadland", "Bela Vingança", "O Som do Silêncio", "Os 7 de Chicago"]

FilmeEscolhido()
function FilmeEscolhido(){
var escolha = prompt("Quem você acha que vai levar o Oscar esse ano? \n 1-Meu Pai \n 2-Judas e o Messias Negro \n 3-Mank \n 4-Minari \n 5-Nomadland \n 6-Bela Vingança \n 7-O Som do Silêncio \n 8- Os 7 de Chicago")

if(escolha == 1){
  alert("Meu pai, disponível em: Amazon Prime")
  document.write("<h2> Meu Pai </h2>")
  document.write("<img src =" + Oscar21[0] + ">")
}
else if(escolha == 2){
  alert("Judas e o Messias Negro, disponível em: HBO Max")
  document.write("<h2> Judas e o Messias Negro </h2>")
  document.write("<img src =" + Oscar21[1] + ">")
}
else if(escolha == 3){
  alert("Mank, disponível em: Netflix")
  document.write("<h2> Mank </h2>")
  document.write("<img src =" + Oscar21[2] + ">")
}
else if(escolha == 4){
  alert("Minari, disponível em: Amazon Prime")
  document.write("<h2> Minari </h2>")
  document.write("<img src =" + Oscar21[3] + ">")
}
else if(escolha == 5){
  alert("Nomadland, disponível em: Telecine ")
  document.write("<h2> Nomadland </h2>")
  document.write("<img src =" + Oscar21[4] + ">")
}
else if(escolha == 6){
  alert("Bela Vingança, disponível em: Telecine")
  document.write("<h2> Bela Vingança </h2>")
  document.write("<img src =" + Oscar21[5] + ">")
}
else if(escolha == 7){
  alert("O Som do Silêncio, disponvel em: Prime Video")
  document.write("<h2> O Som do Silêncio </h2>")
  document.write("<img src =" + Oscar21[6] + ">")
}
else if (escolha == 8){
  alert("Os 7 de Chicago, disponível em: Netflix")
  document.write("<h2> Os 7 de Chicago </h2>")
  document.write("<img src =" + Oscar21[7] + ">")
 }
}