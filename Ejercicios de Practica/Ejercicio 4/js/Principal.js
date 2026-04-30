import Cl_Chofer from "./Cl_Chofer.js";
import Cl_IChofer from "./Cl_IChofer.js";

let iChofer= new Cl_IChofer(),
    nombre=iChofer.leernombre(),
    canKm=iChofer.leercanKm(),
 
    Chofer= new Cl_Chofer(nombre,canKm),
    salida= document.getElementById("Salida")
    salida.innerHTML= iChofer.repChofer(Chofer.nombre,Chofer.canKm,Chofer.montBase(),Chofer.montCom(),Chofer.montTotal())