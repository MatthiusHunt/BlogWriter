let currentStep = 1;
const outputDiv = document.getElementById('output');
const promptDiv = document.getElementById('prompt');
const inputBox = document.getElementById('input');

function nextStep() {
    // Save the input value or perform any other necessary logic here
    const inputValue = inputBox.value;
    outputDiv.innerHTML += `<p><strong>${promptDiv.textContent}:</strong> ${inputValue}</p>`;

    // Move to the next step
    currentStep++;

    // Update the prompt and clear the input box for the next step
    updateStep();
}

function updateStep() {
    // Example: Update prompt and placeholder for the next step
    if (currentStep === 2) {
        promptDiv.textContent = "What problem are you solving? Why does it matter?";
        inputBox.placeholder = "Your response";
    } else if (currentStep === 3) {
        promptDiv.textContent = "Big Idea 1";
        inputBox.placeholder = "Your response";
    }
    // Add more conditions for additional steps as needed
}
