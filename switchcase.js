function colorirFundo() { 
    document.body.bgColor ="#ffffff"
    document.body.style.cor ="#000000";
    let txtCorFundo = document.getElementById("txtCorfundo");  
    let corFundo = txtCorFundo.value.toLowerCase();

    switch (corFundo) { 
        case "azul":
            document.body.bgColor = "#0000ff";
            break;
        case "vermelho":
            document.body.bgColor = "#FF0000";
            break;
        case "amarelo":
            document.body.bgColor = "#FFFF00";
            break;
        case "laranja":
            document.body.bgColor = "#FFA500";
            break;
        case "verde":
            document.body.bgColor = "#00FF7F";
            break;
        case "preto":
            document.body.bgColor = "#000000";
            document.body.style.color = "#ffffff";
            break;
        case "violeta":
            document.body.bgColor = "#EE82EE";
            break;
        case "marron":
            document.body.bgColor = "#8B4513";
            break;
        case "roxa":
            document.body.bgColor = "#6A5ACD";
            break;
        case "rosa":
            document.body.bgColor = "#FFC0CB";
            break;
        default:
            document.body.bgColor = "#ffffff";
            break;

    }
}

function colorirTexto() { 
    document.body.style.color ="#000000"; 
    let txtCorTexto = document.getElementById("txtCorTexto");  
    let corTexto = txtCorTexto.value.toLowerCase();

switch (corTexto) { 
    case "azul":
        document.body.bgColor = "#0000ff";
        break;
    case "vermelho":
        document.body.bgColor = "#FF0000";
        break;
    case "amarelo":
        document.body.bgColor = "#FFFF00";
        break;
    case "laranja":
        document.body.bgColor = "#FFA500";
        break;
    case "verde":
        document.body.bgColor = "#00FF7F";
        break;
    case "preto":
        document.body.bgColor = "#000000";
        document.body.style.color = "#ffffff";
        break;
    case "violeta":
        document.body.bgColor = "#EE82EE";
        break;
    case "marron":
        document.body.bgColor = "#8B4513";
        break;
    case "roxa":
        document.body.bgColor = "#6A5ACD";
        break;
    case "rosa":
        document.body.bgColor = "#FFC0CB";
        break;
    default:
        document.body.bgColor = "#ffffff";
        break;

  }
}

document.getElementById("txtCorFundo").addEventListener('keyup', function(event) {
    if (event.keyCode == 13) {
        colorirFundo();
    }
});

document.getElementById("txtCorTexto").addEventListener('keyup', function(event) {
    if (event.keyCode == 13) {
        colorirTexto();
    }
}); 