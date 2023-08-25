const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name === '' || email === '' || message === '' ) {
    alert('Please fill out all fields.');
    return;
  }

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Send the form data to your server here (using fetch, axios, etc.)
  // ...
  // If the form submission is successful, you can show a success message
  alert('Thanks for submitting the form!');
});

function isValidEmail(email) {
  // Basic email validation regex
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}