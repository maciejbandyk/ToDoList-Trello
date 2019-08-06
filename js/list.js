class TrelloList {
    constructor() {
    
        
    }
    

    buildWidget() {
        this.wrapper = document.createElement('div');
        this.wrapper.className = "js-list list-wrapper";

        this.markup = 
        `<div class="js-list list-wrapper" draggable="true">
            <div class="list list-content">
                <div class="list-header menu">
                    <span class="list-header-text">${.name}</span>
                </div>
                <div class="list-cards js-list-cards">
                </div>
                <div>
                    <a class="open-card" href="#">
                    <span class="icon-add"> </span>
                    <span class="js-add-a-card hide"> </span>
                    <span class="add-another-card">Add another card...</span>
                    </a>
                </div>
            </div>
        </div>`

        this.wrapper.innerHTML = this.markup;
        let addAnotherCardButton = document.getElementsByClassName('add-another-card');
        
        Object.entries(addAnotherCardButton).map((object) => {

        })

        
    }

    static renderListElement() {
        let container = document.createElement('div');
        container.innerHTML = markup;


    }

    static addEvent() {

    }
    
}