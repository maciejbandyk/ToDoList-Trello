let boardCanvas = document.querySelector('.board-canvas-inside');
boardCanvas = addEventListener('click', (ev) => {
    if (ev.target.classList.contains("open-card") == true) {
            ev.target.classList += ' hide';
            ev.target.previousElementSibling.classList.remove("hide");
    }

    if (ev.target.classList.contains("js-cancel") == true) {
        ev.target.parentElement.parentElement.nextElementSibling.classList.remove("hide");
        ev.target.parentElement.parentElement.classList += " hide";
    }

    if (ev.target.classList.contains("js-add-card") == true) {
        const node = ev.target.parentElement.parentElement.previousElementSibling;
        const text = ev.target.parentElement.previousElementSibling.firstElementChild.firstElementChild.value
        const newEvent = new TrelloEvent({text: text, node: node});
        newEvent.renderEvent();
        ev.target.parentElement.previousElementSibling.firstElementChild.firstElementChild.value = '';
    }
})