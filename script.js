<script>
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão

    // Captura os campos
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // Validação básica
    if (name === "" || email === "" || message === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Alerta de confirmação
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    
    // Resetar formulário após o envio
    document.getElementById("contactForm").reset();
});
</script>