/* APRESENTAÇÃO MODAL | PÁGINA INICIAL */

// o modal irá mostrar depois de 5s.
setTimeout (MostrarModal, 5000);
function MostrarModal () {
    var modal = document.querySelector(".modal");

    if (modal != null) {
        // no css o display do modal estava 'none', aqui eu chamei o modal, usando o query, e coloquei para ele aparecer com o dispay 'block'.
        document.querySelector(".modal").style.display = "block";
    
        // nessa parte localizei a âncora do modal com o seletor query, adicionei o evento de click, e criei outra função colocando o display 'none' novamente.
        document.querySelector(".modal a").addEventListener("click", function () {
            document.querySelector(".modal").style.display = "none";
        })
    }
}

/* VALIDAÇÃO MODAL | PÁGINA INICIAL */

//se o input foi preenchido, ou seja, diferente de undefined
if (document.forms["modal-form"] != undefined) {
    var form = document.forms["modal-form"];

    // adicionar evento de envio.
    form.addEventListener("submit", validarForm);

    form.email.addEventListener("keypress" /*key+press*/, function () {
        form.email.className = ""; //aqui remove a classe de nao-valido do form, quando começar a digitar.

        document.querySelector("span.nao-valido").style.display = "none";
    })
}

function validarForm (evento) {
    // validação do form.
    var form = document.forms["modal-form"];

    //o que está escrito no input.
    var inputEmail = form.email;
    var valorEmail = form.email.value; 

    var posicaoArroba = valorEmail.indexOf("@"); //indexOf está buscando uma string com o valor @, busacando a posição.
    
    if (!ValidarEmail (valorEmail)) {
        inputEmail.className = "nao-valido"; //aqui adicionei a classe nao-valido ao input.

        document.querySelector("span.nao-valido").style.display = "block"; //mostrará o span quando o email não for válido.

        evento.preventDefault(); //isso evitará que, caso seja um email inválido, após a aparição do span, envie para uma outra pagina. 
    }
}

/* VALIDAÇÃO FORM | PÁGINA FALE CONOSCO */
if (document.forms["form-cont"] != undefined) {
    var form = document.forms["form-cont"];

    form.addEventListener("submit", function (evento) {
        var formValido = true;

        if (!NaoVazio(form.nome.value)) {
            form.nome.className = "nao-valido";
            formValido = false;
        }

        if (!NaoVazio(form.telefone.value)) {
            form.telefone.className = "nao-valido";
            formValido = false;
        }

        if (!ValidarEmail(form.email.value)) {
            form.email.className = "nao-valido";
            formValido = false;
        }

        if (!NaoVazio(form.mensagem.value)) {
            form.mensagem.className = "nao-valido";
            formValido = false;
        }


        if (!formValido) {
            evento.preventDefault();
        }
    });
}


/* FUNÇÕES */
function ValidarEmail (valorEmail) {
    if (valorEmail != "" /*string vazia*/ && valorEmail.indexOf("@") > 3 /*a posição do arroba é maior que 3*/ && valorEmail.lastIndexOf(".") > posicaoArroba /*a última ocorrência da ponto está depois do arroba*/) {
        return true;
    } else {
        return false;
    }
}

function NaoVazio (texto) {
    if (texto.trim().length > 0) {
        return true; // trim = remove os espaçoes em branco.
    } else {
        return false;
    }
}