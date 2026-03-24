document.addEventListener("DOMContentLoaded", () => {
    console.log("Sistema Açaí Itaki carregado com sucesso!");

  
    const botoesComprar = document.querySelectorAll("#copos button");
    
    botoesComprar.forEach((botao, index) => {
        botao.addEventListener("click", () => {
            
            const tamanhoCopo = botao.parentElement.querySelector("li").innerText;
            alert(`Sucesso! ${tamanhoCopo} foi adicionado ao seu carrinho 🛒`);
        });
    });

   
    const emailInput = document.querySelector("#premium input[name='email']");
    const btnPremium = document.querySelector("#premium button");

    
    const validarEmail = () => {
        const email = emailInput.value.trim();
        if (email.includes("@") && email.includes(".")) {
            alert("Email cadastrado com sucesso! Prepare-se para os descontos. 🍦");
            emailInput.value = "";
        } else {
            alert("Por favor, digite um email válido.");
        }
    };

    if (emailInput) {
        
        emailInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                validarEmail();
            }
        });
    }

    if (btnPremium) {
        btnPremium.addEventListener("click", validarEmail);
    }

    const botaoDepoimento = document.getElementById("btnDepoimento");
    const textarea = document.getElementById("mensagem");

    if (botaoDepoimento && textarea) {
        botaoDepoimento.addEventListener("click", () => {
            const textoLimpo = textarea.value.trim();

            if (textoLimpo === "") {
                alert("Opa! Escreva um depoimento antes de enviar.");
            } else {
                alert("Avaliação enviada com sucesso! Obrigado pelo carinho. ❤️");
                console.log("Depoimento recebido:", textoLimpo);
                textarea.value = "";
            }
        });
    }
});