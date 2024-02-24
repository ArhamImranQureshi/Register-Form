function handleSubmit(event) {
    event.preventDefault();

    // Get form values
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;

    // Display data
    document.getElementById("displayName").textContent = fullName;
    document.getElementById("displayEmail").textContent = email;

    // Show the display area
    document.getElementById("displayData").style.display = "block";

    // Clear form
    document.getElementById("registrationForm").reset();
}
