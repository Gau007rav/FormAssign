document
  .getElementById("dynamicForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Name Validation: Only letters A-Z and length <= 20
    const nameField = document.getElementById("name").value.trim();
    const nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(nameField)) {
      alert(
        "Name can only contain letters A-Z and must be under 20 characters."
      );
      return;
    }

    // Email Validation: Must include '@'
    const emailField = document.getElementById("email").value.trim();
    if (!emailField.includes("@")) {
      alert("Email must be valid and include '@'.");
      return;
    }

    // Phone Validation: Exactly 10 numeric characters
    const phoneField = document.getElementById("phone").value.trim();
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneField)) {
      alert("Phone number must be exactly 10 numeric characters.");
      return;
    }

    // Message Validation: Max 200 words
    const messageField = document.getElementById("message").value.trim();
    const wordCount = messageField.split(/\s+/).filter((word) => word).length;
    if (wordCount > 200) {
      alert("Message must not exceed 200 words.");
      return;
    }

    // Form Submitted Successfully
    alert("Form submitted successfully!");
    this.reset(); // Clear the form
  });
