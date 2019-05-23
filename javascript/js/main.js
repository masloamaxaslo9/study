document.getElementById('requireForm').addEventListener('click', function () {
   let valueInputName = document.getElementById('name').value;
   let valueInputSurname = document.getElementById('surname').value;
   let valueInputPassword = document.getElementById('password').value;
    submitFormGetRequire(valueInputName, valueInputSurname, valueInputPassword);
});

function submitFormGetRequire(name, surname, password) {
    let xhr = new XMLHttpRequest();
    let jsonFormatUserData = JSON.stringify({
        name: Roman,
        surname: Spuk,
        password: 546
    });

    xhr.open('POST', 'index.html', true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    xhr.onreadystatechange = function () {

    };

    xhr.send(jsonFormatUserData);
}