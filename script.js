document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formMessage').textContent = '¡Gracias por tu mensaje';
    this.reset();
});
