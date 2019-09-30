    class TrelloEvent {
    constructor(options) {
        this.text = options.text;
        this.node = options.node;
        this.wrapper = document.createElement('div');
        this.wrapper.classList += "event-container";
        this.iElement = document.createElement('span');
        this.iElement.innerHTML = this.getiElement();
        this.wrapper.innerHTML = this.getMarkup(options);
        this.wrapper.appendChild(this.iElement);
        this.renderEvent();
        this.wrapper.onclick = () => nameChange('list-elements');
        this.iElement.onclick = () => this.deleteEvent();


    }
        getMarkup(options) {
            return `<span class="list-elements" draggable="true">${options.text}</span>`;
        }

        getiElement() {
            return `<i class="fa fa-trash"></i>`;
        }

        renderEvent() {
            let container = this.node;
            container.append(this.wrapper);
        }

        deleteEvent() {
            this.wrapper.remove();
        }

    }