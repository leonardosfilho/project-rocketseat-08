//variaveis
const screen1 = document.querySelector(".session1")
const screen2 = document.querySelector(".session2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let tempts = 1

//Eventos
btnTry.addEventListener('click', handleClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', touchEnter)

//funcoes callback e metodos
function handleClick(event) {
    event.preventDefault(); // nao envie formulario
    let inputNumber = document.querySelector("#inputNumber");
    if(Number(inputNumber.value) > 10 || inputNumber.value < 0 ){
        alert(`ERROR! O seu numero: ${inputNumber.value} precisa estar entre 0 e 10`)
    }

    if(Number(inputNumber.value) === randomNumber ) {
       toggleScreen()
         screen2.querySelector(" h2 ").innerText = `Acertou em ${tempts} tentativas \n número que
         estava pensando era: ${randomNumber}`
    }
   

    inputNumber.value = ""
    tempts++
}

function handleResetClick() {
    toggleScreen()
    tempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function touchEnter(e){
    console.log('key')
    if (e.key == 'Enter' && screen1.classList.contains("hiden")){
        handleResetClick()
    }
}

function toggleScreen(){
    screen1.classList.toggle("hiden")
    screen2.classList.toggle("hiden")
}

//funcao callback a funcao so vai ser executada depois que acontecer o click



   
  



