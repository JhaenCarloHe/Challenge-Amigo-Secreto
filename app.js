//Challenge Amigo Secreto

// Lista de Amigos

let listaAmigos = [];

// Funciones de Apoyo

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

function deshabilitarElemento(elemento){
    document.getElementById(elemento).disabled = true;
}

function habilitarElemento(elemento){
    document.getElementById(elemento).disabled = false;
}


function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""

    for (let i = 0; i < listaAmigos.length; i++){
        let li = document.createElement("li");
        li.textContent = listaAmigos[i];
        lista.appendChild(li);
    }
    return listaAmigos.length;
}

// Lógica del juego

function agregarAmigo() {

    let amigoIngresado = document.getElementById('amigo').value;
    
    if(amigoIngresado.trim() === "") {
        alert("Por favor, inserte un nombre.")
    } else {
        listaAmigos.push(amigoIngresado);
        limpiarCaja();
        actualizarLista();
        
    }
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Debe registrar mínimo a dos amigos para sortear.");
        return;
    }

    let numeroAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[numeroAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `🎉 El amigo secreto es:${amigoSorteado}`;
    deshabilitarElemento('amigo');
    deshabilitarElemento('botonSortear');
    deshabilitarElemento('añadir');
}

function reiniciarJuego() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    listaAmigos = [];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    habilitarElemento('amigo');
    habilitarElemento('botonSortear');
    habilitarElemento('añadir');
    limpiarCaja();
}