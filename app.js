//Challenge Amigo Secreto

// Lista de Amigos

let listaAmigos = [];

// Funciones de Apoyo

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""

    for (let i = 0; i < listaAmigos.length; i++){
        let li = document.createElement("li");
        li.textContent = listaAmigos[i];
        lista.appendChild(li);
    }
    return lista.length;
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
    if (listaAmigos.length === 0) {
        alert("No hay amigos registrados para sortear.");
        return;
    }

    let numeroAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[numeroAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}
