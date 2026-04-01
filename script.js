document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formMessage').textContent = '¡Gracias por tu mensaje! Pronto te contactaré.';
    this.reset();
});
