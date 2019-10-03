// ToDo
// Write function - if click outside field, return current list name

function nameChange(className) {
    let targetToChange = document.getElementsByClassName(className);

    Object.entries(targetToChange).map((object) => {
        object[1].addEventListener("click", function renderInput() {
            let textBefore = object[1].innerHTML;
            object[1].innerHTML = '<input id="input-namechange" type="text" name="name-chage" autofocus>';
            let inputField = document.getElementById('input-namechange');
            inputField.onfocus = function () {
                object[1].removeEventListener('click', renderInput);
                object[1].addEventListener('keypress', function (e) {
                    let key = e.which || e.keyCode;
                    if (key == 13) {
                        if (inputField.value !== "") {
                            object[1].innerHTML = inputField.value;
                        } else {
                            object[1].innerHTML = textBefore;
                        }
                        object[1].addEventListener('click', renderInput);
                    }
                });
            };
        });
    });
}

let targetToChange = document.getElementsByClassName('list-header-text');

Object.entries(targetToChange).map((object) => {
    object[1].addEventListener("click", function renderInput() {
        let textBefore = object[1].innerHTML;
        object[1].innerHTML = '<input id="input-namechange" type="text" name="name-chage" autofocus>';
        let inputField = document.getElementById('input-namechange');
        inputField.onfocus = function () {
            object[1].removeEventListener('click', renderInput);
            object[1].addEventListener('keypress', function (e) {
                let key = e.which || e.keyCode;
                if (key == 13) {
                    if (inputField.value !== "") {
                        object[1].innerHTML = inputField.value;
                    } else {
                        object[1].innerHTML = textBefore;
                    }
                    object[1].addEventListener('click', renderInput);
                }
            });
        };
    });
});