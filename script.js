document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('purchaseForm');
 
    form.addEventListener('submit', function(event) {
        event.preventDefault();
 
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const product = document.getElementById('product').value;
        const quantity = document.getElementById('quantity').value;
 
        form.reset();
    });
});