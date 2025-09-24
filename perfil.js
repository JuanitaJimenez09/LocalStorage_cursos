

const usuarioCreado = document.getElementById('usuario-creado');




document.addEventListener('DOMContentLoaded', ()=>{
    const usuarioGuardado = localStorage.getItem('usuario');
    if(usuarioGuardado){
        usuarioCreado.textContent = 'bienvenido de nuevo ' + usuarioGuardado;
    }

})
