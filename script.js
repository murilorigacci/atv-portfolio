const botaoContato = document.querySelector("#botaoContato");
const mensagem = document.querySelector("#mensagem");

botaoContato.addEventListener("click", function() {
    mensagem.textContent = "Obrigado pelo interesse no meu portfólio!";
});