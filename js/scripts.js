const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });

});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

function criarTabela(dadosJSON) {
    // Transforma em um objeto javascript
    const dados = JSON.parse(dadosJSON);
  
    // Cria a estrutura da tabela HTML
    const tabela = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
  
    // Cria a linha de cabeçalho da tabela
    const cabecalho = thead.insertRow();
    const colunas = Object.keys(dados[0]); // Obter nomes das propriedades do primeiro objeto
  
    cabecalho.innerHTML = colunas.map(coluna => `<th>${coluna}</th>`).join('');
  
    // Cria as linhas de dados da tabela
    dados.forEach(linhaDados => {
      const linha = tbody.insertRow();
      colunas.forEach(coluna => {
        const valor = linhaDados[coluna];
        const celula = linha.insertCell();
        celula.textContent = valor;
      });
    });
  
    // Adiciona o cabeçalho e o corpo à tabela
    tabela.appendChild(thead);
    tabela.appendChild(tbody);
  
    // Retorna a tabela
    return tabela;
  }