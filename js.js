const appCardTemplate = document.getElementById('mail-app-template');

class MailApp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        console.log("Our element is added to DOM");

        this.shadowRoot.append(appCardTemplate.content.cloneNode(true));

        const slot = this.shadowRoot.querySelector('slot');

        slot.addEventListener('slotchange', () => {
            const slottedElements = slot.assignedElements({ flatten: true });

            slottedElements.forEach(element => {
                const isSelected = element.getAttribute('data-selected') === 'true';
                if (isSelected) {
                    element.style.backgroundColor = 'rgb(221, 225, 250)';
                } else {
                    element.style.backgroundColor = '';
                }
            });

        });




    }

    disconnectedCallback() {
        console.log('Our element is removed from DOM');
    }
}

window.customElements.define('mail-app', MailApp);
