<!-- JavaScript for Smooth Scrolling -->

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
// JavaScript code to handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // You can add your code here to handle form submission, e.g., sending an email
    // For demonstration purposes, we'll just log the form data to the console
    var formData = new FormData(this);
    console.log('Form data:', formData);
});
