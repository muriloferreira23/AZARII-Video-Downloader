//===================
// SAC Escadona
//===================
const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    alert("Mensagem enviada para o SAC da Escadona");
    
    formulario.reset();
});

//===================
// Botão FAQ
//===================

const botoesFaq = document.querySelectorAll(".botao-faq");
    botoesFaq.forEach((botao) => {
        botao.addEventListener("click", function(){
        
        const resposta = this.nextElementSibling;

        resposta.classList.toggle("ativa");

    });

});
//===================
// Algo ruim será colocado aqui
//===================