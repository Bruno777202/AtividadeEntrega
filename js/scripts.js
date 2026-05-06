// ATIVIDADE 01
const ligar = () => {
 let lampada = document.getElementById("lampada");
 
 if(lampada.src.includes("apagada.jpg")){
    lampada.src = "img/acesa.jpg";
 }else{
    lampada.src = ("img/apagada.jpg")
 }

};
// -----------------------------------------

// ATIVIDADE 02
const gerarImagem = () => {
let quantas = document.getElementById("inQtdImg")
let canvas = document.getElementById("canvas")
canvas.innerHTML = ""

if(qtdIimagem <= 0){
    alert("O campo quantidade não pode estar mulo ou negativo")
               canvas.innerHTML += '<img id="logo" src="img/logo.png" alt="Logotipo SENAI"/>'

}

};
// -----------------------------------------

//ATIVIDADE 03
const validaForm = () => {
  
};
// -----------------------------------------

// ATIVIDADE 04
const calcular = () => {
 
};
