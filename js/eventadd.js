let targetAddEvent = document.getElementsByClassName("open-card");
let targetCardComposer = document.getElementsByClassName("card-composer");
let targetClosingAddEvent = document.getElementsByClassName("js-cancel");
let targetAddCardButton = document.getElementsByClassName("js-add-card");
let targetIconRemoveEvent;

Object.entries(targetAddEvent).map((object) => {
    object[1].addEventListener('click', () => {
        object[1].classList += ' hide';
        object[1].previousElementSibling.classList.remove("hide");
    })
});

Object.entries(targetClosingAddEvent).map((object) => {
    object[1].addEventListener('click', () => {
        object[1].parentElement.parentElement.nextElementSibling.classList.remove("hide");
        object[1].parentElement.parentElement.classList += " hide";
    })
});

Object.entries(targetAddCardButton).map((object) => {
    object[1].addEventListener('click', () => {
        let node = object[1].parentElement.parentElement.previousElementSibling;
        let text = object[1].parentElement.previousElementSibling.firstElementChild.firstElementChild.value
        let newEvent = new TrelloTask({text: text, node: node});
        newEvent.renderTask();
        //reset textarea value after adding new event
        object[1].parentElement.previousElementSibling.firstElementChild.firstElementChild.value = '';
        targetIconRemoveEvent = document.getElementsByClassName("fa-trash");
    })
});

