

document.getElementById('sidebar').innerHTML = `
        <div class="d-flex w-100">
            <button class="toggle-btn" type="button">
                <svg width="28px" height="28px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5,8H19a1,1,0,0,0,0-2H5A1,1,0,0,0,5,8Zm16,3H3a1,1,0,0,0,0,2H21a1,
                    1,0,0,0,0-2Zm-2,5H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z" fill="#0d6efd"/></svg>
            </button>
        </div>
        <ul class="sidebar-nav">
            <li class="sidebar-item">
                <a href="./admin.html" class="sidebar-link">
                    <svg width="28px" height="28px" data-name="Layer 1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,19a1,1,0,1,0-1-1A1,1,0,0,0,12,19Zm5,
                        0a1,1,0,1,0-1-1A1,1,0,0,0,17,19Zm0-4a1,1,0,1,0-1-1A1,1,0,0,0,17,15Zm-5,0a1,1,0,1,0-1-1A1,1,0,0,0,12,15ZM19,3H18V2a1,1,0,0,0-2,0V3H8V2A1,1,
                        0,0,0,6,2V3H5A3,3,0,0,0,2,6V20a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V6A3,3,0,0,0,19,3Zm1,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V11H20ZM20,9H4V6A1,
                        1,0,0,1,5,5H6V6A1,1,0,0,0,8,6V5h8V6a1,1,0,0,0,2,0V5h1a1,1,0,0,1,1,1ZM7,15a1,1,0,1,0-1-1A1,1,0,0,0,7,15Zm0,4a1,1,0,1,0-1-1A1,1,0,0,0,7,19Z" 
                        fill="#0d6efd"/></svg>
                    <span>Agenda</span>
                </a>
            </li>
            <li class="sidebar-item">
                <a href="./funcionarios.html" class="sidebar-link">
                    <svg width="28px" height="28px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.3,12.22A4.92,4.92,0,0,0,14,8.5a5,5,0,0,0-10,0,4.92,4.92,0,0,
                        0,1.7,3.72A8,8,0,0,0,1,19.5a1,1,0,0,0,2,0,6,6,0,0,1,12,0,1,1,0,0,0,2,0A8,8,0,0,0,12.3,12.22ZM9,
                        11.5a3,3,0,1,1,3-3A3,3,0,0,1,9,11.5Zm9.74.32A5,5,0,0,0,15,3.5a1,1,0,0,0,0,2,3,3,0,0,1,3,3,3,3,0,0,1-1.5,2.59,1,1,0,0,0-.5.84,1,1,0,0,0,
                        .45.86l.39.26.13.07a7,7,0,0,1,4,6.38,1,1,0,0,0,2,0A9,9,0,0,0,18.74,11.82Z" fill="#0d6efd"/></svg>
                    <span>Funcionários</span>
                </a>
            </li>
            <li class="sidebar-item">
                <a href="./clientes.html" class="sidebar-link">
                <?xml version="1.0" ?>
                <svg width="28px" height="28px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21,10.5H20v-1a1,1,0,0,0-2,0v1H17a1,1,0,0,0,0,2h1v1a1,1,0,0,0,2,
                0v-1h1a1,1,0,0,0,0-2Zm-7.7,1.72A4.92,4.92,0,0,0,15,8.5a5,5,0,0,0-10,0,4.92,4.92,0,0,0,1.7,3.72A8,8,0,0,0,2,19.5a1,1,0,0,0,2,0,6,6,0,0,1,12,0,1,1,0,0,0,2,0A8,
                8,0,0,0,13.3,12.22ZM10,11.5a3,3,0,1,1,3-3A3,3,0,0,1,10,11.5Z" fill="#0d6efd"/></svg>
                    <span>Clientes</span>
                </a>
            </li>
        </ul>
        <div class="sidebar-footer">
            <a href="./index.html" class="sidebar-link">
                <svg width="28px" height="28px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,
                    1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,
                    5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,
                    0,17,2Z" fill="#0d6efd"/></svg>
                <span>Sair</span>
            </a>
        </div>
        
` ;
const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
    document.querySelector("#sidebar").classList.toggle("expand");
});
