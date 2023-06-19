let ultimaJogada = 'O';

function marcarJogada(identificador) {
    const quadradoMenor = document.getElementById(identificador);

    const jogada = quadradoMenor.innerHTML;

    if (jogada != "") {
        return;
    }

    if (ultimaJogada == 'O') {
        quadradoMenor.innerHTML = 'X';
        ultimaJogada = 'X';
        return;
    }

    quadradoMenor.innerHTML = 'O';
    ultimaJogada = 'O';
}