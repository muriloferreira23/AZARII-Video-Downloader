//===================
// Batalha do Menu
//===================
const botao = document.getElementById("menuindx");
const menu = document.getElementById("omenu");

botao.addEventListener("click", function(){

    if(menu.style.display === "flex"){
        menu.style.display = "none";
    }else{
        menu.style.display = "flex";
    }

});


//===================
// Botão Contato
//===================

const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    alert("Mensagem enviada para o SAC da Escadona");

});

//===================
// Algo ruim será colocado aqui
//===================