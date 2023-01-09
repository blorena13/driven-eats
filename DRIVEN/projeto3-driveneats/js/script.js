function toggleSelecionar(opcaoselecionada){
    const selecionado = opcaoselecionada.parentElement.querySelector(".selecionado");

    if (selecionado !== null) {
        selecionado.classList.remove("selecionado")
    } if (opcaoselecionada === selecionado){
        opcaoselecionada.classList.remove("selecionado");
    } else {
        opcaoselecionada.classList.add('selecionado');

    }
    
}


function continuar() {
    const comida = document.querySelector(".comida .selecionado");
    const bebida = document.querySelector(".bebida .selecionado");
    const sobremesa = document.querySelector(".opcoes .selecionado");
    const botao = document.querySelector(".pedido");

    console.log(botao);

    if ( comida !== "" && bebida !== "" && sobremesa !== ""){
        continuar();
        botao.classList.add(".continuar-selecionado");
        botao.disabled = false;
    } else {
        botao.desabled = true;
    }
}