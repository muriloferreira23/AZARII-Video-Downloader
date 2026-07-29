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
// Vídeo
//===================
const video = document.getElementById("notebook");
    
