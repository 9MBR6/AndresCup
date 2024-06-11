let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var participantes = document.getElementById("participantes");
    var distancia_participantes = window.innerHeight - participantes.getBoundingClientRect().top;
    if(distancia_participantes >= 100){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("Paco");
        habilidades[1].classList.add("MataVacas");
        habilidades[2].classList.add("Sondo");
        habilidades[3].classList.add("Xiel");
        habilidades[4].classList.add("David");
        habilidades[5].classList.add("PacoPartys");
        habilidades[6].classList.add("UwU");
        habilidades[7].classList.add("Wanhe");
        habilidades[8].classList.add("Spycish");
        habilidades[9].classList.add("Ash");
        habilidades[10].classList.add("Kiqe");
        habilidades[11].classList.add("Manu");
        habilidades[12].classList.add("Ovni");

    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

function downloadNormas() {
    const link = document.createElement('a');
    link.href = 'Documentos/pokemon_normas_3.pdf';  // Ruta al archivo PDF
    link.download = 'pokemon_normas_3.pdf';  // Nombre con el que se descargará el archivo
    link.click();
}

function downloadInstalacion() {
    const link = document.createElement('a');
    link.href = 'Documentos/GUIA_DE_INSTALACION.pdf';  // Ruta al archivo PDF
    link.download = 'GUIA_DE_INSTALACION.pdf';  // Nombre con el que se descargará el archivo
    link.click();
}


