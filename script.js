function generateBigIdeas() {
    // Get the intro content
    const introTitle = document.getElementById('introTitle').value;
    const introContent = document.getElementById('introContent').value;

    // Clear the bigIdeasContainer
    document.getElementById('bigIdeasContainer').innerHTML = '';

    // Create a Big Idea block for each of the three ideas
    for (let i = 1; i <= 3; i++) {
        const bigIdeaBlock = document.createElement('div');
        bigIdeaBlock.className = 'block';
        
        // Create header for the Big Idea block
        const header = document.createElement('h2');
        header.innerText = `${introTitle} - Big Idea ${i}`;
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
        valueShotLabel.innerText = 'Value Shot (Data, Picture/meme, video, etc):';

        const valueShotInput = document.createElement('input');
        valueShotInput.type = 'text';

        bigIdeaBlock.appendChild(valueShotLabel);
        bigIdeaBlock.appendChild(valueShotInput);

        // Append the Big Idea block to the container
        document.getElementById('bigIdeasContainer').appendChild(bigIdeaBlock);
    }
}

