const input = document.querySelector('#favchap');
button.addEventListener('click', function() {
});
if (input.value.trim( !== '') { ...}
const button = document.querySelector('button');
const list = document.querySelector('________'); // The HTML element that is the unordered list needs to be filled in
const li = document.createElement('li');
const deleteButton = document.createElement('button');
deleteButton.addEventListener('click', function () {
  list.removeChild(li);
  input.focus();
});
input.value = '';
input.focus();      
li.textContent = input.value;
deleteButton.textContent = 'X';
li.append(deleteButton);
list.append(li);