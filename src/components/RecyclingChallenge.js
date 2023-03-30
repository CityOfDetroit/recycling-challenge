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
                    <div class="accordion mb-3" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                CLICK HERE TO WATCH THE VIDEO AND START THE QUIZ
                            </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            <div class="row">
                            <div class="m-auto" style="width:560px">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/uF4gUeZgorU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            </div>
                            <div class="row">
                            <div class="m-auto" style="width:9.5em">
                            <cod-button data-id="start-quiz" data-label="Start Quiz" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                            </div>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <p class="text-center"><strong><a href="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-02/Recycling_FAQs1_091422.pdf" target="_blank">VIEW OUR CURBSIDE RECYCLING GUIDE</a><br><br>

                    <a href="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-02/Recycling_FAQs_SP_092322.pdf" target="_blank">VEA NUESTRA GUÍA DE RECICLAJE EN LA ACERA</a></strong></p>
                    
                    <p class="text-center"><em><strong>Single family homes</strong> and homes with <strong>four or less units</strong> are eligible for the curbside recycling program.</em></p>

                    <p class="text-center">If you represent a business or live in a multifamily building with five or more units, visit our <a href="https://detroitmi.gov/departments/department-public-works/refuse-collection/detroit-recycles/commercial-recycling-program" target="_blank">Detroit’s Commercial Recycling Program page.</p>
                `;
                let shadow = this.shadowRoot;
                shadow.querySelector('button.accordion-button').addEventListener('click', (e) => {
                    let show = false;
                    let tmpClasses = shadow.querySelector('#collapseOne').className.split(' ');
                    tmpClasses.forEach((item)=>{
                        (item == 'show') ? show = true : 0;
                    });
                    if(show){
                        tmpClasses.pop();
                    }else{
                        tmpClasses.push('show');
                    }
                    shadow.querySelector('#collapseOne').className = tmpClasses.join(' ');
                })
                shadow.querySelector('cod-button').addEventListener('click', (e) => {
                    this.setAttribute('data-step', '1');
                });
                break;

            case '1':
                this.appContent.innerHTML = `
                <h2>Step 2</h2>
                `;
                break;
        
            default:
                break;
        }
    }
}