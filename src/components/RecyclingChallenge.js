import bootstrap from '!!raw-loader!bootstrap/dist/css/bootstrap.min.css';
import styles from '!!raw-loader!./RecyclingChallenge.css';
import 'cod-design-system/src/components/atoms/Button/cod-button';
export default class RecyclingChallenge extends HTMLElement {
    static get observedAttributes() {
        return ['data-step'];
    }

    constructor() {
        // Always call super first in constructor
        super();

        // Create a shadow root
        const shadow = this.attachShadow({ mode: 'open' });

        // Adding styles
        const bStyles = document.createElement('style');
        bStyles.textContent = bootstrap;
        const rcStyles = document.createElement('style');
        rcStyles.textContent = styles;
        shadow.appendChild(bStyles);
        shadow.appendChild(rcStyles);

        // Create result section
        this.appContent = document.createElement('div');
        this.appContent.id = 'app-content';
        this.appContent.className = 'col-xs-12 col-sm-12 col-md-10 m-auto';
        let row = document.createElement('div');
        row.className = 'row';
        row.appendChild(this.appContent);
        shadow.appendChild(row);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.loadSteps(newValue);
        console.log(newValue)
    }

    loadSteps(step){
        switch (step) {
            case '0':
                this.appContent.innerHTML = `
                    <h2 class="text-center">Detroit Recycles and you can too!</h2>
                    <p class="text-center">Take this quiz to sign up for a FREE recycling cart.<br> 
                    OR call XXX-XXX-XXXX to sign up over the phone</p>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                CLICK HERE TO WATCH THE VIDEO AND START THE QUIZ
                            </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/uF4gUeZgorU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            </div>
                        </div>
                    </div>
                `;
                let shadow = this.shadowRoot;
                shadow.querySelector('button.accordion-button').addEventListener('click', (e) => {
                    let tmpClasses = shadow.querySelector('#collapseOne').className.split(' ');
                    console.log(tmpClasses);
                })
                break;
        
            default:
                break;
        }
    }
}