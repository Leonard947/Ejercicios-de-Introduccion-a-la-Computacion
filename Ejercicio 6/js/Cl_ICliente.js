export default class Cl_ICliente{

    leerNombre(){
        return prompt("Ingrese su Nombre: ");
    }
     leerTipo(){
        return prompt("Que tipo de Pizza desea llevar?");
    }
    leerCantPizza(){
        return prompt("Ingrese la cantidad de pizza que desea: ");
    }

    repCliente(subTotal,desc,Total){
        return `Monto inicial: ${subTotal}$
            <br> Monto descontable: ${desc}$
            <br> Monto total: ${Total}$`;
    }
   
}
//Cierre de Clase