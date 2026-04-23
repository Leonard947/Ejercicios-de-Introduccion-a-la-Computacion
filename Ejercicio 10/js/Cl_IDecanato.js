export default class Cl_IDecanato{

    leerNombre(){
        return prompt("Ingrese el Nombre del Decanato: ");
    }
    leerBandBecados(){
        return prompt("Ingrese la cantidad de Bandejas servidas a Estudiantes Becados: ");
    }
    leerBandNoBecados(){
        return prompt("Ingrese la cantidad de Bandejas servidas a Estudiantes No Becados: ");
    }
    leerBandOtros(){
        return prompt("Ingrese la cantidad de Bandejas servidas a Otros Comensales: ");
    }
    solicitarOpc(){
        return prompt("Desea seguir contando estudiantes de otro decanato?: (1.-SI | 0.-NO)")
    }
    repDecanato(nombre ,totalBandejas){
        return `
        <br> El nro. total de Bandejas servidas por ${nombre} fue: ${totalBandejas}
        <br>`;
    }
}