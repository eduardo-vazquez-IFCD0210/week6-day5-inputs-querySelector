function confirmarTicket() {
    const inputs = document.querySelectorAll("input")
    const impresiones = document.querySelectorAll(".impresion")

    document.querySelector("#cliente-impresion").innerText = document.querySelector("#cliente").value;
    document.querySelector("#fecha-impresion").innerText = document.querySelector("#fecha").value;
    document.querySelector("#hora-impresion").innerText = document.querySelector("#hora").value;
    document.querySelector("#fila-impresion").innerText = document.querySelector("#fila").value;
    document.querySelector("#butaca-impresion").innerText = document.querySelector("#butaca").value;

    inputs.forEach(input => {
        input.style.display = "none"
    })
    impresiones.forEach(impresion => {
        impresion.style.display = "flex"
    })  
    
}

function editar() {
    const inputs = document.querySelectorAll("input")
    const impresiones = document.querySelectorAll(".impresion")

    document.querySelector("#cliente").value = document.querySelector("#cliente-impresion").innerText;
    document.querySelector("#fecha").value = document.querySelector("#fecha-impresion").innerText;
    document.querySelector("#hora").value = document.querySelector("#hora-impresion").innerText;
    document.querySelector("#fila").value = document.querySelector("#fila-impresion").innerText;
    document.querySelector("#butaca").value = document.querySelector("#butaca-impresion").innerText;

    inputs.forEach(input => {
        input.style.display = "flex"
    })
    impresiones.forEach(impresion => {
        impresion.style.display = "none"
    })
}
