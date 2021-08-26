/*

Turma: 01
Grupo: 05
Integrantes: Belicio Cardoso, Márcio Silva, Fábio Augusto, Amanda Jesus, Lucas Bernardo e Felipe Cabuto

*/

// Menu do micro onda!!!
// Digite 1 - Pipoca – 10 segundos (padrão)
// Digite 2 - Macarrão – 8 segundos (padrão)
// Digite 3 - Carne – 15 segundos (padrão)
// Digite 4 - Feijão – 12 segundos (padrão)
// Digite 5 - Brigadeiro – 8 segundos (padrão)

menu(2); //Primeiro parâmetro é o tipo do comida, segundo é o tempo e se escolher so o primeiro parâmetro o tempo é padrão

function menu(digitado, tempo) {

    if (digitado >= 1 && digitado <= 5) {

        let tipo = parseInt(digitado);

        switch (tipo) {
            case 1:
                pipoca(tempo);
                break;
            case 2:
                macarrao(tempo);
                break;
            case 3:
                carne(tempo);
                break;
            case 4:
                feijao(tempo);
                break;
            case 5:
                brigadeiro(tempo);
        }
    } else {
        console.log("Prato inexistente");
    }
}

function pipoca(tempo) {
    let tempoPadrao = 10;
    return verificarTempo(tempoPadrao, tempo);
}

function macarrao(tempo) {
    let tempoPadrao = 8;
    return verificarTempo(tempoPadrao, tempo);
}

function carne(tempo) {
    let tempoPadrao = 15;
    return verificarTempo(tempoPadrao, tempo);
}

function feijao(tempo) {
    let tempoPadrao = 12;
    return verificarTempo(tempoPadrao, tempo);
}

function brigadeiro(tempo) {
    let tempoPadrao = 8;
    return verificarTempo(tempoPadrao, tempo);
}

function verificarTempo(tempoPadrao, tempo) {

    if (tempo < tempoPadrao) {
        console.log("tempo insuficiente")
    }
    else if (tempo >= 3 * tempoPadrao) {
        console.log("kabumm")
    }
    else if (tempo >= 2 * tempoPadrao) {
        console.log("A comida queimou")
    }
    else {
        console.log("Prato pronto, bom apetite!!!")
    }
}
