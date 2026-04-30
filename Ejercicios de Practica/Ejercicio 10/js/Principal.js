import Cl_Decanato from "./Cl_Decanato.js";
import Cl_IDecanato from "./Cl_IDecanato.js";
import Cl_Comedor from "./Cl_Comedor.js";
import Cl_IComedor from "./Cl_IComedor.js";

let iComedor = new Cl_IComedor(),
    comedor = new Cl_Comedor(),
    salida = document.getElementById("salida");

    let Opc=1
    while(Opc==1){
        let iDecanato = new Cl_IDecanato(),
        n = iDecanato.leerNombre(),
        bB = iDecanato.leerBandBecados(),
        bNB = iDecanato.leerBandNoBecados(),
        bO = iDecanato.leerBandOtros()

        let decanato = new Cl_Decanato(n,bB,bNB,bO)
            comedor.procesarDecanato(decanato)
            salida.innerHTML += iDecanato.repDecanato(decanato.nombre,decanato.totalBandejas())
        Opc = iDecanato.solicitarOpc()
    }


    salida = document.getElementById("salida");
    salida.innerHTML += iComedor.repComedor(comedor.totalBandejasBecados(),comedor.totalBandejasOtros(),comedor.porcentajeBecados())
    