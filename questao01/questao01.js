function inserirTitulo() {
    const inputElement = document.getElementById('txt-titulo');
    const textoDigitado = inputElement.value;

    const tituloElement = document.getElementById('titulo');

    tituloElement.innerText = textoDigitado;
    tituloElement.style.color = 'blue';
}