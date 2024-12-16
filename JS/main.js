
// Script para alternar a página entre modo dark e modo light.
const body = document.getElementById('body');

function alterarModo(){
  if(body.style.backgroundColor === 'black'){
    body.style.backgroundColor = 'white';
  }else{
    body.style.backgroundColor = 'black';
  }
}