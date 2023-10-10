let itemsArray = [];

function addItem() {
    const inputValue = document.getElementById('inputText').value;

    if (inputValue.trim() === '') {
        alert('Nie można dodać pustego elementu!');
        return;
    }

    itemsArray.push(inputValue);

    const li = document.createElement('li');
    li.textContent = inputValue;
    document.getElementById('list').appendChild(li);

    document.getElementById('inputText').value = '';
}
