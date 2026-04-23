export default class Cl_IEstudiante{

    leerNombre(i){
        return prompt("Ingrese el nombre del Estudiante " + (i+1));
    }
    leerNota1(){
        return prompt("Ingrese la Nota 1: ");
    }
    leerNota2(){
        return prompt("Ingrese la Nota 2: ");
    }
    leerNota3(){
        return prompt("Ingrese la Nota 3: ");
    }

    repEstudiante(no,notaFinal){
        return `Nombre del Estudiante: ${no}
        <br> Nota Final: ${notaFinal}pts.`;
    }
}