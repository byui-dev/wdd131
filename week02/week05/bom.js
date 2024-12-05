const button = document.querySelector('#button');
const input = document.querySelector('#favchap'); // Corrected selector
const list = document.querySelector('#list');

// Initialize chapters array from localStorage or empty array
let chaptersArray = getChapterList() || [];

// Display existing chapters
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// Corrected event listener
button.addEventListener('click', () => {
    // Trim input and check if not empty
    if (input.value.trim() !== '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = ''; // Clear input
        input.focus(); // Focus back on input
    }
});

function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = item;
    deleteButton.textContent = 'X';
    deleteButton.classList.add('delete');

    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList')) || [];
}

function deleteChapter(chapter) {
    // Remove the 'X' from the end of the chapter name
    chapter = chapter.slice(0, chapter.length - 1);

    // Filter out the chapter
    chaptersArray = chaptersArray.filter(item => item !== chapter);

    // Update localStorage
    setChapterList();
}