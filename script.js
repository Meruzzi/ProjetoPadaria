btnNav.onclick = () => {
    if (navBar.classList.contains("ativo")) {
    navBar.classList.remove("ativo");
    } else {
    navBar.classList.add("ativo")
    }
}

function escolhaPaoClaro() {
        paoEscolhido.innerText = "Claro"
}
function escolhaPaoMoreno() {
        paoEscolhido.innerText = "Moreno"
}

let minFornada = 12
let segFornada = 49
function temporizadorFornada() {
    segFornada--;
    if (segFornada === 0) {
        minFornada--
        segFornada = 59
    }

    if (segFornada === 0 || minFornada === 0) {
    document.getElementById("tempoAproxFornada").innerHTML = "Fornada pronta!"
    }

    document.getElementById("minFornada").innerHTML = minFornada
    document.getElementById("segFornada").innerHTML = segFornada
}
setInterval(temporizadorFornada, 1000)