function validarFormulario(){
    const formulario = document.forms['formularioLogin']
    const inputUsuario = formulario ['usuario'];
    const inputContraseña = formulario ['contraseña'];
    const mensajeError = document.getElementById('mensajeError');
    const expRegU = /^(\w)+ @ (\w)+\.com(\.ar)?$/
    const expRegC =  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;


    if(inputUsuario.value.trim() === "" && !expRegU.test(inputUsuario.value)){
        mensajeError.textContent = 'Debe ingresar un usuario.';
        inputUsuario.style.borderBottom = '2px solid red'
        
        return;
    } else{
         inputUsuario.style.borderBottom = '2px solid white';
    }
    if (!expRegC.test(inputContraseña.value)) {
        inputContraseña.style.borderBottom = '2px solid red'
        
    } else {
        inputUsuario.style.borderBottom = '2px solid white';
    }
    return false;
}
