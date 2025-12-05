function cadastrarUsuario() {
    const nomeInput = document.getElementById('nome');
    const dataNascInput = document.getElementById('dataNasc');
    const ruaInput = document.getElementById('rua');
    const numeroInput = document.getElementById('numero');
    const cidadeInput = document.getElementById('cidade');
    const ufInput = document.getElementById('uf');
    const resultadoP = document.getElementById('resultado');

    const nome = nomeInput.value;
    const dataNasc = dataNascInput.value; // Formato: AAAA-MM-DD
    const rua = ruaInput.value;
    const numero = numeroInput.value;
    const cidade = cidadeInput.value;
    const uf = ufInput.value;

    const dataFormatada = new Date(dataNasc).toLocaleDateString('pt-BR', { timeZone: 'UTC' });

    const frase = `${nome} nasceu no dia ${dataFormatada} e mora na rua ${rua}, número ${numero}, na cidade de ${cidade} do estado ${uf}.`;

    resultadoP.innerText = frase;

    resultadoP.style.color = 'green';
    resultadoP.style.fontSize = '24px';
}