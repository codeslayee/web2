document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!"); // Debug message to check if script runs

    const form = document.querySelector("form");
    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");
    const rollInput = document.getElementById("roll");
    const classSelect = document.getElementById("options");
    const submitButton = document.querySelector("button[type='submit']");

    let submittedData = []; // Array to store submitted form data

    if (!form) {
        console.error("Form not found! Check if the form exists in HTML.");
        return;
    }

    submitButton.addEventListener("click", function (event) {
        console.log("Submit button clicked!"); // Debug message

        event.preventDefault(); // Prevent default form submission

        let firstName = firstNameInput.value.trim();
        let lastName = lastNameInput.value.trim();
        let rollNo = rollInput.value.trim();
        let className = classSelect.value.trim();

        console.log(`Inputs: ${firstName}, ${lastName}, ${rollNo}, ${className}`); // Debugging

        // Validate inputs
        if (!firstName || !lastName || !rollNo || !className) {
            alert("Please fill out all fields before submitting.");
            return;
        }

        let entry = `${firstName}-${lastName}-${rollNo}-${className}`;

        // Check for duplicate entry
        if (submittedData.includes(entry)) {
            alert("This form has already been submitted with the same details. You cannot submit it again.");
            return;
        }

        // Store new entry
        submittedData.push(entry);
        console.log("Submitted Data Array:", submittedData); // Debugging

        // Success message
        alert("Form submitted successfully!");

        // Clear the form
        form.reset();
    });
});
