import Cl_Estudiante from "./Cl_Estudiante.js";
import Cl_IEstudiante from "./Cl_IEstudiante.js";
import Cl_Seccion from "./Cl_Seccion.js";
import Cl_ISeccion from "./Cl_ISeccion.js";

let iSeccion = new Cl_ISeccion(),
    co = iSeccion.leerCodigo(),

    Seccion = new Cl_Seccion(co),
    Salida= document.getElementById("Salida");

for(let i=0; i<3; i++){
    let iEstudiante = new Cl_IEstudiante(),
    no=iEstudiante.leerNombre(i),
    n1=iEstudiante.leerNota1(),
    n2=iEstudiante.leerNota2(),
    n3=iEstudiante.leerNota3(),

    Estudiante = new Cl_Estudiante(no,n1,n2,n3);

    Salida.innerHTML+= 
        iEstudiante.repEstudiante(Estudiante.nombre,Estudiante.notaFinal())+ "<br>";

    Seccion.procesarEst(Estudiante);
    }

Salida.innerHTML += iSeccion.repSeccion(
    Seccion.cantAprob(),
    Seccion.promNotas(),
    Seccion.porcReprob(),
    Seccion.cantSus()
);
