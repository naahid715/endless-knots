document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    // Simple validation
    var valid = true;
    if (!name) {
      document.getElementById('nameError').textContent = 'Please enter your name';
      valid = false;
    } else {
      document.getElementById('nameError').textContent = '';
    }
    if (!email) {
      document.getElementById('emailError').textContent = 'Please enter your email';
      valid = false;
    } else {
      document.getElementById('emailError').textContent = '';
    }
    if (!message) {
      document.getElementById('messageError').textContent = 'Please enter your message';
      valid = false;
    } else {
      document.getElementById('messageError').textContent = '';
    }
  
    // If all fields are valid, submit the form
    if (valid) {
      // Here you can add logic to handle form submission, like sending an email or storing data in a database
      console.log('Form submitted:');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
      // Clear the form after submission
      document.getElementById('contactForm').reset();
      // Show confirmation message
      document.getElementById('confirmation').style.display = 'block';
      // Hide confirmation message after 3 seconds
      setTimeout(function() {
        document.getElementById('confirmation').style.display = 'none';
      }, 3000);
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    let viewerCount = localStorage.getItem('viewerCount') || 0;
    viewerCount = parseInt(viewerCount);
  
    // Display the initial viewer count
    document.getElementById('viewer-count').textContent = viewerCount;
  
    // Increment the viewer count when the page loads
    viewerCount++;
    document.getElementById('viewer-count').textContent = viewerCount;
    
    // Update localStorage with the new viewer count
    localStorage.setItem('viewerCount', viewerCount.toString());
  });

  document.getElementById("review").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get values from form
    var reviewerName = document.getElementById("reviewerName").value;
    var reviewContent = document.getElementById("reviewContent").value;
    
    // Create new review element
    var reviewElement = document.createElement("div");
    reviewElement.innerHTML = "<strong>" + reviewerName + ":</strong> " + reviewContent;
    
    // Append review to reviews section
    document.getElementById("review").appendChild(reviewElement);
    
    // Clear form fields
    document.getElementById("reviewerName").value = "";
    document.getElementById("reviewContent").value = "";
  });