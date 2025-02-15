
import CL_Estudiante from "./CL_Estudiante.js";
import CL_Seccion from "./CL_Seccion.js";

let estud1 = new CL_Estudiante(888,60),
    estud2 = new CL_Estudiante(777,50),
    estud3 = new CL_Estudiante(999,40),
    estud4 = new CL_Estudiante(333,80),
    estud5 = new CL_Estudiante(111,30),
    estud6 = new CL_Estudiante(666,90),
    estud7 = new CL_Estudiante(444,48),
    estud8 = new CL_Estudiante(222,60);

let seccion = new CL_Seccion();

seccion.procesarEstudiante(estud1);
seccion.procesarEstudiante(estud2);
seccion.procesarEstudiante(estud3);      
seccion.procesarEstudiante(estud4);
seccion.procesarEstudiante(estud5);
seccion.procesarEstudiante(estud6);
seccion.procesarEstudiante(estud7);
seccion.procesarEstudiante(estud8);


let salida = document.getElementById("salida");

salida.innerHTML = ` 
<br>Cantidad de estudiantes aprobados: ${seccion.cantidadAprobados()},
<br>Cantidad de estudiantes reprobados: ${seccion.cantidadReprobados()},
<br>Nota promedio de la seccion : ${seccion.promedio()} `
