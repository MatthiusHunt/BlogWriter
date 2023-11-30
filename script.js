let currentStep = 0;
const outputDiv = document.getElementById('output');
const stepsContainer = document.getElementById('blog-container');
const steps = [];

function createSteps(prompts) {
    prompts.forEach((prompt, index) => {
        const step = document.createElement('div');
        step.classList.add('step', 'hidden');
        step.innerHTML = `
            <div class="prompt">${prompt}</div>
            <textarea id="input${index + 1}"></textarea>
            <button onclick="nextStep(${index})">Continue</button>
        `;
        stepsContainer.appendChild(step);
        steps.push(step);
    });

    steps[0].classList.remove('hidden'); // Show the first step
}

function nextStep(index) {
    const currentStepDiv = steps[currentStep];
    currentStepDiv.classList.add('hidden');
    currentStep = index + 1;

    if (currentStep < steps.length) {
        const nextStepDiv = steps[currentStep];
        nextStepDiv.classList.remove('hidden');
    } else {
        finish();
    }
}

function finish() {
    // Collect all input values and display the output
    let outputText = '';
    for (let i = 1; i <= steps.length; i++) {
        const input = document.getElementById(`input${i}`);
        outputText += `<p><strong>${input.previousElementSibling.textContent}:</strong> ${input.value}</p>`;
    }
    outputDiv.innerHTML = outputText;
}
