const targetListAdd = document.getElementsByClassName('js-open-add-list');
const targetAddListButton = document.getElementsByClassName("js-add-list");
const targetJsListCancel = document.getElementById("list-add-cancel");

Object.entries(targetListAdd).map((object) => {
    object[1].addEventListener('click', () => {
        object[1].classList += ' hide';
        object[1].nextElementSibling.classList.remove("hide");
    })
})

targetJsListCancel.onclick = () => {
    targetJsListCancel.parentElement.parentElement.previousElementSibling.classList.remove("hide");
    targetJsListCancel.parentElement.parentElement.classList += ' hide';
}

Object.entries(targetAddListButton).map((object) => {
    object[1].addEventListener('click', () => {
        let node = object[1].parentElement.parentElement.previousElementSibling;
        let text = object[1].parentElement.previousElementSibling.firstElementChild.firstElementChild.value

        let newList = new TrelloList({name: text});
        object[1].parentElement.previousElementSibling.firstElementChild.firstElementChild.value = '';
    })
});