document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.getElementById("formContato");

    if (!formulario) {
        return;
    }

    formulario.addEventListener("submit", () => {

        const botao = formulario.querySelector("button[type='submit']");

        if (botao) {
            botao.textContent = "Enviando...";
            botao.disabled = true;
        }

    });

});