export default class Cl_IEmpleado{

    leerNombre(k){
        return prompt ("Ingrese el nombre del empleado");
    }
    leerEdad(){
        return prompt ("Ingrese la edad: ");
    }
    leerSexo(){
        return prompt ("Ingrese el sexo: (1.-Masculino 2.-Femenino");
    }
    leerEstCivil(){
        return prompt ("Ingrese el Estado Civil: (1.-Soltero  2.-Casado  3.-Divorciado  4.-Viudo  5.-Concubino  6.-Otros)");
    }
    leerIngresos(){
        return prompt ("Ingrese los Ingresos: ")
    }
}