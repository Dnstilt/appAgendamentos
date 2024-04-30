class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
            footer {
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                
                /*padding-top: 10px;*/
                padding-bottom: 20px;
                font-size: 14px;
                color: white;
                left: 0;
                bottom: 0;
                width: 100%;
                opacity: 0.9;    
                background-color: #545454;                            
            }
            .pfooter {
                margin-bottom: -8px;
            }
        </style>
<!--        <footer>-->
<!--            <div>-->
<!--                <p class="pfooter">Instituição: Centro Universitário UniSENAI</p>-->
<!--                <p class="pfooter">Disciplina: Projeto Aplicado II</p>-->
<!--                <p class="pfooter">Ano/Semestre: 2024/1</p>-->
<!--                <p class="pfooter">Professor: ..</p>-->
<!--            </div>-->
<!--            <div>-->
<!--                <p class="pfooter">Aluno 1</p>-->
<!--                <p class="pfooter">Aluno 2</p>-->
<!--                <p class="pfooter">Aluno 3</p>-->
<!--                <p class="pfooter">Aluno 4</p>-->
<!--            </div>-->
<!--        </footer>-->
    `;
    }
}

customElements.define('footer-component', Footer);