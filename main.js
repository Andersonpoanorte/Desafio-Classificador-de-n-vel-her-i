let nomeDoHeroi = prompt('Qual o nome do herói?');
let experiencia = parseFloat(prompt('Qual a experiência(XP) do herói?')) 
let nivel = ''


if (experiencia <= 1000) {
    nivel = 'Ferro'
}else if (experiencia >= 1001 && experiencia <= 2000) {
    nivel = 'Bronze'
}else if (experiencia >= 2001 && experiencia <= 5000) {
    nivel = 'Prata'
}else if (experiencia >= 5001 && experiencia <= 7000) {
    nivel = 'Ouro'
}else if (experiencia >= 7001 && experiencia <= 8000) {
    nivel = 'Platina'
}else if (experiencia >= 8001 && experiencia <= 9000) {
    nivel = 'Ascedente'
}else if (experiencia >= 9001 && experiencia <= 10000) {
    nivel = 'Imortal'
}else {
    nivel = 'Radiante'
}

alert('O herói de nome: ' + nomeDoHeroi + ' está no nível: ' + nivel) 

