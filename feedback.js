// Handle form submission
document.getElementById('feedback-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Collect form data
    const formData = new FormData(this);
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });

    // Send the data to your server for processing
    // Replace the URL with your server-side endpoint
    const apiUrl = 'https://example.com/api/submit_feedback';

    fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(formDataObject),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response (e.g., show a thank you message)
        if (data.success) {
            alert('Thank you for your feedback!');
            document.getElementById('feedback-form').reset();
        } else {
            alert('Oops! Something went wrong. Please try again later.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Oops! Something went wrong. Please try again later.');
    });
});
