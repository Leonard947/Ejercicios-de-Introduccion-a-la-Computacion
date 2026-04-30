import Cl_Estudiante from "./Cl_Estudiante.js";
import Cl_IEstudiante from "./Cl_IEstudiante.js";

let iEstudiante = new Cl_IEstudiante(),
    n1=iEstudiante.leerNota1(),
    n2=iEstudiante.leerNota2(),
    n3=iEstudiante.leerNota3(),

    estudiante = new Cl_Estudiante(n1,n2,n3),
    salida= document.getElementById("salida");

    salida.innerHTML = 
    iEstudiante.repEstudiante(
        estudiante.notaFinal(),
        estudiante.resultado()
    );