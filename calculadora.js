// TO DO: boton borrar pantalla
//Hacer un try catch para manejar la exepcion de expresion no validad;
//Hacer commit y subir cambios al repositorio remoto

var botones = ["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "0", ".", "=", "/", "C"]
let numero = new RegExp("[0-9]");
let operacion = [];
let lastEquals = false;

function renderizarGUI() {
    //Div Calculadora
    const divCalculadora = document.createElement("div")
    divCalculadora.setAttribute("id", "calculadora");
    divCalculadora.setAttribute("class", "text-center");
    divCalculadora.setAttribute("style", "width:40%; margin:0 auto;");
    document.body.appendChild(divCalculadora);

    //Div Pantalla
    const divPantalla = document.createElement("div");
    divPantalla.setAttribute("id", "divPantalla");
    divCalculadora.appendChild(divPantalla);

    //Pantalla
    const pantalla = document.createElement("input");
    pantalla.setAttribute("id", "pantalla");
    pantalla.setAttribute("type", "text");
    pantalla.setAttribute("value", "0");
    pantalla.setAttribute("disabled", "true");
    pantalla.setAttribute("class", "form-control text-right mb-2");
    divPantalla.appendChild(pantalla);


    //Div Botones
    const divBotones = document.createElement("div")
    divBotones.setAttribute("id", "botones");
    divCalculadora.appendChild(divBotones);

    for (let i = 0; i < botones.length; i++) {

        //Crer filas
        if (i % 4 === 0) {
            const divFila = document.createElement("div")
            divFila.setAttribute("class", "row m-0");
            divBotones.appendChild(divFila);
        }

        const boton = document.createElement("button")
        boton.setAttribute("id", "botones" + botones[i]);
        if (botones[i] === 'C') {
            boton.setAttribute("class", "btn btn-danger col-12 border-white")
        } else if (!numero.test(botones[i])) {
            boton.setAttribute("class", "btn btn-success col-3 border-white")
        } else {
            boton.setAttribute("class", "btn btn-primary col-3 border-white")
        }

        boton.innerHTML = botones[i]
        //Agregar listener "Escuchador de eventos" al boton
        boton.addEventListener("click", function () {
            procesarEvento(boton);
        })
        divBotones.lastChild.appendChild(boton);

    }
}

function procesarEvento(boton) {

    let valor;

    let mipantalla = document.getElementById("pantalla")

    if (operacion.length === 0 && boton.innerHTML === "0") { return mipantalla.value = "0"; }

    if (operacion.length === 0 && (boton.innerHTML > "0" || boton.innerHTML < "0")) {
        mipantalla.value = "";
    }

    if (operacion.length === 0 && !numero.test(boton.innerHTML) && boton.innerHTML != "C") {
        controlarOperadores(boton);
        return
    }

    if (boton.innerHTML === "C") { borrarPantalla(); return }

    if (boton.innerHTML != "=" && boton.innerHTML != "C") {

        if (lastEquals && (numero.test(boton.innerHTML) || boton.innerHTML === ".")) {
            lastEquals = false;
            return mipantalla.value = boton.innerHTML;
        }
        lastEquals = false;

        if (numero.test(boton.innerHTML)) {
            valor = parseInt(boton.innerHTML)
        } else {
            valor = boton.innerHTML;
        }

        if (operacion.length > 0 && !numero.test(boton.innerHTML) && !numero.test(operacion[operacion.length - 1])) {
            console.log('hola -> ' + valor);
            mipantalla.value = valor;
            return
        }
        mipantalla.value += valor;
        operacion.push(boton.innerHTML);

    } else {
        try {
            let resultado = math.evaluate(mipantalla.value);
            mipantalla.value = resultado
            lastEquals = true;
        } catch (error) {
            console.log('Este es el error-> ', error);
            mipantalla.value = "0"
        }
    }
}

function borrarPantalla() {
    let mipantalla = document.getElementById("pantalla")
    operacion = [];
    mipantalla.value = "0";
}

function controlarOperadores(boton) {
    let mipantalla = document.getElementById("pantalla")
    operacion.push("0");
    operacion.push(boton.innerHTML);
    mipantalla.value = operacion.join('');
}

renderizarGUI();