// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
document.querySelector('form').addEventListener('submit', function(e) {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    let valid = true;

    // Clear previous error messages
    document.querySelectorAll('.error').forEach(el => el.remove());

    // Name validation
    if (name.value.trim() === '') {
        showError(name, 'Name is required');
        valid = false;
    }

    // Email validation
    if (email.value.trim() === '') {
        showError(email, 'Email is required');
        valid = false;
    } else if (!validateEmail(email.value.trim())) {
        showError(email, 'Email is not valid');
        valid = false;
    }

    // Message validation
    if (message.value.trim() === '') {
        showError(message, 'Message is required');
        valid = false;
    }

    if (!valid) {
        e.preventDefault();
    }
});

function showError(input, message) {
    const error = document.createElement('p');
    error.className = 'error text-red-500 text-sm mt-1';
    error.innerText = message;
    input.parentElement.appendChild(error);
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.[^<>()[\]\\.,;:\s@"]{2,}))$/i;
    return re.test(String(email).toLowerCase());
}
