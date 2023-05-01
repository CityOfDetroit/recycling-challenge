import bootstrap from '!!raw-loader!bootstrap/dist/css/bootstrap.min.css';
import styles from '!!raw-loader!./RecyclingChallenge.css';
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
        this.appContent.className = 'col-xs-12 col-sm-12 col-md-8 m-auto';
        let row = document.createElement('div');
        row.className = 'row';
        row.appendChild(this.appContent);
        shadow.appendChild(row);

        // Track answers
        this.answers = [];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.loadSteps(newValue);
    }

    loadSteps(step){
        let rc = this;
        let qBtns = null;
        let shadow = this.shadowRoot;
        switch (step) {
            case '0':
                this.appContent.innerHTML = `
                    <div class="d-flex logo">
                        <img src="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-05/DetRecycles_Logo_050522.jpg" alt="Detroit Recycles">
                    </div>
                    <h2 class="text-center">Detroit Recycles and you can too!</h2>
                    <p class="text-center">Take this quiz to sign up for a FREE recycling cart.<br> 
                    OR call XXX-XXX-XXXX to sign up over the phone</p>
                    <div class="accordion mb-3" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            CLICK HERE TO LEARN ABOUT RECYCLING AND START THE QUIZ 
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
                            <cod-button data-id="start-quiz" data-label="Start Quiz" data-background-color="color-3" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                            </div>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <p class="text-center"><strong>OR</strong><br><br>
                    <strong>Call to sign up over the phone:</strong><br>
                    Green Living Science - (313) 871-4000 ext 3.<br>
                    Zero Waste Detroit - (313) 986-2990 
                    </p>
                    <p class="text-center"><strong>For more information about recycling: </p>
                    <p class="text-center"><strong><a href="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-02/Recycling_FAQs1_091422.pdf" target="_blank">DOWNLOAD OUR CURBSIDE RECYCLING GUIDE</a><br><br>

                    <a href="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-02/Recycling_FAQs_SP_092322.pdf" target="_blank">VEA NUESTRA GUÍA DE RECICLAJE EN LA ACERA</a></strong></p>
                    
                    <p class="text-center"><em><strong>Single family homes</strong> and homes with <strong>four or less units</strong> are eligible for the curbside recycling program.</em></p>

                    <p class="text-center">If you represent a business or live in a multifamily building with five or more units, visit our <a href="https://detroitmi.gov/departments/department-public-works/refuse-collection/detroit-recycles/commercial-recycling-program" target="_blank">Detroit’s Commercial Recycling Program page.</p>
                `;
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
                // Q1
                this.appContent.innerHTML = `
                <div class="row">
                <img loading="lazy" style="width: 15em; max-width: 100%; margin:auto;" src="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-05/Question%205.png" alt="Water bottle, shampoo bottle, yogurt cup, detergent, bottle, plastic container">
                <p class="text-center mt-3"><strong>Q: Which of the following plastic items are recyclable?</strong></p>
                </div>
                <div class="container text-center mb-2">
                <div class="mb-1">
                <cod-button data-id="q5-water" data-label="Water bottles and other beverage bottles" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <div class="mb-1">
                <cod-button data-id="q5-yogurt" data-label="Yogurt cups" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <div class="mb-1">
                <cod-button data-id="q5-shampoo" data-label="Shampoo bottles" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <div class="mb-1">
                <cod-button data-id="q5-detergent" data-label="Detergent bottles" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <div class="mb-1">
                <cod-button data-id="q5-all" data-label="All of the above" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                </div>
                <p class="text-center">1/12</p>
                `;
                qBtns = shadow.querySelectorAll('cod-button');
                qBtns.forEach((btn)=>{
                    btn.addEventListener('click', (e) => {
                        if(e.target.getAttribute('data-label') != null){
                            if(e.target.getAttribute('data-label') == 'All of the above'){
                                rc.answers.push('pass');
                                rc.setAttribute('data-step', '2');
                            }else{
                                rc.setAttribute('data-step', '3');
                            }
                        }
                    });
                })
                break;

            case '2':
                this.appContent.innerHTML = `
                <div class="row">
                <img loading="lazy" style="width: 15em; max-width: 100%; margin:auto;" src="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-05/Question%205.png" alt="Water bottle, shampoo bottle, yogurt cup, detergent, bottle, plastic container">
                <p class="text-center mt-3"><strong>Q: Which of the following plastic items are recyclable?</strong></p>
                </div>
                <div class="container text-center mb-2">
                <div class="mb-1">
                <cod-button data-id="q5-water" data-label="Water bottles and other beverage bottles" data-background-color="color-4" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <div class="mb-1">
                <cod-button data-id="q5-yogurt" data-label="Yogurt cups" data-background-color="color-4" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <div class="mb-1">
                <cod-button data-id="q5-shampoo" data-label="Shampoo bottles" data-background-color="color-4" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <div class="mb-1">
                <cod-button data-id="q5-detergent" data-label="Detergent bottles" data-background-color="color-4" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <div class="mb-1">
                <cod-button data-id="q5-all" data-label="All of the above" data-background-color="color-2" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                <h2 class="text-center pass-q mt-2"><cod-icon data-icon="check-circle" data-size="medium"></cod-icon> That’s correct!</h2>
                <p class="text-center">Notes: Hard plastic bottles and jugs are recyclable. Please be sure everything is <strong>empty and clean</strong>. Bottle caps and labels should stay on.</p>
                </div>
                <div class="container text-center">
                <cod-button data-id="q1-next" data-label="Next" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                `;
                qBtns = shadow.querySelectorAll('cod-button');
                qBtns.forEach((btn)=>{
                    btn.addEventListener('click', (e) => {
                        if(e.target.getAttribute('data-label') == 'Next'){
                            rc.setAttribute('data-step', '4');
                        }
                    });
                })
                break;

            case '3':
                this.appContent.innerHTML = `
                <div class="row">
                <img loading="lazy" style="width: 15em; max-width: 100%; margin:auto;" src="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-05/Question%205.png" alt="Water bottle, shampoo bottle, yogurt cup, detergent, bottle, plastic container">
                <p class="text-center mt-3"><strong>Q: Which of the following plastic items are recyclable?</strong></p>
                </div>
                <div class="container text-center mb-2">
                <div class="mb-1">
                <cod-button data-id="q5-water" data-label="Water bottles and other beverage bottles" data-background-color="color-4" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <div class="mb-1">
                <cod-button data-id="q5-yogurt" data-label="Yogurt cups" data-background-color="color-4" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <div class="mb-1">
                <cod-button data-id="q5-shampoo" data-label="Shampoo bottles" data-background-color="color-4" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <div class="mb-1">
                <cod-button data-id="q5-detergent" data-label="Detergent bottles" data-background-color="color-4" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <div class="mb-1">
                <cod-button data-id="q5-all" data-label="All of the above" data-background-color="color-2" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <h2 class="text-center fail-q mt-2"><cod-icon data-icon="exclamation-circle" data-size="medium"></cod-icon> Wrong! It's all of the above</h2>
                <p class="text-center">Notes: <strong>Hard plastic bottles, tubs, jugs, and jars</strong> are recyclable. Please be sure everything is <strong>empty and clean</strong>. Bottle caps and labels should stay on.</p>
                </div>
                <div class="container text-center">
                <cod-button data-id="q1-next" data-label="Next" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                `;
                qBtns = shadow.querySelectorAll('cod-button');
                qBtns.forEach((btn)=>{
                    btn.addEventListener('click', (e) => {
                        if(e.target.getAttribute('data-label') == 'Next'){
                            rc.setAttribute('data-step', '4');
                        }
                    });
                })
                break;

            case '4':
                // Q2
                this.appContent.innerHTML = `
                <div class="row">
                <img loading="lazy" style="width: 15em; max-width: 100%; margin:auto;" src="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-03/Question%201.png" alt="plastic bag">
                <p class="text-center mt-3"><strong>Q: True or false? Recyclables should be loose in your cart and not in a plastic bag.</strong></p>
                </div>
                <div class="container text-center mb-2">
                <cod-button data-id="q1-true" data-label="True" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                <cod-button data-id="q1-false" data-label="False" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                <p class="text-center">2/12</p>
                `;
                qBtns = shadow.querySelectorAll('cod-button');
                qBtns.forEach((btn)=>{
                    btn.addEventListener('click', (e) => {
                        if(e.target.getAttribute('data-label') != null){
                            if(e.target.getAttribute('data-label') == 'True'){
                                rc.answers.push('pass');
                                rc.setAttribute('data-step', '5');
                            }else{
                                rc.setAttribute('data-step', '6');
                            }
                        }
                    });
                })
                break;
            
            case '5':
                this.appContent.innerHTML = `
                <div class="row">
                <img loading="lazy" style="width: 15em; max-width: 100%; margin:auto;" src="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-05/Question%201.png" alt="plastic bag">
                <p class="text-center mt-3"><strong>Q: True or false? Recyclables should be loose in your cart and not in a plastic bag.</strong></p>
                </div>
                <div class="container text-center mb-2">
                <cod-button data-id="q1-true" data-label="True" data-background-color="color-2" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                <cod-button data-id="q1-false" data-label="False" data-background-color="color-4" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                <h2 class="text-center pass-q mt-2"><cod-icon data-icon="check-circle" data-size="medium"></cod-icon> That’s correct!</h2>
                <p class="text-center">Note: All of your recyclable items should be placed <strong>loosely in your recycling cart</strong> and <strong>not in a bag.</strong> This helps the sorting process at the recycling center. </p>
                </div>
                <div class="container text-center">
                <cod-button data-id="q1-next" data-label="Next" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                `;
                qBtns = shadow.querySelectorAll('cod-button');
                qBtns.forEach((btn)=>{
                    btn.addEventListener('click', (e) => {
                        if(e.target.getAttribute('data-label') == "Next"){
                            rc.setAttribute('data-step', '7');
                        }
                    });
                })
                break;

            case '6':
                this.appContent.innerHTML = `
                <div class="row">
                <img loading="lazy" style="width: 15em; max-width: 100%; margin:auto;" src="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-05/Question%201.png" alt="plastic bag">
                <p class="text-center mt-3"><strong>Q: True or false? Recyclables should be loose in your cart and not in a plastic bag.</strong></p>
                </div>
                <div class="container text-center mb-2">
                <cod-button data-id="q1-true" data-label="True" data-background-color="color-2" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                <cod-button data-id="q1-false" data-label="False" data-background-color="color-4" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                <h2 class="text-center fail-q mt-2"><cod-icon data-icon="exclamation-circle" data-size="medium"></cod-icon> Wrong! It's true</h2>
                <p class="text-center">Note: All of your recyclable items should be placed <strong>loosely in your recycling cart</strong> and <strong>not in a bag.</strong> This helps the sorting process at the recycling center. </p>
                </div>
                <div class="container text-center">
                <cod-button data-id="q1-next" data-label="Next" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                `;
                qBtns = shadow.querySelectorAll('cod-button');
                qBtns.forEach((btn)=>{
                    btn.addEventListener('click', (e) => {
                        if(e.target.getAttribute('data-label') == "Next"){
                            rc.setAttribute('data-step', '7');
                        }
                    });
                })
                break;

            case '7':
                // Q3
                this.appContent.innerHTML = `
                <div class="row">
                <img loading="lazy" style="width: 15em; max-width: 100%; margin:auto;" src="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-03/Question%2011.png" alt="dirty containers and full pop bottle">
                <p class="text-center mt-3"><strong>Q: True or false? These items are ready for recycling.</strong></p>
                </div>
                <div class="container text-center mb-2">
                <cod-button data-id="q1-true" data-label="True" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                <cod-button data-id="q1-false" data-label="False" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                <p class="text-center">3/12</p>
                `;
                qBtns = shadow.querySelectorAll('cod-button');
                qBtns.forEach((btn)=>{
                    btn.addEventListener('click', (e) => {
                        if(e.target.getAttribute('data-label') != null){
                            if(e.target.getAttribute('data-label') == 'False'){
                                rc.answers.push('pass');
                                rc.setAttribute('data-step', '8');
                            }else{
                                rc.setAttribute('data-step', '9');
                            }
                        }
                    });
                })
                break;

            case '8':
                this.appContent.innerHTML = `
                <div class="row">
                <img loading="lazy" style="width: 15em; max-width: 100%; margin:auto;" src="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-03/Question%2011.png" alt="dirty containers and full pop bottle">
                <p class="text-center mt-3"><strong>Q: True or false? These items are ready for recycling.</strong></p>
                </div>
                <div class="container text-center mb-2">
                <cod-button data-id="q1-true" data-label="True" data-background-color="color-4" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                <cod-button data-id="q1-false" data-label="False" data-background-color="color-2" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                <h2 class="text-center pass-q mt-2"><cod-icon data-icon="check-circle" data-size="medium"></cod-icon> That’s correct!</h2>
                <p class="text-center">Note: Please <strong>empty and rinse</strong> all containers before recycling them. You do not need to remove labels. Foods and liquids get our recycling carts dirty and stinky, and it contaminates other recyclable items. 
                <br><strong>PRO TIP:</strong> use a spatula or used napkin to remove sticky food from containers – its quick, easy, and saves water.</p>
                </div>
                <div class="container text-center">
                <cod-button data-id="q1-next" data-label="Next" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                `;
                qBtns = shadow.querySelectorAll('cod-button');
                qBtns.forEach((btn)=>{
                    btn.addEventListener('click', (e) => {
                        if(e.target.getAttribute('data-label') == "Next"){
                            rc.setAttribute('data-step', '10');
                        }
                    });
                })
                break;

            case '9':
                this.appContent.innerHTML = `
                <div class="row">
                <img loading="lazy" style="width: 15em; max-width: 100%; margin:auto;" src="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-03/Question%2011.png" alt="dirty containers and full pop bottle">
                <p class="text-center mt-3"><strong>Q: True or false? These items are ready for recycling.</strong></p>
                </div>
                <div class="container text-center mb-2">
                <cod-button data-id="q1-true" data-label="True" data-background-color="color-4" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                <cod-button data-id="q1-false" data-label="False" data-background-color="color-2" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                <h2 class="text-center fail-q mt-2"><cod-icon data-icon="exclamation-circle" data-size="medium"></cod-icon> Wrong! It's false</h2>
                <p class="text-center">Note: Please <strong>empty and rinse</strong> all containers before recycling them. You do not need to remove labels. Foods and liquids get our recycling carts dirty and stinky, and it contaminates other recyclable items. 
                <br><strong>PRO TIP:</strong> use a spatula or used napkin to remove sticky food from containers – its quick, easy, and saves water.</p>
                </div>
                <div class="container text-center">
                <cod-button data-id="q1-next" data-label="Next" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                `;
                qBtns = shadow.querySelectorAll('cod-button');
                qBtns.forEach((btn)=>{
                    btn.addEventListener('click', (e) => {
                        if(e.target.getAttribute('data-label') == "Next"){
                            rc.setAttribute('data-step', '10');
                        }
                    });
                })
                break;

            case '10':
                // Q4
                this.appContent.innerHTML = `
                <div class="row">
                <img loading="lazy" style="width: 15em; max-width: 100%; margin:auto;" src="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-03/Question%207.png" alt="glass bottles">
                <p class="text-center mt-3"><strong>Q: True or false? Any color glass bottle can be recycled.</strong></p>
                </div>
                <div class="container text-center mb-2">
                <cod-button data-id="q1-true" data-label="True" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                <cod-button data-id="q1-false" data-label="False" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                <p class="text-center">4/12</p>
                `;
                qBtns = shadow.querySelectorAll('cod-button');
                qBtns.forEach((btn)=>{
                    btn.addEventListener('click', (e) => {
                        if(e.target.getAttribute('data-label') != null){
                            if(e.target.getAttribute('data-label') == 'True'){
                                rc.answers.push('pass');
                                rc.setAttribute('data-step', '11');
                            }else{
                                rc.setAttribute('data-step', '12');
                            }
                        }
                    });
                })
                break;

            case '11':
                this.appContent.innerHTML = `
                <div class="row">
                <img loading="lazy" style="width: 15em; max-width: 100%; margin:auto;" src="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-03/Question%207.png" alt="glass bottles">
                <p class="text-center mt-3"><strong>Q: True or false? Any color glass bottle can be recycled.</strong></p>
                </div>
                <div class="container text-center mb-2">
                <cod-button data-id="q1-true" data-label="True" data-background-color="color-2" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                <cod-button data-id="q1-false" data-label="False" data-background-color="color-4" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                <h2 class="text-center pass-q mt-2"><cod-icon data-icon="check-circle" data-size="medium"></cod-icon> That’s correct!</h2>
                <p class="text-center">Note: <strong>Empty and clean</strong> glass bottles and jars can be placed in your recycling cart, no matter what color glass. Please DO NOT recycle other glass items such as windows, pyrex, ceramics, or kitchenware like cups.</p>
                </div>
                <div class="container text-center">
                <cod-button data-id="q1-next" data-label="Next" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                `;
                qBtns = shadow.querySelectorAll('cod-button');
                qBtns.forEach((btn)=>{
                    btn.addEventListener('click', (e) => {
                        if(e.target.getAttribute('data-label') == "Next"){
                            rc.setAttribute('data-step', '13');
                        }
                    });
                })
                break;

            case '12':
                this.appContent.innerHTML = `
                <div class="row">
                <img loading="lazy" style="width: 15em; max-width: 100%; margin:auto;" src="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-03/Question%207.png" alt="glass bottles">
                <p class="text-center mt-3"><strong>Q: True or false? Any color glass bottle can be recycled.</strong></p>
                </div>
                <div class="container text-center mb-2">
                <cod-button data-id="q1-true" data-label="True" data-background-color="color-2" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                <cod-button data-id="q1-false" data-label="False" data-background-color="color-4" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                <h2 class="text-center fail-q mt-2"><cod-icon data-icon="exclamation-circle" data-size="medium"></cod-icon> Wrong! It's true</h2>
                <p class="text-center">Note: <strong>Empty and clean</strong> glass bottles and jars can be placed in your recycling cart, no matter what color glass. Please DO NOT recycle other glass items such as windows, pyrex, ceramics, or kitchenware like cups.</p>
                </div>
                <div class="container text-center">
                <cod-button data-id="q1-next" data-label="Next" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                `;
                qBtns = shadow.querySelectorAll('cod-button');
                qBtns.forEach((btn)=>{
                    btn.addEventListener('click', (e) => {
                        if(e.target.getAttribute('data-label') == "Next"){
                            rc.setAttribute('data-step', '13');
                        }
                    });
                })
                break;


            case '13':
                // Q5
                this.appContent.innerHTML = `
                <div class="row">
                <img loading="lazy" style="width: 15em; max-width: 100%; margin:auto;" src="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-03/Question%202.png" alt="styrofoam cups">
                <p class="text-center mt-3"><strong>Q: True or false? Styrofoam should be placed in your recycling cart.</strong></p>
                </div>
                <div class="container text-center mb-2">
                <cod-button data-id="q1-true" data-label="True" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                <cod-button data-id="q1-false" data-label="False" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                <p class="text-center">5/12</p>
                `;
                qBtns = shadow.querySelectorAll('cod-button');
                qBtns.forEach((btn)=>{
                    btn.addEventListener('click', (e) => {
                        if(e.target.getAttribute('data-label') != null){
                            if(e.target.getAttribute('data-label') == 'False'){
                                rc.answers.push('pass');
                                rc.setAttribute('data-step', '14');
                            }else{
                                rc.setAttribute('data-step', '15');
                            }
                        }
                    });
                })
                break;

            case '14':
                this.appContent.innerHTML = `
                <div class="row">
                <img loading="lazy" style="width: 15em; max-width: 100%; margin:auto;" src="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-03/Question%202.png" alt="styrofoam cups">
                <p class="text-center mt-3"><strong>Q: True or false? Styrofoam should be placed in your recycling cart.</strong></p>
                </div>
                <div class="container text-center mb-2">
                <cod-button data-id="q1-true" data-label="True" data-background-color="color-4" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                <cod-button data-id="q1-false" data-label="False" data-background-color="color-2" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                <h2 class="text-center pass-q mt-2"><cod-icon data-icon="check-circle" data-size="medium"></cod-icon> That’s correct!</h2>
                <p class="text-center">Note: Styrofoam <strong>DOES NOT GO</strong> in your curbside recycling cart.
                <br>However, you can recycle it by <strong>dropping it off at Recycle Here!</strong> at 5960 Lincoln St.
                <br><br>Hours of operation: 
                <br><strong>Mondays 10-6pm</strong>  
                <br><strong>Wednesdays 10-6pm</strong>  
                <br><strong>Saturdays 9-3pm</strong> 
                <br><br>Recycle Here! collects paper, cardboard, books, metal, plastic, and more! </p>
                </div>
                <div class="container text-center">
                <cod-button data-id="q1-next" data-label="Next" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                `;
                qBtns = shadow.querySelectorAll('cod-button');
                qBtns.forEach((btn)=>{
                    btn.addEventListener('click', (e) => {
                        if(e.target.getAttribute('data-label') == "Next"){
                            rc.setAttribute('data-step', '16');
                        }
                    });
                })
                break;

            case '15':
                this.appContent.innerHTML = `
                <div class="row">
                <img loading="lazy" style="width: 15em; max-width: 100%; margin:auto;" src="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-03/Question%202.png" alt="styrofoam cups">
                <p class="text-center mt-3"><strong>Q: True or false? Styrofoam should be placed in your recycling cart.</strong></p>
                </div>
                <div class="container text-center mb-2">
                <cod-button data-id="q1-true" data-label="True" data-background-color="color-4" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                <cod-button data-id="q1-false" data-label="False" data-background-color="color-2" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                <h2 class="text-center fail-q mt-2"><cod-icon data-icon="exclamation-circle" data-size="medium"></cod-icon> Wrong! It's false</h2>
                <p class="text-center">Note: Styrofoam <strong>DOES NOT GO</strong> in your curbside recycling cart.
                <br>However, you can recycle it by <strong>dropping it off at Recycle Here!</strong> at 5960 Lincoln St.
                <br><br>Hours of operation: 
                <br><strong>Mondays 10-6pm</strong>  
                <br><strong>Wednesdays 10-6pm</strong>  
                <br><strong>Saturdays 9-3pm</strong> 
                <br><br>Recycle Here! collects paper, cardboard, books, metal, plastic, and more! </p>
                </div>
                <div class="container text-center">
                <cod-button data-id="q1-next" data-label="Next" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                `;
                qBtns = shadow.querySelectorAll('cod-button');
                qBtns.forEach((btn)=>{
                    btn.addEventListener('click', (e) => {
                        if(e.target.getAttribute('data-label') == "Next"){
                            rc.setAttribute('data-step', '16');
                        }
                    });
                })
                break;

            case '16':
                // Q6
                this.appContent.innerHTML = `
                <div class="row">
                <img loading="lazy" style="width: 15em; max-width: 100%; margin:auto;" src="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-03/Question%203.png" alt="plastic bag">
                <p class="text-center mt-3"><strong>Q: How can you recycle plastic bags?</strong></p>
                </div>
                <div class="container text-center mb-2">
                <div class="mb-1">
                <cod-button data-id="q3-curbside" data-label="Curbside Recycling Cart" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <div class="mb-1">
                <cod-button data-id="q3-no-recycle" data-label="You can’t recycle plastic bags" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <div>
                <cod-button data-id="q3-drop-off" data-label="Drop off plastic bags at a retail store such as Meijer, Kroger, or your local market." data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                </div>
                <p class="text-center">6/12</p>
                `;
                qBtns = shadow.querySelectorAll('cod-button');
                qBtns.forEach((btn)=>{
                    btn.addEventListener('click', (e) => {
                        if(e.target.getAttribute('data-label') != null){
                            if(e.target.getAttribute('data-label') == 'Drop off plastic bags at a retail store such as Meijer, Kroger, or your local market.'){
                                rc.answers.push('pass');
                                rc.setAttribute('data-step', '17');
                            }else{
                                rc.setAttribute('data-step', '18');
                            }
                        }
                    });
                })
                break;

            case '17':
                this.appContent.innerHTML = `
                <div class="row">
                <img loading="lazy" style="width: 15em; max-width: 100%; margin:auto;" src="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-03/Question%203.png" alt="plastic bag">
                <p class="text-center mt-3"><strong>Q: How can you recycle plastic bags?</strong></p>
                </div>
                <div class="container text-center mb-2">
                <div class="mb-1">
                <cod-button data-id="q3-curbside" data-label="Curbside Recycling Cart" data-background-color="color-4" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <div class="mb-1">
                <cod-button data-id="q3-no-recycle" data-label="You can’t recycle plastic bags" data-background-color="color-4" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <div>
                <cod-button data-id="q3-drop-off" data-label="Drop off plastic bags at a retail store such as Meijer, Kroger, or your local market." data-background-color="color-2" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                <h2 class="text-center pass-q mt-2"><cod-icon data-icon="check-circle" data-size="medium"></cod-icon> That’s correct!</h2>
                <p class="text-center">Note: <strong>DO NOT place plastic bags in our curbside carts</strong>, they jam up the machinery that sort our recyclables. 
                <br>Plastic bags can be dropped off at a local grocer or retail stores to be recycled.  
                <br>Even better, you can reuse them or bring reusable bags to go shopping!  </p>
                </div>
                <div class="container text-center">
                <cod-button data-id="q1-next" data-label="Next" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                `;
                qBtns = shadow.querySelectorAll('cod-button');
                qBtns.forEach((btn)=>{
                    btn.addEventListener('click', (e) => {
                        if(e.target.getAttribute('data-label') == "Next"){
                            rc.setAttribute('data-step', '19');
                        }
                    });
                })
                break;

            case '18':
                this.appContent.innerHTML = `
                <div class="row">
                <img loading="lazy" style="width: 15em; max-width: 100%; margin:auto;" src="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-03/Question%203.png" alt="plastic bag">
                <p class="text-center mt-3"><strong>Q: How can you recycle plastic bags?</strong></p>
                </div>
                <div class="container text-center mb-2">
                <div class="mb-1">
                <cod-button data-id="q3-curbside" data-label="Curbside Recycling Cart" data-background-color="color-4" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <div class="mb-1">
                <cod-button data-id="q3-no-recycle" data-label="You can’t recycle plastic bags" data-background-color="color-4" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <div>
                <cod-button data-id="q3-drop-off" data-label="Drop off plastic bags at a retail store such as Meijer, Kroger, or your local market." data-background-color="color-2" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                <h2 class="text-center fail-q mt-2"><cod-icon data-icon="exclamation-circle" data-size="medium"></cod-icon> Wrong! It's drop them off</h2>
                <p class="text-center">Note: Plastic bags can be dropped off at a local grocer or retail stores to be recycled. Even better, you can reuse them or bring reusable totes to go shopping! DO NOT place plastic bags in our curbside carts, they jam up the machinery that sort our recyclables.</p>
                </div>
                <div class="container text-center">
                <cod-button data-id="q1-next" data-label="Next" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                `;
                qBtns = shadow.querySelectorAll('cod-button');
                qBtns.forEach((btn)=>{
                    btn.addEventListener('click', (e) => {
                        if(e.target.getAttribute('data-label') == "Next"){
                            rc.setAttribute('data-step', '19');
                        }
                    });
                })
                break;

            case '19':
                // Q7
                this.appContent.innerHTML = `
                <div class="row">
                <img loading="lazy" style="width: 15em; max-width: 100%; margin:auto;" src="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-03/Question%206.png" alt="garden hose, wire hangers and string lights">
                <p class="text-center mt-3"><strong>Q:</strong> True or false? Old garden hoses, wire hangers, and string lights should be put in your recycling cart.</p>
                </div>
                <div class="container text-center mb-2">
                <cod-button data-id="q1-true" data-label="True" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                <cod-button data-id="q1-false" data-label="False" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                <p class="text-center">7/12</p>
                `;
                qBtns = shadow.querySelectorAll('cod-button');
                qBtns.forEach((btn)=>{
                    btn.addEventListener('click', (e) => {
                        if(e.target.getAttribute('data-label') != null){
                            if(e.target.getAttribute('data-label') == 'False'){
                                rc.answers.push('pass');
                                rc.setAttribute('data-step', '20');
                            }else{
                                rc.setAttribute('data-step', '21');
                            }
                        }
                    });
                })
                break;

            case '20':
                this.appContent.innerHTML = `
                <div class="row">
                <img loading="lazy" style="width: 15em; max-width: 100%; margin:auto;" src="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-03/Question%206.png" alt="garden hose, wire hangers and string lights">
                <p class="text-center mt-3"><strong>Q:</strong> True or false? Old garden hoses, wire hangers, and string lights should be put in your recycling cart.</p>
                <div class="container text-center mb-2">
                <cod-button data-id="q1-true" data-label="True" data-background-color="color-4" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                <cod-button data-id="q1-false" data-label="False" data-background-color="color-2" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                <h2 class="text-center pass-q mt-2"><cod-icon data-icon="check-circle" data-size="medium"></cod-icon> That’s correct!</h2>
                <p class="text-center">Note: Garden hoses, electric cords, string lights, and other wire items should NOT be in your recycling cart. <strong>These items get tangled up</strong> in the recycling sorting equipment.</p>
                </div>
                <div class="container text-center">
                <cod-button data-id="q1-next" data-label="Next" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                `;
                qBtns = shadow.querySelectorAll('cod-button');
                qBtns.forEach((btn)=>{
                    btn.addEventListener('click', (e) => {
                        if(e.target.getAttribute('data-label') == "Next"){
                            rc.setAttribute('data-step', '22');
                        }
                    });
                })
                break;

            case '21':
                this.appContent.innerHTML = `
                <div class="row">
                <img loading="lazy" style="width: 15em; max-width: 100%; margin:auto;" src="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-03/Question%206.png" alt="garden hose, wire hangers and string lights">
                <p class="text-center mt-3"><strong>Q:</strong> True or false? Old garden hoses, wire hangers, and string lights should be put in your recycling cart.</p>
                <div class="container text-center mb-2">
                <cod-button data-id="q1-true" data-label="True" data-background-color="color-4" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                <cod-button data-id="q1-false" data-label="False" data-background-color="color-2" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                <h2 class="text-center fail-q mt-2"><cod-icon data-icon="exclamation-circle" data-size="medium"></cod-icon> Wrong! It's false</h2>
                <p class="text-center">Note: Garden hoses, electric cords, string lights, and other wire items should NOT be in your recycling cart. <strong>These items get tangled up</strong> in the recycling sorting equipment.</p>
                </div>
                <div class="container text-center">
                <cod-button data-id="q1-next" data-label="Next" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                `;
                qBtns = shadow.querySelectorAll('cod-button');
                qBtns.forEach((btn)=>{
                    btn.addEventListener('click', (e) => {
                        if(e.target.getAttribute('data-label') == "Next"){
                            rc.setAttribute('data-step', '22');
                        }
                    });
                })
                break;

            case '22':
                // Q8
                this.appContent.innerHTML = `
                <div class="row">
                <img loading="lazy" style="width: 15em; max-width: 100%; margin:auto;" src="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-03/Question%2010.png" alt="pop cans, tuna can and aluminum foil">
                <p class="text-center mt-3"><strong>Q: Which of the following can be placed in your recycling cart?</strong></p>
                </div>
                <div class="container text-center mb-2">
                <div class="mb-1">
                <cod-button data-id="q5-soup" data-label="Soup cans" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <div class="mb-1">
                <cod-button data-id="q5-pop" data-label="Pop cans" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <div class="mb-1">
                <cod-button data-id="q5-foil" data-label="Aluminum foil" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <div class="mb-1">
                <cod-button data-id="q5-all" data-label="All of the above" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                </div>
                <p class="text-center">8/12</p>
                `;
                qBtns = shadow.querySelectorAll('cod-button');
                qBtns.forEach((btn)=>{
                    btn.addEventListener('click', (e) => {
                        if(e.target.getAttribute('data-label') != null){
                            if(e.target.getAttribute('data-label') == 'All of the above'){
                                rc.answers.push('pass');
                                rc.setAttribute('data-step', '23');
                            }else{
                                rc.setAttribute('data-step', '24');
                            }
                        }
                    });
                })
                break;

            case '23':
                this.appContent.innerHTML = `
                <div class="row">
                <img loading="lazy" style="width: 15em; max-width: 100%; margin:auto;" src="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-03/Question%2010.png" alt="pop cans, tuna can and aluminum foil">
                <p class="text-center mt-3"><strong>Q: Which of the following can be placed in your recycling cart?</strong></p>
                </div>
                <div class="container text-center mb-2">
                <div class="mb-1">
                <cod-button data-id="q5-soup" data-label="Soup cans" data-background-color="color-4" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <div class="mb-1">
                <cod-button data-id="q5-pop" data-label="Pop cans" data-background-color="color-4" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <div class="mb-1">
                <cod-button data-id="q5-foil" data-label="Aluminum foil" data-background-color="color-4" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <div class="mb-1">
                <cod-button data-id="q5-all" data-label="All of the above" data-background-color="color-2" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <h2 class="text-center pass-q mt-2"><cod-icon data-icon="check-circle" data-size="medium"></cod-icon> That’s correct!</h2>
                <p class="text-center">Note: Please <strong>empty and clean</strong> all containers before recycling them. Labels do not need to be removed.</p>
                </div>
                <div class="container text-center">
                <cod-button data-id="q1-next" data-label="Next" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                `;
                qBtns = shadow.querySelectorAll('cod-button');
                qBtns.forEach((btn)=>{
                    btn.addEventListener('click', (e) => {
                        if(e.target.getAttribute('data-label') == "Next"){
                            rc.setAttribute('data-step', '25');
                        }
                    });
                })
                break;

            case '24':
                this.appContent.innerHTML = `
                <div class="row">
                <img loading="lazy" style="width: 15em; max-width: 100%; margin:auto;" src="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-03/Question%2010.png" alt="pop cans, tuna can and aluminum foil">
                <p class="text-center mt-3"><strong>Q: Which of the following can be placed in your recycling cart?</strong></p>
                </div>
                <div class="container text-center mb-2">
                <div class="mb-1">
                <cod-button data-id="q5-soup" data-label="Soup cans" data-background-color="color-4" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <div class="mb-1">
                <cod-button data-id="q5-pop" data-label="Pop cans" data-background-color="color-4" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <div class="mb-1">
                <cod-button data-id="q5-foil" data-label="Aluminum foil" data-background-color="color-4" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <div class="mb-1">
                <cod-button data-id="q5-all" data-label="All of the above" data-background-color="color-2" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <h2 class="text-center fail-q mt-2"><cod-icon data-icon="exclamation-circle" data-size="medium"></cod-icon> Wrong! It's all of the above</h2>
                <p class="text-center">Note: Please <strong>empty and clean</strong> all containers before recycling them. Labels do not need to be removed. </p>
                </div>
                <div class="container text-center">
                <cod-button data-id="q1-next" data-label="Next" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                `;
                qBtns = shadow.querySelectorAll('cod-button');
                qBtns.forEach((btn)=>{
                    btn.addEventListener('click', (e) => {
                        if(e.target.getAttribute('data-label') == "Next"){
                            rc.setAttribute('data-step', '25');
                        }
                    });
                })
                break;

            case '25':
                // Q9
                this.appContent.innerHTML = `
                <div class="row">
                <img loading="lazy" style="width: 15em; max-width: 100%; margin:auto;" src="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-03/Question%208.png" alt="napkins, straws, and plastic utensils">
                <p class="text-center mt-3"><strong>Q: How should you dispose of napkins, straws, and plastic utensils?</strong></p>
                </div>
                <div class="container text-center mb-2">
                <div class="mb-1">
                <cod-button data-id="q5-recycling" data-label="Recycling cart" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <div class="mb-1">
                <cod-button data-id="q5-trash" data-label="Trash cart" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                </div>
                <p class="text-center">9/12</p>
                `;
                qBtns = shadow.querySelectorAll('cod-button');
                qBtns.forEach((btn)=>{
                    btn.addEventListener('click', (e) => {
                        if(e.target.getAttribute('data-label') != null){
                            if(e.target.getAttribute('data-label') == 'Trash cart'){
                                rc.answers.push('pass');
                                rc.setAttribute('data-step', '26');
                            }else{
                                rc.setAttribute('data-step', '27');
                            }
                        }
                    });
                })
                break;

            case '26':
                this.appContent.innerHTML = `
                <div class="row">
                <img loading="lazy" style="width: 15em; max-width: 100%; margin:auto;" src="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-03/Question%208.png" alt="napkins, straws, and plastic utensils">
                <p class="text-center mt-3"><strong>Q: How should you dispose of napkins, straws, and plastic utensils?</strong></p>
                </div>
                <div class="container text-center mb-2">
                <div class="mb-1">
                <cod-button data-id="q5-recycling" data-label="Recycling cart" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <div class="mb-1">
                <cod-button data-id="q5-trash" data-label="Trash cart" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                <h2 class="text-center pass-q mt-2"><cod-icon data-icon="check-circle" data-size="medium"></cod-icon> That’s correct!</h2>
                <p class="text-center">Note: <strong>Disposable utensils and straws are garbage.</strong><br>
                Napkins, paper towels, and tissue also cannot be recycled. <br>
                PRO TIP: when ordering take-out, ask for “no utensils” if you don’t need them!</p>
                </div>
                <div class="container text-center">
                <cod-button data-id="q1-next" data-label="Next" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                `;
                qBtns = shadow.querySelectorAll('cod-button');
                qBtns.forEach((btn)=>{
                    btn.addEventListener('click', (e) => {
                        if(e.target.getAttribute('data-label') == "Next"){
                            rc.setAttribute('data-step', '28');
                        }
                    });
                })
                break;

            case '27':
                this.appContent.innerHTML = `
                <div class="row">
                <img loading="lazy" style="width: 15em; max-width: 100%; margin:auto;" src="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-03/Question%208.png" alt="napkins, straws, and plastic utensils">
                <p class="text-center mt-3"><strong>Q: How should you dispose of napkins, straws, and plastic utensils?</strong></p>
                </div>
                <div class="container text-center mb-2">
                <div class="mb-1">
                <cod-button data-id="q5-recycling" data-label="Recycling cart" data-background-color="color-4" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <div class="mb-1">
                <cod-button data-id="q5-trash" data-label="Trash cart" data-background-color="color-2" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                <h2 class="text-center fail-q mt-2"><cod-icon data-icon="exclamation-circle" data-size="medium"></cod-icon> Wrong! It's trash cart</h2>
                <p class="text-center">Note: <strong>Disposable utensils and straws are garbage.</strong><br>
                Napkins, paper towels, and tissue also cannot be recycled. <br>
                PRO TIP: when ordering take-out, ask for “no utensils” if you don’t need them!</p>
                </div>
                <div class="container text-center">
                <cod-button data-id="q1-next" data-label="Next" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                `;
                qBtns = shadow.querySelectorAll('cod-button');
                qBtns.forEach((btn)=>{
                    btn.addEventListener('click', (e) => {
                        if(e.target.getAttribute('data-label') == "Next"){
                            rc.setAttribute('data-step', '28');
                        }
                    });
                })
                break;

            case '28':
                // Q10
                this.appContent.innerHTML = `
                <div class="row">
                <img loading="lazy" style="width: 15em; max-width: 100%; margin:auto;" src="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-03/Question%209.png" alt="Clothes, rags, and other textiles">
                <p class="text-center mt-3"><strong>Q:</strong> True or false? Clothes, rags, and other textiles can be placed in your curbside recycling cart.</p>
                </div>
                <div class="container text-center mb-2">
                <cod-button data-id="q1-true" data-label="True" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                <cod-button data-id="q1-false" data-label="False" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                <p class="text-center">10/12</p>
                `;
                qBtns = shadow.querySelectorAll('cod-button');
                qBtns.forEach((btn)=>{
                    btn.addEventListener('click', (e) => {
                        if(e.target.getAttribute('data-label') != null){
                            if(e.target.getAttribute('data-label') == 'False'){
                                rc.answers.push('pass');
                                rc.setAttribute('data-step', '29');
                            }else{
                                rc.setAttribute('data-step', '30');
                            }
                        }
                    });
                })
                break;

            case '29':
                this.appContent.innerHTML = `
                <div class="row">
                <img loading="lazy" style="width: 15em; max-width: 100%; margin:auto;" src="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-03/Question%209.png" alt="Clothes, rags, and other textiles">
                <p class="text-center mt-3"><strong>Q:</strong> True or false? Clothes, rags, and other textiles can be placed in your curbside recycling cart.</p>
                </div>
                <div class="container text-center mb-2">
                <cod-button data-id="q1-true" data-label="True" data-background-color="color-4" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                <cod-button data-id="q1-false" data-label="False" data-background-color="color-2" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                <h2 class="text-center pass-q mt-2"><cod-icon data-icon="check-circle" data-size="medium"></cod-icon> That’s correct!</h2>
                <p class="text-center">Note: Clothes, rags, shoes, and other textiles <strong>cannot be recycled</strong> curbside. We recommend finding a local <strong>donation center for reusable items.</strong></p>
                </div>
                <div class="container text-center">
                <cod-button data-id="q1-next" data-label="Next" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                `;
                qBtns = shadow.querySelectorAll('cod-button');
                qBtns.forEach((btn)=>{
                    btn.addEventListener('click', (e) => {
                        if(e.target.getAttribute('data-label') == "Next"){
                            rc.setAttribute('data-step', '31');
                        }
                    });
                })
                break;

            case '30':
                this.appContent.innerHTML = `
                <div class="row">
                <img loading="lazy" style="width: 15em; max-width: 100%; margin:auto;" src="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-03/Question%209.png" alt="Clothes, rags, and other textiles">
                <p class="text-center mt-3"><strong>Q:</strong> True or false? Clothes, rags, and other textiles can be placed in your curbside recycling cart.</p>
                </div>
                <div class="container text-center mb-2">
                <cod-button data-id="q1-true" data-label="True" data-background-color="color-4" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                <cod-button data-id="q1-false" data-label="False" data-background-color="color-2" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                <h2 class="text-center fail-q mt-2"><cod-icon data-icon="exclamation-circle" data-size="medium"></cod-icon> Wrong! It's false</h2>
                <p class="text-center">Note: Clothes, rags, shoes, and other textiles <strong>cannot be recycled</strong> curbside. We recommend finding a local <strong>donation center for reusable items.</strong></p>
                </div>
                <div class="container text-center">
                <cod-button data-id="q1-next" data-label="Next" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                `;
                qBtns = shadow.querySelectorAll('cod-button');
                qBtns.forEach((btn)=>{
                    btn.addEventListener('click', (e) => {
                        if(e.target.getAttribute('data-label') == "Next"){
                            rc.setAttribute('data-step', '31');
                        }
                    });
                })
                break;

            case '31':
                // Q11
                this.appContent.innerHTML = `
                <div class="row">
                <img loading="lazy" style="width: 15em; max-width: 100%; margin:auto;" src="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-03/Question%204.png" alt="Batteries, electronics, and other small appliances">
                <p class="text-center mt-3"><strong>Q: True or false? Batteries, electronics, and other small appliances go in your recycling cart.</strong></p>
                </div>
                <div class="container text-center mb-2">
                <cod-button data-id="q1-true" data-label="True" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                <cod-button data-id="q1-false" data-label="False" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                <p class="text-center">11/12</p>
                `;
                qBtns = shadow.querySelectorAll('cod-button');
                qBtns.forEach((btn)=>{
                    btn.addEventListener('click', (e) => {
                        if(e.target.getAttribute('data-label') != null){
                            if(e.target.getAttribute('data-label') == 'False'){
                                rc.answers.push('pass');
                                rc.setAttribute('data-step', '32');
                            }else{
                                rc.setAttribute('data-step', '33');
                            }
                        }
                    });
                })
                break;

            case '32':
                this.appContent.innerHTML = `
                <div class="row">
                <img loading="lazy" style="width: 15em; max-width: 100%; margin:auto;" src="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-03/Question%204.png" alt="Batteries, electronics, and other small appliances">
                <p class="text-center mt-3"><strong>Q: True or false? Batteries, electronics, and other small appliances go in your recycling cart.</strong></p>
                </div>
                <div class="container text-center mb-2">
                <cod-button data-id="q1-true" data-label="True" data-background-color="color-4" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                <cod-button data-id="q1-false" data-label="False" data-background-color="color-2" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                <h2 class="text-center pass-q mt-2"><cod-icon data-icon="check-circle" data-size="medium"></cod-icon> That’s correct!</h2>
                <p class="text-center">Note: <strong>Drop off</strong> batteries, electronics, and other small appliances <strong>at the Household Hazardous Waste Facility</strong>.<br>
                Putting these items in your curbside cart is dangerous! <br>
                Visit the Household Hazardous Waste Facility at 2000 E Ferry St. Open on:<br> Thursdays from 7:30am – 2pm, <br>or every fourth Saturday from 8am – 2pm.  </p>
                </div>
                <div class="container text-center">
                <cod-button data-id="q1-next" data-label="Next" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                `;
                qBtns = shadow.querySelectorAll('cod-button');
                qBtns.forEach((btn)=>{
                    btn.addEventListener('click', (e) => {
                        if(e.target.getAttribute('data-label') == "Next"){
                            rc.setAttribute('data-step', '34');
                        }
                    });
                })
                break;

            case '33':
                this.appContent.innerHTML = `
                <div class="row">
                <img loading="lazy" style="width: 15em; max-width: 100%; margin:auto;" src="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-03/Question%204.png" alt="Batteries, electronics, and other small appliances">
                <p class="text-center mt-3"><strong>Q: True or false? Batteries, electronics, and other small appliances go in your recycling cart.</strong></p>
                </div>
                <div class="container text-center mb-2">
                <cod-button data-id="q1-true" data-label="True" data-background-color="color-4" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                <cod-button data-id="q1-false" data-label="False" data-background-color="color-2" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                <h2 class="text-center fail-q mt-2"><cod-icon data-icon="exclamation-circle" data-size="medium"></cod-icon> Wrong! It's false</h2>
                <p class="text-center">Note: <strong>Drop off</strong> batteries, electronics, and other small appliances <strong>at the Household Hazardous Waste Facility</strong>.<br>
                Putting these items in your curbside cart is dangerous! <br>
                Visit the Household Hazardous Waste Facility at 2000 E Ferry St. Open on:<br> Thursdays from 7:30am – 2pm, <br>or every fourth Saturday from 8am – 2pm.  </p>
                </div>
                <div class="container text-center">
                <cod-button data-id="q1-next" data-label="Next" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                `;
                qBtns = shadow.querySelectorAll('cod-button');
                qBtns.forEach((btn)=>{
                    btn.addEventListener('click', (e) => {
                        if(e.target.getAttribute('data-label') == "Next"){
                            rc.setAttribute('data-step', '34');
                        }
                    });
                })
                break;

            case '34':
                // Q12
                this.appContent.innerHTML = `
                <div class="row">
                <img loading="lazy" style="width: 15em; max-width: 100%; margin:auto;" src="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-03/Question%2012.png" alt="coffee cups, envelopes, juice carton and magazines">
                <p class="text-center mt-3"><strong>Q:</strong> Which of the following plastic items are recyclable?</p>
                </div>
                <div class="container text-center mb-2">
                <div class="mb-1">
                <cod-button data-id="q5-coffee" data-label="Coffee cups" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <div class="mb-1">
                <cod-button data-id="q5-envelopes" data-label="Envelopes with plastic windows" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <div class="mb-1">
                <cod-button data-id="q5-juice" data-label="Orange juice carton" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <div class="mb-1">
                <cod-button data-id="q5-magazines" data-label="Magazines" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <div class="mb-1">
                <cod-button data-id="q5-all" data-label="All of the above" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                </div>
                <p class="text-center">12/12</p>
                `;
                qBtns = shadow.querySelectorAll('cod-button');
                qBtns.forEach((btn)=>{
                    btn.addEventListener('click', (e) => {
                        if(e.target.getAttribute('data-label') != null){
                            if(e.target.getAttribute('data-label') == 'All of the above'){
                                rc.answers.push('pass');
                                rc.setAttribute('data-step', '35');
                            }else{
                                rc.setAttribute('data-step', '36');
                            }
                        }
                    });
                })
                break;

            case '35':
                this.appContent.innerHTML = `
                <div class="row">
                <img loading="lazy" style="width: 15em; max-width: 100%; margin:auto;" src="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-03/Question%2012.png" alt="coffee cups, envelopes, juice carton and magazines">
                <p class="text-center mt-3"><strong>Q: Which of the following plastic items are recyclable?</strong></p>
                </div>
                <div class="container text-center mb-2">
                <div class="mb-1">
                <cod-button data-id="q5-coffee" data-label="Coffee cups" data-background-color="color-4" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <div class="mb-1">
                <cod-button data-id="q5-envelopes" data-label="Envelopes with plastic windows" data-background-color="color-4" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <div class="mb-1">
                <cod-button data-id="q5-juice" data-label="Orange juice carton" data-background-color="color-4" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <div class="mb-1">
                <cod-button data-id="q5-magazines" data-label="Magazines" data-background-color="color-4" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <div class="mb-1">
                <cod-button data-id="q5-all" data-label="All of the above" data-background-color="color-2" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                <h2 class="text-center pass-q mt-2"><cod-icon data-icon="check-circle" data-size="medium"></cod-icon> That’s correct!</h2>
                <p class="text-center">Note: A variety of paper and cardboard items can be recycled including: cereal boxes, newspaper, magazines, mail, mixed paper, paper cups, and cardboard.
                <br>Please be sure all paper cups and cartons are <strong>empty and clean.</strong> 
                <br><strong>PRO TIP:</strong> Break down your cardboard boxes to save room in your cart! </p>
                </div>
                <div class="container text-center">
                <cod-button data-id="q1-next" data-label="Next" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                `;
                qBtns = shadow.querySelectorAll('cod-button');
                qBtns.forEach((btn)=>{
                    btn.addEventListener('click', (e)=>{
                    console.log(e);
                    if(e.target.getAttribute('data-label') == "Next"){
                        console.log(rc.answers.length);
                        switch (true) {
                            case rc.answers.length < 6:
                                rc.setAttribute('data-step', '37');
                                break;
    
                            case rc.answers.length > 5 && rc.answers.length < 9:
                                rc.setAttribute('data-step', '38');
                                break;
    
                            case rc.answers.length > 7 && rc.answers.length < 11:
                                rc.setAttribute('data-step', '39');
                                break;
                        
                            default:
                                rc.setAttribute('data-step', '40');
                                break;
                        }
                    }
                    })
                });
                break;

            case '36':
                this.appContent.innerHTML = `
                <div class="row">
                <img loading="lazy" style="width: 15em; max-width: 100%; margin:auto;" src="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-03/Question%2012.png" alt="coffee cups, envelopes, juice carton and magazines">
                <p class="text-center mt-3"><strong>Q: Which of the following plastic items are recyclable?</strong></p>
                </div>
                <div class="container text-center mb-2">
                <div class="mb-1">
                <cod-button data-id="q5-coffee" data-label="Coffee cups" data-background-color="color-4" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <div class="mb-1">
                <cod-button data-id="q5-envelopes" data-label="Envelopes with plastic windows" data-background-color="color-4" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <div class="mb-1">
                <cod-button data-id="q5-juice" data-label="Orange juice carton" data-background-color="color-4" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <div class="mb-1">
                <cod-button data-id="q5-magazines" data-label="Magazines" data-background-color="color-4" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                <div class="mb-1">
                <cod-button data-id="q5-all" data-label="All of the above" data-background-color="color-2" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                <h2 class="text-center fail-q mt-2"><cod-icon data-icon="exclamation-circle" data-size="medium"></cod-icon> Wrong! It's all of the above</h2>
                <p class="text-center">Note: A variety of paper and cardboard items can be recycled including: cereal boxes, newspaper, magazines, mail, mixed paper, paper cups, and cardboard.
                <br>Please be sure all paper cups and cartons are <strong>empty and clean.</strong> 
                <br><strong>PRO TIP:</strong> Break down your cardboard boxes to save room in your cart! </p>
                </div>
                <div class="container text-center">
                <cod-button data-id="q1-next" data-label="Next" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                `;
                qBtns = shadow.querySelectorAll('cod-button');
                qBtns.forEach((btn)=>{
                    btn.addEventListener('click', (e)=>{
                    console.log(e);
                    if(e.target.getAttribute('data-label') == "Next"){
                        console.log(rc.answers.length);
                        switch (true) {
                            case rc.answers.length < 6:
                                rc.setAttribute('data-step', '37');
                                break;
    
                            case rc.answers.length > 5 && rc.answers.length < 9:
                                rc.setAttribute('data-step', '38');
                                break;
    
                            case rc.answers.length > 7 && rc.answers.length < 11:
                                rc.setAttribute('data-step', '39');
                                break;
                        
                            default:
                                rc.setAttribute('data-step', '40');
                                break;
                        }
                    }
                    })
                });
                break;

            case '37':
                this.appContent.innerHTML = `
                <div class="row">
                <h2 class="text-center pass-q mt-2">Whoops!</h2>
                <p class="text-center">Your score was ${rc.answers.length}/12</p>
                <p class="text-center">Looks like there is still a lot to learn about recycling.
                <br><strong>Please retake the recycling quiz to receive your free container.</strong></p>
                <div class="container text-center mb-2">
                <cod-button data-id="video-btn" data-label="Rewatch Video" data-background-color="color-3" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                <cod-button data-id="retake-btn" data-label="Retake Quiz" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                <p class="text-center">For additional information, you can download the Recycling Guide below.</p>
                <p class="text-center"><strong><a href="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-02/Recycling_FAQs1_091422.pdf" target="_blank">VIEW OUR CURBSIDE RECYCLING GUIDE</a><br><br>

                <a href="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-02/Recycling_FAQs_SP_092322.pdf" target="_blank">VEA NUESTRA GUÍA DE RECICLAJE EN LA ACERA</a></strong></p>
                <p class="text-center">Visit <a href="http://DetroitRecycles.org" target="_blank" >DetroitRecycles.org</a>
                <br>for more information and resources! </p>
                `;
                qBtns = shadow.querySelectorAll('cod-button');
                qBtns.forEach((btn)=>{
                    btn.addEventListener('click', (e) => {
                        if(e.target.getAttribute('data-label') != null){
                            rc.answers = [];
                            if(e.target.getAttribute('data-label') == 'Retake Quiz'){
                                rc.setAttribute('data-step', '1');
                            }else{
                                rc.setAttribute('data-step', '0');
                            }
                        }
                    });
                });
                break;

            case '38':
                this.appContent.innerHTML = `
                <div class="row">
                <h2 class="text-center pass-q mt-2">Not too shabby!</h2>
                <p class="text-center">Your score was ${rc.answers.length}/12</p>
                </div>
                <div class="container text-center mb-2">
                <cod-button data-primary="true" data-label="Request FREE Cart" data-size="medium" data-background-color="color-3" data-img="" data-img-alt="" data-icon="" data-icon-order="" data-icon-size="" data-hover="true" data-shape="fluid" data-aria-label="" data-disable="false" data-link="http://detroitmi.gov/PublicWorks/recyclingContainerForm" data-id="free-cart"></cod-button>
                <cod-button data-id="retake-btn" data-label="Retake Quiz" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                <ul>
                    <li>Your recycling cart should be delivered to your curb in the next 2-4 weeks.</li>
                    <li>Set out your blue recycling cart every other week, the same week as bulk and yard waste.</li>
                    <li>Check out the <a href="https://detroitmi.gov/webapp/find-your-waste-pickup-schedule" target="_blank">Find Your Waste Pickup Schedule tool</a> to confirm your next pickup date and sign up for text reminders.</li>
                </ul>
                <p class="text-center">For additional information, you can download the Recycling Guide below.</p>
                <p class="text-center"><strong><a href="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-02/Recycling_FAQs1_091422.pdf" target="_blank">VIEW OUR CURBSIDE RECYCLING GUIDE</a><br><br>

                <a href="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-02/Recycling_FAQs_SP_092322.pdf" target="_blank">VEA NUESTRA GUÍA DE RECICLAJE EN LA ACERA</a></strong></p>

                <p class="text-center">Visit <a href="http://DetroitRecycles.org" target="_blank" >DetroitRecycles.org</a>
                <br>for more information and resources! </p>
                `;
                qBtns = shadow.querySelectorAll('cod-button');
                qBtns.forEach((btn)=>{
                    btn.addEventListener('click', (e) => {
                        if(e.target.getAttribute('data-label') != null){
                            rc.answers = [];
                            if(e.target.getAttribute('data-label') == 'Retake Quiz'){
                                rc.setAttribute('data-step', '1');
                            }
                        }
                    });
                });
                break;

            case '39':
                this.appContent.innerHTML = `
                <div class="row">
                <h2 class="text-center pass-q mt-2">Great work!</h2>
                <p class="text-center">Your score was ${rc.answers.length}/12</p>
                </div>
                <div class="container text-center mb-2">
                <cod-button data-primary="true" data-label="Request FREE Cart" data-size="medium" data-background-color="color-3" data-img="" data-img-alt="" data-icon="" data-icon-order="" data-icon-size="" data-hover="true" data-shape="fluid" data-aria-label="" data-disable="false" data-link="http://detroitmi.gov/PublicWorks/recyclingContainerForm" data-id="free-cart"></cod-button>
                <cod-button data-id="retake-btn" data-label="Retake Quiz" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                <ul>
                    <li>Your recycling cart should be delivered to your curb in the next 2-4 weeks.</li>
                    <li>Set out your blue recycling cart every other week, the same week as bulk and yard waste.</li>
                    <li>Check out the <a href="https://detroitmi.gov/webapp/find-your-waste-pickup-schedule" target="_blank">Find Your Waste Pickup Schedule tool</a> to confirm your next pickup date and sign up for text reminders.</li>
                </ul>
                <p class="text-center">For additional information, you can download the Recycling Guide below.</p>
                <p class="text-center"><strong><a href="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-02/Recycling_FAQs1_091422.pdf" target="_blank">VIEW OUR CURBSIDE RECYCLING GUIDE</a><br><br>

                <a href="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-02/Recycling_FAQs_SP_092322.pdf" target="_blank">VEA NUESTRA GUÍA DE RECICLAJE EN LA ACERA</a></strong></p>

                <p class="text-center">Visit <a href="http://DetroitRecycles.org" target="_blank" >DetroitRecycles.org</a>
                <br>for more information and resources! </p>
                `;
                qBtns = shadow.querySelectorAll('cod-button');
                qBtns.forEach((btn)=>{
                    btn.addEventListener('click', (e) => {
                        if(e.target.getAttribute('data-label') != null){
                            rc.answers = [];
                            if(e.target.getAttribute('data-label') == 'Retake Quiz'){
                                rc.setAttribute('data-step', '1');
                            }
                        }
                    });
                });
                break;

            case '40':
                this.appContent.innerHTML = `
                <div class="row">
                <h2 class="text-center pass-q mt-2">You’re a recycling expert!</h2>
                <p class="text-center">Your score was ${rc.answers.length}/12</p>
                </div>
                <div class="container text-center mb-2">
                <cod-button data-primary="true" data-label="Request FREE Cart" data-size="medium" data-background-color="color-3" data-img="" data-img-alt="" data-icon="" data-icon-order="" data-icon-size="" data-hover="true" data-shape="fluid" data-aria-label="" data-disable="false" data-link="http://detroitmi.gov/PublicWorks/recyclingContainerForm" data-id="free-cart"></cod-button>
                <cod-button data-id="retake-btn" data-label="Retake Quiz" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon=""></cod-button>
                </div>
                </div>
                <ul>
                    <li>Your recycling cart should be delivered to your curb in the next 2-4 weeks.</li>
                    <li>Set out your blue recycling cart every other week, the same week as bulk and yard waste.</li>
                    <li>Check out the <a href="https://detroitmi.gov/webapp/find-your-waste-pickup-schedule" target="_blank">Find Your Waste Pickup Schedule tool</a> to confirm your next pickup date and sign up for text reminders.</li>
                </ul>
                <p class="text-center">For additional information, you can download the Recycling Guide below.</p>
                <p class="text-center"><strong><a href="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-02/Recycling_FAQs1_091422.pdf" target="_blank">VIEW OUR CURBSIDE RECYCLING GUIDE</a><br><br>

                <a href="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-02/Recycling_FAQs_SP_092322.pdf" target="_blank">VEA NUESTRA GUÍA DE RECICLAJE EN LA ACERA</a></strong></p>

                <p class="text-center">Visit <a href="http://DetroitRecycles.org" target="_blank" >DetroitRecycles.org</a>
                <br>for more information and resources! </p>
                `;
                qBtns = shadow.querySelectorAll('cod-button');
                qBtns.forEach((btn)=>{
                    btn.addEventListener('click', (e) => {
                        if(e.target.getAttribute('data-label') != null){
                            rc.answers = [];
                            if(e.target.getAttribute('data-label') == 'Retake Quiz'){
                                rc.setAttribute('data-step', '1');
                            }
                        }
                    });
                });
                break;
        
            default:
                break;
        }
    }
}