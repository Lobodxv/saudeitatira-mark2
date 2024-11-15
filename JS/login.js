const body = document.getElementById('body'); // Body 
const botao = document.getElementById('login'); // Botão de login
const form = document.getElementById('form'); // Card de formulário


form.classList.add('light'); // Define a classe do card como light
function contrast(){ // Função que alterna a página em modo dark e light
  if(body.style.backgroundColor === 'black'){
    body.style.backgroundColor = 'white';
  } else {
    body.style.backgroundColor = 'black';
  }

  if(body.style.backgroundColor === 'black'){
    form.classList.remove('light'); // Remove a classe 'dark' no formulário
    form.classList.add('dark'); // Adiciona a classe 'dark' no formulário
  } else{
    form.classList.remove('dark'); // Remove a classe 'dark' do formulário
    form.classList.add('light'); // Adiciona a tag 'light' no formulário
  }
}