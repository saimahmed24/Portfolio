
function findInputs() {
    const inputs = document.querySelectorAll("#loginForm input");
    return Array.from(inputs);
}


function validateInputs(inputs) {
    let isValid = true;
    inputs.forEach(input => {
        if (input.type !== "checkbox" && input.required && input.value === "") {
            isValid = false;
        }
    });
    return isValid;
}


function handleOkClick() {
    const inputs = findInputs();
    const areInputsValid = validateInputs(inputs);

    if (!areInputsValid) {
        alert("Please fill in the mandatory fields.");
        return; 
    }

    login();
}


function login() {
    const rememberMe = document.getElementById("rememberMe").checked;

    if (rememberMe) {
        alert("Logged in successfully with Remember Me marked as set");
    } else {
        alert("Logged in successfully");
    }
}


function clearInputs() {
    const inputs = findInputs();
    inputs.forEach(input => {
        input.value = ""; 
        if (input.type === "checkbox") {
            input.checked = false; 
        }
    });
}
