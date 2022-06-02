// grab DOM elements
const toscheckbox = document.getElementById('tos-checkbox');
const showAnswerButton = document.getElementById('show-answer-button');
const animalSection = document.getElementById('animal-section');

const nameInput = document.getElementById('name-input');
const nameDisplay = document.getElementById('name-display');
const imageSelect = document.getElementById('image-select');
const imageDisplay = document.getElementById('image-display');





toscheckbox.addEventListener('change', () => {
    showAnswerButton.disabled = !toscheckbox.checked;
});

showAnswerButton.addEventListener('click', () => {
    animalSection.classList.remove('hidden');
});

nameInput.addEventListener('input', () => {
    nameDisplay.textContent = nameInput.value;
});

imageSelect.addEventListener('change', () => {
    imageDisplay.src = imageSelect.value;
});








// set event listeners
    // get info from user input
    // use user input to update state
    // update DOM to reflect the new state
