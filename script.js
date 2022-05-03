const $tiempo = document.querySelector('.tiempo');

function digitalClock(){
    let relojito = new Date(),
    dia = relojito.getDate(),
    mes = relojito.getMonth(),
    anio = relojito.getFullYear(),
    diaSemana = relojito.getDay();


    let timeString = relojito.toLocaleTimeString();
    $tiempo.innerHTML = timeString;

}
setInterval(() => {
    digitalClock()
}, 1000);