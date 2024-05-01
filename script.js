document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('purchaseForm');
 
    form.addEventListener('submit', function(event) {
        event.preventDefault();
 
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const product = document.getElementById('product').value;
        const quantity = document.getElementById('quantity').value;

        // Validación de campos
        if (name.trim() === '' || email.trim() === '' || product === '' || isNaN(quantity) || parseInt(quantity) < 1) {
            alert('Por favor completa todos los campos correctamente.');
            return;
        }

        // Envío del formulario mediante AJAX (simulado)
        simulateFormSubmission(name, email, product, quantity);
    });
 
    function simulateFormSubmission(name, email, product, quantity) {
        // Aquí simularías el envío del formulario mediante AJAX
        // En esta versión, solo mostraremos un mensaje de confirmación

        // Mensaje de confirmación
        const confirmationMessage = `Compra realizada con éxito. Gracias por tu compra!\n\nDetalles de la compra:\nNombre: ${name}\nCorreo Electrónico: ${email}\nProducto: ${product}\nCantidad: ${quantity}`;
        alert(confirmationMessage);

        // Reiniciar el formulario
        form.reset();
    }
});
