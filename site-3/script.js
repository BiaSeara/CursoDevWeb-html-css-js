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

//se o input foi preenchido, ou seja, diferente de undefined
if (document.forms["modal-form"] != undefined) {
    var form = document.forms["modal-form"];

    // adicionar evento de envio.
    form.addEventListener("submit", validarForm);
}

function validarForm (evento) {
    // validação do form.
    var form = document.forms["modal-form"];

    var valorEmail = form.email.value; //valor = o que está escrito no input.

    var posicaoArroba = valorEmail.indexOf("@"); //indexOf está buscando uma string com o valor @, busacando a posição.
    
    if (valorEmail != "" /*string vazia*/ && valorEmail.indexOf("@") > 3 /*a posição do arroba é maior que 3*/ && valorEmail.lastIndexOf(".") > posicaoArroba /*a última ocorrência da ponto está depois do arroba*/) {
        alert ("E-mail válido.");
    } else {
        alert ("E-mail inválido.");
        evento.preventDefault(); //isso evitará que, caso seja um email inválido, após a aparição do span, envie para uma outra pagina. 
    }
}