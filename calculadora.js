function renderizarGUI() {
        //Div Calculadora
    const divCalculadora= document.createElement("div")
    divCalculadora.setAttribute("id", "calculadora");
    divCalculadora.setAttribute("class", "text-center")
    divCalculadora.setAttribute("style", "width:50%; margin:0 auto;")
    document.body.appendChild(divCalculadora);

    //Div Pantalla
    const divPantalla= document.createElement("div")
    divPantalla.setAttribute("id", "divPantalla");
    divCalculadora.appendChild(divPantalla);

    //Pantalla
    const pantalla= document.createElement("input")
    pantalla.setAttribute("id", "pantalla");
    pantalla.setAttribute("type", "text");
    pantalla.setAttribute("value", "0");
    pantalla.setAttribute("disabled", "true");
    pantalla.setAttribute("class", "form-control text-right")
    divPantalla.appendChild(pantalla);






    //Div Botones
    const divBotones= document.createElement("div")
    divBotones.setAttribute("id", "botones");
    divCalculadora.appendChild(divBotones);

}

renderizarGUI();