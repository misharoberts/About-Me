// grab DOM elements
const toscheckbox = document.getElementById('tos-checkbox');
console.log(toscheckbox)


const showAnswerButton = document.getElementById('show-answer-button');
console.log(showAnswerButton)

const animalSection = document.getElementById('animal-section');
console.log(animalSection)

toscheckbox.addEventListener('change', () => {
    showAnswerButton.disabled = !toscheckbox.checked;
    console.log(toscheckbox.checked)

});

showAnswerButton.addEventListener('click', () => {
    animalSection.classList.remove('hidden');
    console.log(animalSection.classList)

});












// set event listeners
    // get info from user input
    // use user input to update state
    // update DOM to reflect the new state
