export default class Cl_ISeccion{

    leerCodigo(){
        return prompt("Ingrese el Codigo de la Seccion: ");
    }

    repSeccion(cantAprob,promNotas,porcReprob,cantSus){
        return `La Cantidad de Estudiantes aprobados fue: ${cantAprob}
        <br> El promedio de la Seccion fue de: ${promNotas}pts.
        <br> El porcentaje de Aplazados de la Seccion es de: ${porcReprob}%
        <br> La Cantidad de estudiantes que pueden sustituir: ${cantSus}`;
    }
}