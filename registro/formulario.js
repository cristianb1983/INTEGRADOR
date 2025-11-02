//Regex
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
    }

    if(!regUsuario.test(inputUsuario.value)){
        inputUsuario.style.borderColor = 'red'
        opciones = 'usuario'
        crearError(inputUsuario, opciones)
    }

    if(!regTelefono.test(inputTelefono.value)){
        inputTelefono.style.borderColor = 'red'
        opciones = 'telefono'
        crearError(inputTelefono, opciones)
    } 

    if(!regTarjeta.test(inputTarjeta.value)){
        inputTarjeta.style.borderColor = 'red'
        opciones = 'tarjeta'
        crearError(inputTarjeta, opciones)
    }

    if(!regcodigo.test(inputCodigo.value)){
        inputCodigo.style.borderColor = 'red'
        opciones = 'codigo'
        crearError(inputCodigo, opciones)
    }
    return false;
}

function crearError(inputEmail, opciones){
    let contenedorError = document.createElement('div')
    let parrafoError = document.createElement('p')
    parrafoError.classList.add('sccJS')
    contenedorError.appendChild(parrafoError)
    switch(opciones) {
        case 'email':
            parrafoError.textContent = 'Error email incorrecto'
            inputEmail.insertAdjacentElement('afterend', contenedorError)
            break
        case 'usuario':
            parrafoError.textContent = 'El usuario ya existe'
            inputUsuario.insertAdjacentElement('afterend', contenedorError)
            break
        case 'telefono':
            parrafoError.textContent = 'Numero de telefono invalido'
            inputTelefono.insertAdjacentElement('afterend', contenedorError)
            break
        case 'tarjeta':
            parrafoError.textContent = 'Numero de tarjeta invalido'
            inputTarjeta.insertAdjacentElement('afterend', contenedorError)
            break
        case 'codigo':
            parrafoError.textContent = 'Codigo de seguridad invalido'
            inputCodigo.insertAdjacentElement('afterend', contenedorError)
            break
    }


    //SOLO QUEDA BORRAR PARA QUE NO SE DUPLIQUEN
}