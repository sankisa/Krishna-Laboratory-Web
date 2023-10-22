const contactForm = document.getElementById('contactForm');
const submitButton = contactForm.querySelector('input[type="submit"]');

// Event listener for contact form submission
contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    const name = contactForm.querySelector('#name').value;
    const email = contactForm.querySelector('#email').value;
    const message = contactForm.querySelector('#message').value;

    if (name && email && message) {
        // You can perform additional validation here if needed
        alert('Form submitted successfully!');
    } else {
        alert('Please fill in all the required fields.');
    }
});