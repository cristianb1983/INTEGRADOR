const regEmail = RegExp(/[A-Za-z0-9.-_]{3,15}(gmail|hotmail)\.com$/)
const regUsuario = RegExp(/[A-Z]{3,15}/i)
const regTelefono = RegExp(/[0-9]/)
const regTarjeta = RegExp(/[0-9]{5,}/)
const regcodigo = RegExp(/[0-9]{3}/)

const formulario = document.forms['registro']
const inputEmail = formulario['email']
const inputUsuario = formulario['usuario']
const inputTelefono = formulario['telefono']
const inputTarjeta = formulario['numeroTarjeta']
const inputCodigo = formulario['codSeguridad']

let opciones
function validarFormulario(){

    if(!regEmail.test(inputEmail.value)){
        inputEmail.style.borderColor = 'red'
        opciones = 'email'
        crearError(inputEmail, opciones)
    }else{
        removerHijos(inputEmail)
    }

    if(!regUsuario.test(inputUsuario.value)){
        inputUsuario.style.borderColor = 'red'
        opciones = 'usuario'
        crearError(inputUsuario, opciones)
    }else{
        removerHijos(inputUsuario)
    }

    if(!regTelefono.test(inputTelefono.value)){
        inputTelefono.style.borderColor = 'red'
        opciones = 'telefono'
        crearError(inputTelefono, opciones)
    }else{
        removerHijos(inputTelefono)
    } 

    if(!regTarjeta.test(inputTarjeta.value)){
        inputTarjeta.style.borderColor = 'red'
        opciones = 'tarjeta'
        crearError(inputTarjeta, opciones)
    }else{
        removerHijos(inputTarjeta)
    }

    if(!regcodigo.test(inputCodigo.value)){
        inputCodigo.style.borderColor = 'red'
        opciones = 'codigo'
        crearError(inputCodigo, opciones)
    }else{
        removerHijos(inputCodigo)
    }
    return false;
}

function crearError(input, opciones){
    evitarDuplicados(input);
    let parrafoError = document.createElement('p')
    parrafoError.classList.add('cssJs')
    switch(opciones) {
        case 'email':
            parrafoError.textContent = 'Error email incorrecto'
            break
        case 'usuario':
            parrafoError.textContent = 'El usuario ya existe'
            break
        case 'telefono':
            parrafoError.textContent = 'Numero de telefono invalido'
            break
        case 'tarjeta':
            parrafoError.textContent = 'Numero de tarjeta invalido'
            break
        case 'codigo':
            parrafoError.textContent = 'Codigo de seguridad invalido'
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


