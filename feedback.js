document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".enviar").addEventListener("click", adicionarFeedback);
});

function adicionarFeedback() {
    let nome = document.querySelector(".form input").value.trim();
    let mensagem = document.querySelector(".form textarea").value.trim();

    if (nome && mensagem) {
        let feedbackContainer = document.getElementById("feedback-container");
        if (!feedbackContainer) {
            feedbackContainer = document.createElement("div");
            feedbackContainer.id = "feedback-container";
            document.querySelector(".feedback").appendChild(feedbackContainer);
        }
        let card = document.createElement("div");
        card.classList.add("feedback-block");
        card.innerHTML = `<strong>${nome}</strong><p>${mensagem}</p>`;
        feedbackContainer.appendChild(card);
        document.querySelector(".form input").value = "";
        document.querySelector(".form textarea").value = "";
    } else {
        alert("Preencha todos os campos para enviar o feedback!");
    }
}