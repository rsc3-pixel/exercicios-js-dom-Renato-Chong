function mudarForma() {
    const formaElement = document.getElementById('forma');
    const botaoElement = document.getElementById('btn-forma');

    if (formaElement.style.borderRadius === '50%') {
        formaElement.style.borderRadius = '0%';
        botaoElement.innerText = 'Retornar forma original';
    } else {
        formaElement.style.borderRadius = '50%';
        botaoElement.innerText = 'Mudar forma';
    }
}