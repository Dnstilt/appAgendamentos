document.getElementById('headerPrincipal').innerHTML = `
        <div class="container "> 
            <div class="row">
                <div class="d-inline-flex align-items-center col-sm-12 col-md-4">
                    <a href="#">
                        <img class="logoHd" src="./img/logo.png" style="width: 32px; height: 32px; vertical-align: unset;" alt="logo hora decidida"/>
                    </a>                
                    <a href="./index.html" class="logo fs-1 text ms-2" style="font-family: Kanit, sans-serif; text-decoration: none; text-shadow: -1px -1px 3px rgba(0, 0, 0, 0.24);">
                        Hora decidida
                    </a>
              </div>
              <div class="d-flex flex-row-reverse align-items-center col-sm-12 col-md-4 align-content-center">
                  
              </div>    
              <div class="d-flex flex-row-reverse align-items-center col-sm-12 col-md-4 ">
                  <button type="button" class="d-flex align-items-center btn btn-md btn-primary rounded-pill" data-bs-toggle="modal" data-bs-target="#myModal">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"/>
                      <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                      </svg>
                      &nbspEntrar
                  </button>
                  <ul class="nav">
                      <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Entre em contato 0800-546-1525</a></li>
                  </ul>
              </div>
            </div>
        </div>
       
        <!-- modal -->
        <div class="modal fade" id="myModal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content rounded-4 shadow">
                    <div class="modal-header p-5 pb-0 border-bottom-0 justify-content-center">
                        <p class="h1 fw-bold mb-0 fs-2">Entrar</p>
                    </div>
                    <!-- Modal body -->
                    <div class="modal-body pt-3 pb-4">
                        <div class="container">
                            <form class="needs-validation" novalidate>
                                <div class="form mb-3" >
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" class="form-control pd-3 rounded-3" id="email" placeholder="name@example.com" required>
                                    <div class="invalid-feedback"> nome@email.com</div>
                                </div>
                                <div class="form mb-3">
                                    <label for="senha" class="form-label">Senha</label>
                                    <input type="password" class="form-control rounded-3" id="senha" placeholder="coloque sua senha aqui." required>
                                    <div class="invalid-feedback">Sua senha deve conter pelo menos 8 caracteres</div>
                                </div>
                                <!--                            <button class="btn btn-primary" type="submit">Submit form</button>-->
                                <a class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit" href="./funcionario.html">Entrar</a>
                                <p class="text-center">Clicando em entrar você concorda com os termos de uso e com nossa política de privacidade</p>
                                <hr class="my-4">
                                <h2 class="fs-5 fw-bold mb-3"></h2>

                                <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#myModal1">Recuperar senha</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 `;