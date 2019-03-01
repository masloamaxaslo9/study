function loadPhones() {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'js/phones.json', true);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;

        if (xhr.status !== 200) {
            alert('Error: ' + xhr.status + ': ' + xhr.statusText);
        } else {
            let phoneItems = JSON.parse(xhr.responseText);
            let phoneNames = phoneItems.map(function (item) {
                return item.name;
            });
            writeOnDocument(phoneNames);
        }
    }
}

loadPhones();

function writeOnDocument(phoneNames) {
    let blockApp = document.getElementById('app');
    let createTagUl = document.createElement('ul');
    blockApp.appendChild(createTagUl);
    phoneNames.forEach(function (item) {
        let newLi = document.createElement('li');
        createTagUl.appendChild(newLi);
        newLi.innerHTML = item;
    });
}
