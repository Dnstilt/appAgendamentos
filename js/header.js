class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
            .header {
                display: flex;
                align-items: center;
                justify-content: space-around;
                background-image: url("../img/stardust.png");
                background-color: #02093b;
                background-repeat:repeat;
                margin-bottom: 50px; 
                
            }
            .logo {
                max-width: 300px;
                margin-left: 15px;
          
            }
            .menus {
                font-family: 'Mulish', sans-serif;
                display: grid;
                column-gap: 10px;
                grid-template-columns: 100px 100px 100px 100px 100px 100px;
                padding: 10px;
                text-align: center;                
            }
            .menu:hover {
                font-weight: bold;
                transform: scale(1.2);
                opacity: 2;               
            }
        </style>
        <header>
            <div class="header">
                <img class="logo" src="../img/logo.png" alt="Agendador.me">
                <div class="menus">
                    <div class="menu"><a href="../usuarios.html">Usuários</a></div>
                    <div class="menu"><a href="../empresas.html">Empresas</a></div>
                    <div class="menu"><a href="../atendedores.html">Atendedores</a></div>  
                    <div class="menu"><a href="../atendidos.html">Atendidos</a></div> 
                    <div class="menu"><a href="../horarios.html">Horários</a></div>  
                    <div class="menu"><a href="../eventos.html">Eventos</a></div> 
                </div>
            </div>   
        </header>
    `;
    }
}
customElements.define('header-component', Header);