function generateBigIdeas() {
    // Get the intro content
    const title = document.getElementById('titleContent').value;
    const intro = document.getElementById('introContent').value;

    // Clear the bigIdeasContainer
    document.getElementById('bigIdeasContainer').innerHTML = '';

    // Create a Big Idea block for each of the three ideas
    ['VariableA', 'VariableB', 'VariableC'].forEach((variable, index) => {
        const bigIdeaBlock = document.createElement('div');
        bigIdeaBlock.className = 'block';

        // Create header for the Big Idea block
        const header = document.createElement('h2');
        header.innerText = `${title} - Big Idea ${index + 1}: (${variable})`;
        bigIdeaBlock.appendChild(header);

        // Create input fields for each argument
        for (let j = 1; j <= 3; j++) {
            const argumentLabel = document.createElement('label');
            argumentLabel.innerText = `Argument ${j}:`;

            const argumentInput = document.createElement('input');
            argumentInput.type = 'text';

            bigIdeaBlock.appendChild(argumentLabel);
            bigIdeaBlock.appendChild(argumentInput);
        }

        // Create input field for the Value Shot
        const valueShotLabel = document.createElement('label');
        valueShotLabel.innerText = 'Value Shot:';

        const valueShotInput = document.createElement('input');
        valueShotInput.type = 'text';

        bigIdeaBlock.appendChild(valueShotLabel);
        bigIdeaBlock.appendChild(valueShotInput);

        // Append the Big Idea block to the container
        document.getElementById('bigIdeasContainer').appendChild(bigIdeaBlock);
    });
}
