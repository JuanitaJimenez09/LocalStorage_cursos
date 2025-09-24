const formulario = document.getElementById('formulario');
const input = document.getElementById('nombre');
const h2 = document.getElementById('saludo');
const btnBorrar = document.getElementById('borrar');
const usuarioCreado = document.getElementById('usuario-creado');




document.addEventListener('DOMContentLoaded', ()=>{
    const usuarioGuardado = localStorage.getItem('usuario');
    if(usuarioGuardado){
        usuarioCreado.textContent = 'bienvenido de nuevo ' + usuarioGuardado;
    }

})

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    const nombre = input.value.trim();

    if(nombre==''){
        alert('Es necesario ingresar tu nombre ');
        return;
    }

    localStorage.setItem('usuario', nombre);
    h2.textContent = 'Bienvenido ' + nombre;
    input.value='';

})

document.addEventListener('DOMContentLoaded', ()=>{
    const usuarioGuardado = localStorage.getItem('usuario');
    if(usuarioGuardado){
        saludo.textContent = 'Bienvenido de nuevo ' + usuarioGuardado;

    }
    
})

btnBorrar.addEventListener('click' , ()=>{
    localStorage.removeItem('usuario');
    saludo.textContent ='Bienvenido usuario indefinido';
})

document.addEventListener('DOMContentLoaded', ()=>{
    const saludo = localStorage.getItem('usuario');
    if(saludo){
        saludo.textContent = 'bienvenido de nuevo ' + saludo;
    }

})