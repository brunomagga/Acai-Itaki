const botoesComprar = document.querySelectorAll("#copos button");

botoesComprar.forEach(botao => {
    botao.addEventListener("click", () => {
        alert("Produto adicionado ao carrinho 🛒");
    });
});

const emailInput = document.querySelector("#premium input");

if (emailInput) {
    emailInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            const email = emailInput.value;

            if (email.includes("@") && email.includes(".")) {
                alert("Email cadastrado com sucesso!");
                emailInput.value = "";
            } else {
                alert("Digite um email válido!");
            }
        }
    });
}
const botaoDepoimento = document.getElementById("btnDepoimento");
const textarea = document.getElementById("mensagem");

botaoDepoimento.addEventListener("click", () => {
    if (textarea.value.trim() === "") {
        alert("Escreva um depoimento antes de enviar!");
    } else {
        alert("Avaliação enviada com sucesso! ❤️");
        textarea.value = "";
    }
});