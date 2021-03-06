let NewIdOfEventContainer = 0;
class TrelloList {
    constructor(options) {
        this.name = options.name;
        this.id = NewIdOfEventContainer;
        this.buildList();
        this.renderListElement();
        getEventsSortable(this.id);
        this.id = NewIdOfEventContainer++;
    }

    buildList() {
        this.wrapper = document.createElement('div');
        this.wrapper.className = "js-list list-wrapper";
        this.markup =
            `<div class="list list-content">
            <div class="list-header menu">
               <span class="list-header-text">${this.name}</span>
            </div>
                 <div id="${this.id}" class="list-cards js-list-cards">
                 </div>
            <div class="card-composer hide">
               <div class="list-cards js-composer">
                 <div class="list-card-details u-clearfix">
                     <textarea class="list-card-composer-textarea js-card-title" dir="auto" placeholder="Enter a title for this card…" style="overflow: hidden; overflow-wrap: break-word; resize: none; height: 54px;"></textarea>
                 </div>
               </div>
                <div class="cc-controls list-cards u-clearfix">
                    <input class="primary confirm mod-compact js-add-card" type="submit" value="Add Card"/> 
                    <a class="icon-lg icon-close dark-hover js-cancel" href="#"></a>
                </div>
              </div>
                <a class="open-card" href="#">
                    <span class="icon-add"> </span>
                    Add another card...
                </a>
            </div>`

        this.wrapper.innerHTML = this.markup;
        let ListEventSpace = this.wrapper.firstElementChild.firstElementChild.nextElementSibling;
        new TrelloEvent({
            text: "Przykładowy tekst w karcie",
            node: ListEventSpace
        });
    }

    renderListElement() {
        let node = document.getElementsByClassName('board-canvas-inside').item(0);
        let lastElement = document.getElementsByClassName('add-list').item(0);
        node.insertBefore(this.wrapper, lastElement);
    }
}

//GENERATE FIRST LIST AND EVENT
new TrelloList({
    name: "First List"
});
