// JavaScript code for form validation
// Prevent form from submitting 
let form = document.getElementById("myForm")
form.onsubmit = inValidation;

function inValidation(e) {
    e.preventDefault();
    // Retrieve the input field value
    fieldValue = document.getElementById("inputField");

    //Regular expression pattern for alphanumeric input
    let status = (/^[a-zA-Z0-9]/.test(fieldValue.value));
    
    // Check if the input value matches the pattern
    if (status === true) { 
        // Valid input: display confirmation and submit the form
        fieldValue.setCustomValidity("Success!");
        return true;
    }
    else { 
        // Invalid input: display error message
        fieldValue.setCustomValidity("Please enter a valid alphanumeric input.");
        return false;
    }
}