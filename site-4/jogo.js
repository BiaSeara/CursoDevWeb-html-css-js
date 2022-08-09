let intervalo = null;
$(document).ready(function(){
    //VALIDAÇÃO PARA INICIAR O JOGO
    $("#btn-iniciar").click(function(){
        let jog1 = $("input[name=jog1]").val();
        let jog2 = $("input[name=jog2]").val();

        if (jog1.trim().length > 0 && jog2.trim().length > 0) {
            // SE OS INPUTS NÃO ESTIVEREM VAZIOS, O JOGO COMEÇA
            $('msg').text('');
            ComecarJogo();
        } else {
            $('.msg').text("Nome(s) não preenchidos.")
        }
    })  
    function ComecarJogo() {
        let contadorClicks = 0;

        intervalo = setInterval(tempoDecorrido, 500);

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
                    $('msg').append("<br/> Jogo encerrado.")
                    clearInterval(intervalo);
                }
            }
        })

        //DAQUI EM DIANTE É A PARTE COM PROVÁVEL ERRO
        function VerificarGanhador(){
            let vencedor = [
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

            let X = new Array[9];
            let O = new Array[9];

            $("table td").each(function(key){
                if ($(this).text() == "X") {
                    X[key] = key;
                }
                if ($(this).text() == "O") {
                    O[key] = key;
                }
            })
            return DefinirGanhador(X, O, vencedor);
        }
        
        function DefinirGanhador() {
            for (let i = 0; i < vencedor.length; i++) {
                let contadorX = 0;
                let contadorO = 0;
 
                for (let j = 0; j < vencedor[i].length; j++) {
                    if (X[vencedor[i][j]] == vencedor[i][j]) {
                        contadorX++;
                    }
                    if (O[vencedor[i][j]] == vencedor[i][j]) {
                        contadorO++;
                    }
                    vencedor[i][j]
                }
                if (contadorX == 3) {
                    $('.msg').text('X - ' + jog1 + ' venceu a partida');
                    return true;
                }
                if (contadorO == 3) {
                    $('.msg').text('O - ' + jog2 + ' venceu a partida');
                    return true;
                }
            }
        }
        let inicioJogo = null; 
        function tempoDecorrido(){
            if(inicioJogo == null) {
                inicioJogo = new Date();
            }

            let datAtual = new Date();
            let secInicio = inicioJogo.getSeconds();
            let secAtual = datAtual.getSeconds();
            
            let minInicial = inicioJogo.getMinutes();
            let minAtual = datAtual.getMinutes();

            let hInicio = inicioJogo.getHours();
            let hAtual = datAtual.getHours();


            $('#tempo').text('Início do jogo: '+hInicio+':'+minInicial+':'+secInicio+' - Hora atual: '+hAtual+':'+minAtual+':'+secAtual);
        }
    }
})