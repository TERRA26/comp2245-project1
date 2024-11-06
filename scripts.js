document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter form');
    const messageDiv = document.querySelector('.newsletter .message');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const emailInput = document.getElementById('email');
            const email = emailInput.value.trim();

            if (email === '' || !isValidEmail(email)) {
                messageDiv.textContent = 'Please enter a valid email address.';
                return;
            }

            messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;

            newsletterForm.reset();
        });
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});