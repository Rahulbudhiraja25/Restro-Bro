// For opening and closing the modal
function openForm(serviceType) {
    // Set the service type in the hidden input field inside the modal form
    document.getElementById('serviceType').value = serviceType;
  
    // Show the modal
    document.getElementById('contactModal').style.display = 'block';
  }
  
  // Close the modal
  function closeForm() {
    // Hide the modal
    document.getElementById('contactModal').style.display = 'none';
  }
  
  // Form submission handler for the modal form
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);
    const data = {
      serviceType: formData.get('serviceType'),
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    // Create the text you want to send in the email
    const emailText = `
      Name: ${data.name}\n
      Email: ${data.email}\n
      Phone: ${data.phone}\n
      Service Type: ${data.serviceType}\n
      Message: ${data.message}
    `;

    // Send the data to your backend (Spring Boot Service hosted on Railway)
    fetch('https://email-sender-production-177c.up.railway.app/mail/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: emailText }),  // Send text in the request body
    })
    .then(response => response.json())
    .then(data => {
      alert('Thank you for contacting us! We will get back to you soon.');
      // Optionally, reset the form fields after submission
      document.getElementById('contactForm').reset();
      
    })
    .catch(error => {
      alert('Something went wrong. Please try again later.');
    });
});



  
// Form submission handler for the contact form at the bottom of the page
document.getElementById('bottomContactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  const formData = new FormData(this);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    message: formData.get('message'),
  };

  // Create the text you want to send in the email
  const emailText = `
    Name: ${data.name}\n
    Email: ${data.email}\n
    Phone: ${data.phone}\n
    Message: ${data.message}
  `;

  // Send the data to your backend (Spring Boot Service hosted on Railway)
  fetch('https://email-sender-production-177c.up.railway.app/mail/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text: emailText }), // <-- sending text just like the first form
  })
  .then(response => response.json())
  .then(data => {
    alert('Thank you for contacting us! We will get back to you soon.');
    // Optionally, reset the form fields after submission
    document.getElementById('bottomContactForm').reset();
  })
  .catch(error => {
    alert('Something went wrong. Please try again later.');
  });
});



// script.js
// function toggleMenu() {
//   const navLinks = document.getElementById('navLinks');
//   navLinks.classList.toggle('active');
// }

  



  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      window.scrollTo({
        top: targetElement.offsetTop - 70, // Adjust the scroll position considering the fixed header
        behavior: 'smooth'
      });
    });
  });
  