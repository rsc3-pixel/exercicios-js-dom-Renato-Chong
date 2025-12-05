function validarFormulario() {
    const nomeInput = document.getElementById('nome');
    const cpfInput = document.getElementById('cpf');
    const mensagemP = document.getElementById('mensagem');

    const nome = nomeInput.value.trim();
    const cpf = cpfInput.value.trim();

    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

    if (nome === '' || cpf === '') {
        mensagemP.innerText = 'Os campos Nome e CPF são obrigatórios.';
        mensagemP.style.color = 'red';
    } else if (!cpfRegex.test(cpf)) {
        mensagemP.innerText = 'CPF inválido! Use o formato 000.000.000-00.';
        mensagemP.style.color = 'red';
    } else {
        mensagemP.innerText = 'Cadastro validado com sucesso!';
        mensagemP.style.color = 'green';
    }
}
