let imagenes = document.getElementsByClassName("poster");
let posicion = 5;
function miFuncion1() {
    for(let i = 0; i < imagenes.length; i++){
        if(posicion == 0){
            return
        }
        imagenes[i].innerHTML = imagenes[posicion].innerHTML
        posicion--;
    }
}

