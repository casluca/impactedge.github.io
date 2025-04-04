// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !message) {
                formResponse.innerHTML = 'Please fill in all required fields.';
                formResponse.style.color = 'red';
                return;
            }
            
            // Simulate form submission
            formResponse.innerHTML = 'Thank you for your message! We will get back to you soon.';
            formResponse.style.color = 'green';
            
            // In a real implementation, you would send the form data to a server
            // For example using fetch() or XMLHttpRequest
            
            // Reset form
            contactForm.reset();
            
            // For demonstration, we'll just log the form data
            const formData = new FormData(contactForm);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            console.log('Form submitted:', formObject);
        });
    }
});