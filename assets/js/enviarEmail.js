function enviaEmail() {
    const nome = document.getElementById('nome-contato').value;
    const assunto = document.getElementById('assunto-contato').value;
    const email = document.getElementById('email-contato').value;
    const mensagem = document.getElementById('mensagem-contato').value;

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
        'https://fiap-sender.herokuapp.com/email/send',
        {
            method: 'POST',
            headers: {
                'Accept': 'aplication/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(msg)
        }
    ).then(data => {
        limpaCampos()
    }).catch(err => {

    })
}

function limpaCampos() {
    document.getElementById('nome-contato').value = '';
    document.getElementById('assunto-contato').value = '';
    document.getElementById('email-contato').value = '';
    document.getElementById('mensagem-contato').value = '';
}