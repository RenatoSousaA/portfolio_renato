function enviaEmail() {
    const nome = document.getElementById('nome-contato').value;
    const assunto = document.getElementById('assunto-contato').value;
    const email = document.getElementById('email-contato').value;
    const mensagem = document.getElementById('mensagem-contato').value;

    document.getElementById('modal').style.display = 'block'
    document.getElementById('modal-alert').style.display = 'block'

    if (nome != '' && assunto != '' && email != '' && mensagem != '') {
        envioOk();
    } else {
        clearModal();
        document.getElementById('message-error').innerText = 'Preencha todos os campos!';
        document.getElementById('error-icon').style.display = 'block';
    }

}

function envioOk() {
    clearModal();
    document.getElementById('load-icon').style.display = 'block'

    const msg = {
        from: "renato.sousa@assessoria.app",
        to: "renato.sousainfo@gmail.com",
        subject: assunto,
        text: `
            Enviado por: ${nome}
            E-mail : ${email}

            Mensagem: ${mensagem}
        `
    }

    fetch(
        'https://fiap-sender.herokuapp.com/email/send', {
            method: 'POST',
            headers: {
                'Accept': 'aplication/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(msg)
        }
    ).then(data => {
        limpaCampos()
        clearModal();
        document.getElementById('success-error').innerText = 'E-mail enviado com sucesso!';
        document.getElementById('success-icon').style.display = 'block';
    }).catch(err => {
        clearModal();
        document.getElementById('message-error').innerText = 'Ocorreu algum erro durante o envio, tente novamente!';
        document.getElementById('error-icon').style.display = 'block';
    })
}

function limpaCampos() {
    document.getElementById('nome-contato').value = '';
    document.getElementById('assunto-contato').value = '';
    document.getElementById('email-contato').value = '';
    document.getElementById('mensagem-contato').value = '';
}

function clearModal() {
    var displaysModal = document.getElementsByClassName('displays-modal');

    for (var i = 0; i != displaysModal.length; ++i) {
        displaysModal[i].style.display = 'none';
    }
}

function fecharModal() {
    limpaCampos()
    document.getElementById('modal').style.display = 'none'
    document.getElementById('modal-alert').style.display = 'none'
}