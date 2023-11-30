let currentStep = 1;
const outputDiv = document.getElementById('output');
const steps = document.querySelectorAll('[id^="step"]');
const finishStep = document.getElementById('finish');

function nextStep() {
    const currentStepDiv = document.getElementById(`step${currentStep}`);
    currentStepDiv.classList.add('hidden');
    currentStep++;

    if (currentStep <= steps.length) {
        const nextStepDiv = document.getElementById(`step${currentStep}`);
        nextStepDiv.classList.remove('hidden');
    } else {
        finishStep.classList.remove('hidden');
    }
}

function finish() {
    // Collect all input values and display the output
    let outputText = '';
    for (let i = 1; i <= steps.length; i++) {
        const input = document.getElementById(`input${i}`);
        outputText += `<p><strong>${input.placeholder}:</strong> ${input.value}</p>`;
    }
    outputDiv.innerHTML = outputText;
}
