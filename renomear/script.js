document.getElementById('acabou').addEventListener('click', function () {
    const lista = document.getElementById('listaParticipantes');
    lista.innerHTML = '';
    participantes.forEach(participante => {
        const li = document.createElement('li');
        li.textContent = `Nome: ${participante.nome}  , Prticipantes: ${participante.particpantes}`;
        lista.appendChild(li);
    });
});



const participantes = [];

document.getElementById('registroform').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    if (nome && cpf && email) {
        participantes.push({ nome, cpf, email });
        document.getElementById('nome').value = '';
        document.getElementById('cpf').value = '';
        document.getElementById('particpantes').value = '';
        alert('Participante registrado com sucesso"!');
    } else {
        alert('Preencha todos os campos!');
    }
});

document.getElementById('acabou').addEventListener('click', function () {
    const lista = document.getElementById('listaParticipantes');
    lista.innerHTML = '';
    participantes.forEach(participante => {
        const li = document.createElement('button');
        li.textContent = `Nome: ${participante.nome} , CPF: ${participante.cpf} , Prticipantes: ${participante.particpantes}`;
        lista.appendChild(li);
    });
});
