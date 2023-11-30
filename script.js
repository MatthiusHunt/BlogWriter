let currentStep = 1;
const outputDiv = document.getElementById('output');
const promptDiv = document.getElementById('prompt');
const inputBox = document.getElementById('input');
let bigIdea1Text = ""; // Variable to store the text input from Big Idea 1

function nextStep() {
    // Save the input value or perform any other necessary logic here
    const inputValue = inputBox.value;

    if (currentStep === 3) {
        bigIdea1Text = inputValue; // Save the text input from Big Idea 1
    }
    if (currentStep === 4) {
        bigIdea2Text = inputValue; // Save the text input from Big Idea 2
    }
    if (currentStep === 5) {
        bigIdea3Text = inputValue; // Save the text input from Big Idea 3
    }
    if (currentStep === 18) {
        // Change the text on the button to "Finish"
        const continueButton = document.querySelector('#continueButton');
        continueButton.textContent = "Finish";
    }

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
    } else if (currentStep === 4) {
        promptDiv.textContent = "Big Idea 2";
        inputBox.placeholder = "Your response";
    } else if (currentStep === 5) {
        promptDiv.textContent = "Big Idea 3";
        inputBox.placeholder = "Your response";
    } else if (currentStep === 6) {
        promptDiv.textContent = `${bigIdea1Text}: Argument 1`;
        inputBox.placeholder = "Your response";
    } else if (currentStep === 7) {
        promptDiv.textContent = `${bigIdea1Text}: Argument 2`;
        inputBox.placeholder = "Your response";
    } else if (currentStep === 8) {
        promptDiv.textContent = `${bigIdea1Text}: Argument 3`;
        inputBox.placeholder = "Your response";
    } else if (currentStep === 9) {
        promptDiv.textContent = `${bigIdea1Text}: Value Shot`;
        inputBox.placeholder = "Your response";
    } else if (currentStep === 10) {
        promptDiv.textContent = `${bigIdea2Text}: Argument 1`;
        inputBox.placeholder = "Your response";
    } else if (currentStep === 11) {
        promptDiv.textContent = `${bigIdea2Text}: Argument 2`;
        inputBox.placeholder = "Your response";
    } else if (currentStep === 12) {
        promptDiv.textContent = `${bigIdea2Text}: Argument 3`;
        inputBox.placeholder = "Your response";
    } else if (currentStep === 13) {
        promptDiv.textContent = `${bigIdea2Text}: Value Shot`;
        inputBox.placeholder = "Your response";
    } else if (currentStep === 14) {
        promptDiv.textContent = `${bigIdea3Text}: Argument 1`;
        inputBox.placeholder = "Your response";
    } else if (currentStep === 15) {
        promptDiv.textContent = `${bigIdea3Text}: Argument 2`;
        inputBox.placeholder = "Your response";
    } else if (currentStep === 16) {
        promptDiv.textContent = `${bigIdea3Text}: Argument 3`;
        inputBox.placeholder = "Your response";
    } else if (currentStep === 17) {
        promptDiv.textContent = `${bigIdea3Text}: Value Shot`;
        inputBox.placeholder = "Your response";
    } else if (currentStep === 18) {
        promptDiv.textContent = "Wrap it up";
        inputBox.placeholder = "Your response";
    }  else if (currentStep === 19) {
        promptDiv.textContent = "Call to Action";
        inputBox.placeholder = "Your response";
    } 

        
        
    // Add more conditions for additional steps as needed
}
