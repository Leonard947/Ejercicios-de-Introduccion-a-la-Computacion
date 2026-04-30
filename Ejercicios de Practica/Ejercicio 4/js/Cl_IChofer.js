export default class Cl_IChofer{

    leernombre(){
        return prompt("Ingrese su Nombre: ");
    }
    leercanKm(){
        return prompt("Ingrese la Cantidad de Kilometros(Km) recorridos: ");
    }

    repChofer(nombre,canKm,montBase,montCom,montTotal){
        return `Nombre del Chofer: ${nombre}
        <br> Cantidad de Kilometros(Km) recorridos: ${canKm}Km
        <br> 
        <br> Monto Base: ${montBase}$
        <br> Monto de la Comision: ${montCom}$
        <br> Monto Total: ${montTotal}$`;
    }
}
//Cierre de la Clase IChofer