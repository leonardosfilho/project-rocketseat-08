
let result = prompt("Advinhe o número que estou pensado ? Está entre 0 e 10")
const randomNumber = Math.round(Math.random() * 10)


let tempts = 1;

while(Number(result) != randomNumber) {
    result = prompt("Erro, tente novamente:");
    tempts++
}


alert( `Parabéns! O número que eu pensei foi ${randomNumber} e você adivinhou o número em ${tempts}`)