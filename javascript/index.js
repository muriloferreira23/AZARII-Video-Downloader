//===================
// Batalha do Menu
//===================
const botao = document.getElementById("menuindx");
const menu = document.getElementById("omenu");

// Abrir/fechar essa dsgraça de botão do caralho

  botao.addEventListener('click', function() {
    menu.classList.toggle('aberto'); // Disgarça

});  

// ===================================
// Fechar o menu e abrir o cu
// ===================================

document.addEventListener('click', function(evento) {
    if (!menu.contains(evento.target) && !botao.contains(evento.target)) {
        menu.classList.remove("aberto");
    }

});

//===================
// Vídeo 
//===================
const video = document.getElementById("notebook");




// O DIABO NÃO VERÁ ISSO - alguem corrijirá