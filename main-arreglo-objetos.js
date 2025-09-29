const form = document.getElementById('formulario_cursos');
const inputCurso = document.getElementById('nombre_curso');
const inputProfe = document.getElementById('profesor');
const inputPrecio = document.getElementById('precio');
const inputCiudad = document.getElementById('ciudad');
const inputCupo = document.getElementById('cupo');
const mensajeCurso = document.getElementById('mensaje_curso');
const btnDelete = document.getElementById('borrar_curso'); // 👈 corregido (sin espacio)

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const curso = inputCurso.value.trim();
    const profesor = inputProfe.value.trim();
    const precio = inputPrecio.value.trim();
    const ciudad = inputCiudad.value.trim();
    const cupo = inputCupo.value.trim();

    if (curso == "" || profesor == "" || precio == "" || ciudad == "" || cupo == "") {
        alert('Tienes que completar todos los campos');
        return;
    }

    const nuevoCurso = {
        nombre: curso,
        profesor: profesor,
        precio: precio,
        ciudad: ciudad,
        cupo: cupo
    }

    const cursosGuardados = JSON.parse(localStorage.getItem('cursos')) || [];
    cursosGuardados.push(nuevoCurso);

    localStorage.setItem('cursos', JSON.stringify(cursosGuardados));
    form.reset();
});

document.addEventListener('DOMContentLoaded', (e) => {
    const cursoCreado = localStorage.getItem('cursos');
    if (cursoCreado) {
        const objetoCurso = JSON.parse(cursoCreado);

        // 👇 aquí solo mostramos el último curso agregado
        const ultimoCurso = objetoCurso[objetoCurso.length - 1];

        mensajeCurso.style.whiteSpace = 'pre-line';
        mensajeCurso.textContent =
            'curso: ' + ultimoCurso.nombre +
            '\nprofesor: ' + ultimoCurso.profesor +
            '\nprecio: ' + ultimoCurso.precio +
            '\nciudad: ' + ultimoCurso.ciudad +
            '\ncupo: ' + ultimoCurso.cupo;
    }
});

btnDelete.addEventListener('click', () => {
    localStorage.removeItem('cursos');
    mensajeCurso.textContent = 'Aquí se mostrará el curso creado';
});
