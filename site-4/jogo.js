$(document).ready(function(){
    //VALIDAÇÃO PARA INICIAR O JOGO
    $("#btn-iniciar").click(function(){
        var jog1 = $("input[name=jog1]").val();
        var jog2 = $("input[name=jog2]").val();

        if (jog1.trim().length > 0 && jog2.trim().length > 0) {
            // SE OS INPUTS NÃO ESTIVEREM VAZIOS, O JOGO COMEÇA
            ComecarJogo();
        } else {
            alert("Nome(s) não preenchidos.")
        }
    })  
    function ComecarJogo() {
        var contadorClicks = 0;

        $("table td").click(function(){
            contadorClicks++;

            if (contadorClicks <= 9) {
                if(contadorClicks % 2 == 0) {
                    //PAR
                    $(this).text("O")
                } else {
                    //IMPAR
                    $(this).text("X")
                }
                
                if (VerificarGanhador == true) {
                    contadorClicks = 9;
                }
                if (contadorClicks == 9) {
                    $("#mensagem").text("Jogo encerrado.")
                }
            }
        })

        //DAQUI EM DIANTE É A PARTE COM PROVÁVEL ERRO
        function VerificarGanhador(){
            var vencedor = [
                //LINHAS
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                //COLUNAS
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                //DIAGONAIS
                [0, 4, 8],
                [2, 4, 6]
            ];
            var X = new Array(9);
            var O = new Array(9);
            $("table td").each(function(key){
                if ($(this).text() == "X") {
                    X[key] = key;
                }
                if ($(this).text() == "O") {
                    O[key] = key;
                }
            })

            for (var i = 0; i < vencedor.length; i++) {
               var contadorX = 0;
               var contadorO = 0;

                for (var j = 0; j < vencedor[1]; j++) {
                    if (X[vencedor[i][j]] == vencedor[i][j]) {
                        contadorX++;
                    }
                    if (O[vencedor[i][j]] == vencedor[i][j]) {
                        contadorO++;
                    }
                    vencedor[i][j]
                }
                if (contadorX == 3) {
                    alert("X venceu");
                    return true;
                }
                if (contadorO == 3) {
                    alert("O venceu");
                    return true;
                }
            }
        }
    }
})