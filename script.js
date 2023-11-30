let currentSectionIndex = 0;
const sections = [
    'titleContent',
    'introContent',
    'bigIdea1Content',
    'bigIdea2Content',
    'bigIdea3Content',
    'conclusionContent',
    'callToAction'
];

function goToNext(nextSection) {
    if (currentSectionIndex < sections.length - 1) {
        document.getElementById(sections[currentSectionIndex]).style.display = 'none';
        currentSectionIndex++;
        document.getElementById(sections[currentSectionIndex]).style.display = 'block';

        if (currentSectionIndex === 3 || currentSectionIndex === 4) {
            // Update the header for the Big Idea sections
            const bigIdeaHeaderText = document.getElementById(sections[currentSectionIndex - 1]).value;
            document.getElementById(`bigIdea${currentSectionIndex - 2}Header`).innerText = bigIdeaHeaderText;
        }
    }
}

function finish() {
    // Display the final content
    const finalContent = sections.map(section => {
        return `${document.getElementById(section).value}`;
    }).join('\n\n');
    
    alert(finalContent);
}
