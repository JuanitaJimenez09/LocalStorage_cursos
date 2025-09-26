const form = document.getElementById('formulario_cursos');
const inputCurso = document.getElementById('nombre_curso');
const inputProfe = document.getElementById('profesor');
const inputPrecio = document.getElementById('precio');
const inputCiudad = document.getElementById('ciudad');
const inputCupo = document.getElementById('cupo');
const mensajeCurso = document.getElementById('mensaje_curso');
const btnDelete = document.getElementById('borrar curso');

form.addEventListener('submit' , (e)=>{
     e.preventDefault();
     const curso = inputCurso.value.trim();
     const profesor = inputProfe.value.trim();
     const precio = inputPrecio.value.trim();
     const ciudad = inputCiudad.value.trim();
     const cupo = inputCupo.value.trim();
     
     if(curso=="" || profesor=="" || precio=="" || ciudad=="" || cupo==""){
        alert('Tienes que  completar todos los campos');
        return;
     }

    const nuevoCurso = {
    nombre: curso,
    profesor: profesor,
    precio: precio,
    ciudad: ciudad, 
    cupo: cupo


} 
/*CAPTURAMOS EL ARREGLO EXISTENTE EN EL LOCAL STORAGE O LO CREAMOS VACIO SI NO EXISTE PREVIAMENTE.*/

const cursosGuardados = JSON.parse(localStorage.getItem('cursos')) || [];
/*AGREGAMOS AL ARREGLO[] CURSOS GUARDADOS EL NUEVO CURSO */
cursosGuardados.push(nuevoCurso)

localStorage.setItem('cursos', JSON.stringify(cursosGuardados))
form.reset();
})

document.addEventListener('DOMContentLoaded' , (e)=>{
    const cursoCreado = localStorage.getItem('curso');
    if(cursoCreado){
        /*EL JSON.PARSE SIRVE PARA VOLVER A CONVERTIR LOS DATOS QUE HABIA EN STRING */
        const objetoCurso = JSON.parse(cursoCreado);

        mensajeCurso.style.whiteSpace= 'pre-line';
        mensajeCurso.textContent = ' curso:' + objetoCurso.nombre + '\n profesor:' + objetoCurso.profesor + '\n precio:' + objetoCurso.precio + '\n ciudad:' + objetoCurso.ciudad + '\n cupo:' + objetoCurso.cupo

    }
})

btnDelete.addEventListener('click' , ()=>{
    localStorage.removeItem('cursos');
    mensajeCurso.textContent = 'Aquí se mostrara el curso indefinido'
})


