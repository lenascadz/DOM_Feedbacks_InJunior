document.addEventListener("DOMContentLoaded", function () {
    let botaoEnviar = document.querySelector(".enviar");
    if (botaoEnviar) {
        botaoEnviar.addEventListener("click", adicionarFeedback);
    }
});

function adicionarFeedback() {
    let nome = document.getElementById("nome").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();

    if (nome && mensagem) {
        let feedbackContainer = document.getElementById("feedback-container");
        let card = document.createElement("div");
        card.classList.add("feedback-card");
        card.innerHTML = `<strong>${nome}</strong><p>${mensagem}</p>`;
        feedbackContainer.appendChild(card);

        // Limpar os campos após o envio
        document.getElementById("nome").value = "";
        document.getElementById("mensagem").value = "";
    } else {
        alert("Preencha todos os campos antes de enviar!");
    }
}