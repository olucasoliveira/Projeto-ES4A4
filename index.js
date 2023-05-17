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
  
   