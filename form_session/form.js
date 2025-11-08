function validarFormulario(){
    const formulario = document.forms['formularioLogin']
    const inputUsuario = formulario ['usuario'];
    const inputContraseña = formulario ['contraseña'];
    const regUsuario = RegExp(/[A-Z]{3,15}/i)
    const RegContraseña =  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    const mensajeExito = document.getElementById('mensajeExito');

    let opciones;
    let valido = true;

    if(!regUsuario.test(inputUsuario.value)){
        inputUsuario.style.borderColor = 'red'
        opciones = 'usuario'
        crearError(inputUsuario, opciones)
        valido = false;
    }else{
        removerHijos(inputUsuario)
    }
    if(!RegContraseña.test(inputContraseña.value)){
        inputContraseña.style.borderColor = 'red'
        opciones = 'contraseña'
        crearError(inputContraseña, opciones)
        valido = false;
    }else{
        removerHijos(inputContraseña)
    }
    if (valido) {
    const usuario = inputUsuario.value.trim();
    
    mensajeExito.textContent = `Bienvenido ${usuario} ya puedes disfrutar tus peliculas favotitas!!!`;  ;
    mensajeExito.style.color = "white";
    mensajeExito.style.backgroundColor = "green";
    mensajeExito.style.padding = "10px";
    mensajeExito.style.marginTop = "15px";
    mensajeExito.style.textAlign = "center";
    }
return false;

}
function crearError(input, opciones){
    evitarDuplicados(input);
    let parrafoError = document.createElement('p')
    parrafoError.classList.add('cssJs')
    switch(opciones) {
        case 'usuario':
            parrafoError.textContent = 'Debe ingresar un usuario valido'
            break
        case 'contraseña':
            parrafoError.textContent = 'Contraseña invalida'
            break
    }
    input.insertAdjacentElement('afterend', parrafoError)
    }

function evitarDuplicados(input) {
    const siguiente = input.nextElementSibling;
    if (siguiente.classList.contains('cssJs')) {
        siguiente.remove();
    }
}

function removerHijos(input){
    const error = input.nextElementSibling;
    if (error.classList.contains('cssJs')) {
        input.style.borderColor = 'white'
        error.remove();
    }
}


 