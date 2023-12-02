let currentStep = 1;
const outputDiv = document.getElementById('output');
const promptDiv = document.getElementById('prompt');
const inputBox = document.getElementById('input');
const pastResponsesContent = document.getElementById('pastResponsesContent');
const previousResponses = document.getElementById('previousResponses');
let bigIdea1Text = "";
let bigIdea2Text = "";
let bigIdea3Text = "";

function nextStep() {
    const inputValue = inputBox.value;

    if (currentStep === 3) {
        bigIdea1Text = inputValue;
    }
    if (currentStep === 4) {
        bigIdea2Text = inputValue;
    }
    if (currentStep === 5) {
        bigIdea3Text = inputValue;
    }
    if (currentStep === 18) {
        const continueButton = document.querySelector('#continueButton');
        continueButton.textContent = "Finish";
    }

    pastResponsesContent.innerHTML += `<p><strong>${promptDiv.textContent}:</strong> ${inputValue}</p>`;

    currentStep++;
    updateStep();
}

function updateStep() {
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
    } else if (currentStep === 19) {
        // Hide the prompt, input, and continue button
        promptDiv.style.display = "none";
        inputBox.style.display = "none";
        const continueButton = document.querySelector('#continueButton');
        continueButton.style.display = "none";

        // Display past responses instead
        displayPastResponses();
    }
}

function toggleResponses() {
    const isHidden = pastResponsesContent.classList.toggle('hidden');
    if (!isHidden) {
        // If the past responses are visible, update the content
        pastResponsesContent.innerHTML = getPastResponsesHTML();
    }
}

function getPastResponsesHTML() {
    // Create and return the HTML for past responses
    return `<p><strong>${promptDiv.textContent}:</strong> ${bigIdea1Text}</p>
            <p><strong>${promptDiv.textContent}:</strong> ${bigIdea2Text}</p>
            <p><strong>${promptDiv.textContent}:</strong> ${bigIdea3Text}</p>`;
}



function displayPastResponses() {
    // Display past responses line by line
    const pastResponsesArray = [bigIdea1Text, bigIdea2Text, bigIdea3Text];
    pastResponsesArray.forEach(response => {
        pastResponsesContent.innerHTML += `<p><strong>${promptDiv.textContent}:</strong> ${response}</p>`;
    });

    // Optionally, you can clear the input box and disable it after displaying past responses
    inputBox.value = "";
    inputBox.disabled = true;

    // Update the prompt to inform the user
    promptDiv.textContent = "Past responses displayed. You can now finish the blog post.";
}

