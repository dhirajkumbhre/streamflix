// Prevent default form submission for demo
document.querySelectorAll('.email-signup').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Demo only: Form submitted!');
  });
});
