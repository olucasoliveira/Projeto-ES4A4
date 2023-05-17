function realizarLogin() {
    // Obtém os valores dos campos de email e senha
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
  
    // Validação básica (email e senha não podem estar vazios)
    if (email === '' || senha === '') {
      document.getElementById('error-message').innerHTML = 'Por favor, preencha todos os campos.';
      return;
    }
  
    // Objeto com os dados a serem enviados para o servidor
    var dados = {
      email: email,
      senha: senha
    };

    // Realizar o cadastro do usuário no banco de dados
    // Implemente a lógica de inserção no banco de dados aqui
  
};

function preencherEndereco() {
    var cep = document.getElementById('cep').value;
    if (cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
          document.getElementById('endereco').value = data.logradouro;
          document.getElementById('bairro').value = data.bairro;
          document.getElementById('uf').value = data.uf;
          document.getElementById('cidade').value = data.localidade;
        })
        .catch(error => {
          console.error('Erro ao obter dados do CEP:', error);
        });
    }
  }

  function cadastrarUsuario() {
    var nome = document.getElementById('nome').value;
    var cpf = document.getElementById('cpf').value;
    var rg = document.getElementById('rg').value;
    var telefone = document.getElementById('telefone').value;
    var cep = document.getElementById('cep').value;
    var endereco = document.getElementById('endereco').value;
    var numero = document.getElementById('numero').value;
    var bairro = document.getElementById('bairro').value;
    var uf = document.getElementById('uf').value;
    var cidade = document.getElementById('cidade').value;

    // Realizar o cadastro do usuário no banco de dados
    // Implemente a lógica de inserção no banco de dados aqui
    
    // Exibir mensagem de sucesso ou erro
    document.getElementById('error-message').innerHTML = 'Usuário cadastrado com sucesso!';
  }

  function cadastrarUsuario() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    // Validar os campos obrigatórios
    if (!nome || !email || !senha) {
      document.getElementById('error-message').innerHTML = 'Por favor, preencha todos os campos.';
      return;
    }

    // Realizar o cadastro do usuário no banco de dados
    // Implemente a lógica de inserção no banco de dados aqui

    // Exibir mensagem de sucesso ou erro
    document.getElementById('error-message').innerHTML = 'Usuário cadastrado com sucesso!';
  }

