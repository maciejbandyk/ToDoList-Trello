const targetListAdd = document.getElementsByClassName('js-open-add-list');
Object.entries(targetListAdd).map((object) => {
    object[1].addEventListener('click', () => {
        object[1].classList += ' hide';
        object[1].nextElementSibling.classList.remove("hide");
    })
})

let boardCanvass = document.querySelector('.board-canvas-inside');
boardCanvass = addEventListener('click', (ev) => {

    if (ev.target.classList.contains("js-list-cancel") == true) {
        ev.target.parentElement.parentElement.previousElementSibling.classList.remove("hide");
        ev.target.parentElement.parentElement.classList += ' hide';
    }

    if (ev.target.classList.contains("js-add-list") == true) {
        const node = ev.target.parentElement.parentElement.previousElementSibling;
        const text = ev.target.parentElement.previousElementSibling.firstElementChild.firstElementChild.value;
        const newList = new TrelloList({
            name: text
        });
        ev.target.parentElement.previousElementSibling.firstElementChild.firstElementChild.value = '';
    }
});