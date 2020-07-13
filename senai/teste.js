const $vermelho = document.getElementById('vermelho');
const $teste = document.getElementById('teste');

function mudarCor () {
    $teste.style.backgroundColor = 'red';
}

$vermelho.addEventListener('click', mudarCor);